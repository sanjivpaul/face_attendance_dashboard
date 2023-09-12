import "./widgetLarge.css"

export default function WidgetLarge() {
    const Button = ({ type }) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLarge">
            <span className="widgetLargeTitle">Latest Transaction</span>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Faculty Name</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Time</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">sanjiv paul</span>
                    </td>
                    <td className="widgetLargeDate">14 jul 2021</td>
                    <td className="widgetLargeAmount">$144</td>
                    <td className="widgetLargeStatus"><Button type="Declined"/></td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">sanjiv paul</span>
                    </td>
                    <td className="widgetLargeDate">14 jul 2021</td>
                    <td className="widgetLargeAmount">$144</td>
                    <td className="widgetLargeStatus"><Button type="Pending"/></td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">sanjiv paul</span>
                    </td>
                    <td className="widgetLargeDate">14 jul 2021</td>
                    <td className="widgetLargeAmount">$144</td>
                    <td className="widgetLargeStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
