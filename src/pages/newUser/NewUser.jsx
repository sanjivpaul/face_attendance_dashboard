import { useEffect, useState } from "react"
import "./newUser.css"
import { FolderOpenOutlined } from "@material-ui/icons"
import { ref, serverTimestamp, set, now, toDate} from "firebase/database";
import { rtdb, storage } from "../../firebase";
import { ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function NewUser() {
    const [file, setFile] = useState("");
    const [id, setId] = useState("");
    const [branch, setBranch] = useState("");
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const [data, setData] = useState({})
    const [percentage, setPercentage] = useState(null);

    // const time = new Date().toDate().toDateString().toLocaleTimeString()

    useEffect(() => {
        const uploadFile = () => {
            // const fileName = `${id}.png`;
            // console.log(name)
            // console.table(id, branch, name, designation,gender, file)
            const storageRef = sRef(storage, `images/${id}.png`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPercentage(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // console.log('File available at', downloadURL);
                        setData((prev) => ({ ...prev, img: downloadURL }))
                    });
                }
            );

        }

        // if there is file call this function
        file && uploadFile()

    }, [file]);

    console.log(data);

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            // async function writeUserData(id, name, branch, designation, gender) {
            const res = await set(ref(rtdb, 'Students/' + id), {
                id: id,
                name: name,
                branch: branch,
                designation: designation,
                gender: gender,
                email: email,
                phone: phone,
                address: address,
                createdAt: serverTimestamp(),
                profile_picture: data.img
            });
            // }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New Faculty</h1>
            <form className="newUserForm" onSubmit={handleAdd}>

                <div className="newUserItem">
                    <label>User Id</label>
                    <input type="text" className="newUserInput" placeholder="MCA01" onChange={(e) => { setId(e.target.value.toUpperCase()) }} />
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" className="newUserInput" placeholder="Sanjiv" onChange={(e) => { setName(e.target.value) }} />
                </div>

                <div className="newUserItem">
                    <label>Branch Name</label>
                    <input type="text" className="newUserInput" placeholder="MCA" onChange={(e) => { setBranch(e.target.value.toUpperCase()) }} />
                </div>

                <div className="newUserItem">
                    <label>Designation</label>
                    <input type="text" className="newUserInput" placeholder="HOD" onChange={(e) => { setDesignation(e.target.value) }} />
                </div>

                <div className="newUserItem">
                    <label>Gender</label>
                    <input type="text" className="newUserInput" placeholder="MALE" onChange={(e) => { setGender(e.target.value.toUpperCase()) }} />
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" className="newUserInput" placeholder="abc@gmail.com" onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" className="newUserInput" placeholder="+911234567897" onChange={(e) => { setPhone(e.target.value) }} />
                </div>

                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" className="newUserInput" placeholder="Jamshedpur, Jharkhand" onChange={(e) => { setAddress(e.target.value) }} />
                </div>


                {/* 
                {Inputs.map((input) => {

                    <div className="newUserItem" key={input.id}>
                        <label>{input.label}</label>
                        <input
                            type={input.type}
                            className="newUserInput"
                            autoComplete={input.autoComplete} />
                    </div>
                })} */}

                {/* <div className="newUserItem">
                    {options.map((choice, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value={choice.value}
                                key={index}
                                checked={selectedValue === choice.value}
                                onChange={(e) => { setGender(e.target.value) }}
                            />
                        </label>
                    ))}
                </div> */}



                <div className="newUserItem upload-profile">
                    <img className="newUser-image" src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />

                    <label htmlFor="file" className="file">
                        Image : <FolderOpenOutlined color="primary" className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} onChange={(e) => { setFile(e.target.files[0]) }} />
                </div>

                <button disabled={percentage !== null && percentage < 100} className="newUserBtn" type="submit">Create</button>
            </form>
        </div>
    )
}
