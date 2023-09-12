import "./widgetSmall.css"
import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react";
import { rtdb } from "../../firebase";
import { ref, child, get } from "firebase/database";

// import {ref, query, orderByChild } from "firebase/database";

export default function WidgetSmall() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            const dbRef = ref(rtdb);
            try {
                get(child(dbRef, `Students/`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach((snap) => {
                            const userData = snap.val()
                            console.log(userData)
                            // list.push(userData)
                            setData(userData)
                        })
                    } else {
                        console.log("No data available");
                    }
                    // setData(list)
                }).catch((error) => {
                    console.error(error);
                });
            } catch (err) {
                console.log(err)
            }

        }
        fetchData()
    }, [])
    console.log(data.timeStamp)
    // const time = data.timeStamp
    // const timeFormat = time.format("DD-MM-YYYY");
    // console.log(timeFormat)
    // new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.timeStamp);

    const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(data.timeStamp);
    const time = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.timeStamp);

    console.log(date);
    console.log(time);

    // const currentAT = data.map((item)=>{
    //     return item.format("DD-MM-YYYY")
    // })

    // console.log(currentAT)

    // const mostViewedPosts = query(ref(rtdb, 'Students'), orderByChild('createdAt'));
    // const res = mostViewedPosts.forEach(element => {

    // });
    // useEffect(()=>{
    //     firebase.database().ref(U_id)
    // }, [])
    // console.log(mostViewedPosts)
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">Current Attendance</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">sanjiv paul</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" /> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
