import "./widgetLarge.css"
import { useEffect, useState } from "react";
import { rtdb } from "../../firebase";
import { ref, child, get } from "firebase/database";

export default function WidgetLarge() {

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
                            // console.log(userData)
                            list.push(userData)
                            // setData(userData)
                        })
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

    console.log(data.name)
    const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(data.timeStamp);
    const time = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.timeStamp);


    const Button = ({ type }) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLarge">
            <span className="widgetLargeTitle">Latest Transaction</span>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">User</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Time</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={data.profile_picture} alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">{data.name}</span>
                    </td>
                    <td className="widgetLargeDate">{date}</td>
                    <td className="widgetLargeAmount">{time}</td>
                    <td className="widgetLargeStatus"><Button type="Declined" /></td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">sanjiv paul</span>
                    </td>
                    <td className="widgetLargeDate">14 jul 2021</td>
                    <td className="widgetLargeAmount">$144</td>
                    <td className="widgetLargeStatus"><Button type="Pending" /></td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">sanjiv paul</span>
                    </td>
                    <td className="widgetLargeDate">14 jul 2021</td>
                    <td className="widgetLargeAmount">$144</td>
                    <td className="widgetLargeStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}
