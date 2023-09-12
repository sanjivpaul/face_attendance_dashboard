// import Chart from "../../components/chart/Chart"
// import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
// import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetsLarge from "../../components/widgetLarge/WidgetLarge"
import Calendar from "react-calendar"

export default function Home() {
    return (
        <div className='homePage'>
            {/* <FeaturedInfo /> */}
            {/* <Chart data={userData} title="Sanjiv User Analytics" grid dataKey="Active User" /> */}

            <div className="homeWidgets">
                <div className="honeWidgetsTop">
                    <WidgetSmall />
                    <div className="calender">
                        <Calendar />
                    </div>
                </div>
                <WidgetsLarge />
            </div>
        </div>
    )
}
