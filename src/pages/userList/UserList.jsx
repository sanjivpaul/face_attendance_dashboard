import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
import { rtdb } from "../../firebase";
import { ref, child, get, remove } from "firebase/database";
import Swal from 'sweetalert2'

export default function UserList() {

    // const [data, setData] = useState(userRows);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            const dbRef = ref(rtdb);
            try {
                // const querySnapshot = await getDocs(collection(rtdb, "Students/"));
                // querySnapshot.forEach((doc) => {
                //     list.push(doc)
                //     // doc.data() is never undefined for query doc snapshots
                //     // console.log(doc.id, " => ", doc.data());
                get(child(dbRef, `Students/`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach((snap) => {
                            const userData = snap.val()
                            console.log(userData)
                            list.push(userData)
                        })

                        // console.log(snapshot.val())
                        // list.push({...snapshot.val()})

                        //   setData(list)
                    } else {
                        console.log("No data available");
                    }

                    setData(list)

                }).catch((error) => {
                    console.error(error);
                });
            } catch (err) {
                console.log(err)
            }

        }
        fetchData()
    }, [])

    console.log("data", data)

    const handleDelete = (id) => {
        // filter will check all the data are present and if given id will match with data it will delete it
        // setData(data.filter((item) => item.id !== id))
        remove(ref(rtdb, "Students/" + id))
            .then(() => { Swal.fire("data deleted successfully") })
            .catch((error) => { console.log(error) })

        window.location.reload();
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: "name",
            headerName: 'Name',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="tableUserList">
                        <img src={params.row.profile_picture} alt="" className="tableUserListImg" />
                        {params.row.name}
                    </div>
                );
            }
        },
        {
            field: 'branch',
            headerName: 'Branch',
            width: 150,
            editable: true,
        },
        {
            field: 'designation',
            headerName: 'Designation',
            width: 180,
            editable: true,
        },
        {
            field: 'total_attendance',
            headerName: 'Attendance',
            width: 170,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            // by using renderCell we can pass a arrow functions
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListBtnEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListBtnDeleteIcon"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },
    ];


    return (
        <div className="userList" >
            <DataGrid
                // this data is come from useState
                rows={data}
                columns={columns}
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    )
}
