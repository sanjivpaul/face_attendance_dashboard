import "./widgetSmall.css"
import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react";
import { rtdb } from "../../firebase";
// import { ref, child, get, remove } from "firebase/database";

import {ref, query, orderByChild } from "firebase/database";

export default function WidgetSmall() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let list = [];
    //         const dbRef = ref(rtdb);
    //         try {
    //             get(child(dbRef, `Students/`)).then((snapshot) => {
    //                 if (snapshot.exists()) {
    //                     snapshot.forEach((snap) => {
    //                         const userData = snap.val()
    //                         console.log(userData)
    //                         list.push(userData)
    //                     })
    //                 } else {
    //                     console.log("No data available");
    //                 }
    //                 setData(list)
    //             }).catch((error) => {
    //                 console.error(error);
    //             });
    //         } catch (err) {
    //             console.log(err)
    //         }

    //     }
    //     fetchData()
    // }, [])

    const mostViewedPosts = query(ref(rtdb, 'Students'), orderByChild('createdAt'));
    // const res = mostViewedPosts.forEach(element => {

    // });
    console.log(mostViewedPosts)
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
