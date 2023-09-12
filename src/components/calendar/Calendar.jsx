import { useState } from "react"
import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css';
import "./calendar.css";

const ValuePiece = Date | null;

const Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyApp() {
    const [value, setValue] = useState(new Date());

    return (

        <div>
            <Calendar onChange={setValue} value={value} className="react-calendar"/>
        </div>

    )
}