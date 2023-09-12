import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { rtdb } from "../../firebase";
import { ref, child, get, update } from "firebase/database";

export default function User() {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  const [newname, setNewname] = useState("");
  const [newemail, setNewemail] = useState("");
  const [newphone, setNewphone] = useState("");
  const [newaddress, setNewaddress] = useState("");

  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  const U_id = location.pathname.split("/")[2];


  useEffect(() => {
    const fetchData = async () => {
      //  let list = [];
      const dbRef = ref(rtdb);
      try {
        get(child(dbRef, `Students/${U_id}`)).then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val())
            const userData = snapshot.val()
            setData(userData)
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      } catch (err) {
        console.log(err)
      }

    }
    fetchData()
  }, [])
  //  console.log(userData)

  const handleUpdate = async (e) => {
    e.preventDefault()

    // if (newname == "") {
    //   newname = data.name;
    // }
    try {
      await update(ref(rtdb, `Students/${data.id}`), {

        // if new update value is empty then set it as old value dont update it
        name: (newname === "" ? data.name : newname),
        email: (newemail === "" ? data.email : newemail),
        phone: (newphone === "" ? data.phone : newphone),
        address: (newaddress === "" ? data.address : newaddress),

      })

    } catch (error) {
      console.log(error)
    }

  }

  // window.location.reload()
  // const time = data.createdAt

  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={data.profile_picture} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data.name}</span>
              <span className="userShowJobTitle">{data.designation}</span>
            </div>
          </div>
          <div className="userShopBottom">
            {/* <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">sanjivpaul81</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">14.07.2000</span>
            </div> */}

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91-{data.phone}</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{data.address}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{data.createdAt}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form
            className="userUpdateForm"
            onSubmit={handleUpdate}
          >
            <div className="userUpdateLeft">
              {/* <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="sanjivpaul81" />
              </div> */}

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder={data.name}
                  onChange={(e) => { setNewname(e.target.value) }} />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  className="userUpdateInput"
                  placeholder={data.email}
                  onChange={(e) => { setNewemail(e.target.value) }} />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder={data.phone}
                  onChange={(e) => { setNewphone(e.target.value) }} />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder={data.address}
                  onChange={(e) => { setNewaddress(e.target.value) }} />
              </div>

              {/* <div className="userUpdateItem">
                <label>Birth Date</label>
                <input
                  type="date"
                  className="userUpdateInput"
                  placeholder="14.07.2000" />
              </div> */}
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={data.profile_picture} alt="" className="userUpdateUploadImg" />
                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
