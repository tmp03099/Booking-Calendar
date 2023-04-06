import Calendar from "react-calendar";
import { useState } from "react";
import Time from "./Time";

function PickDate() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <section className="flex justify-center items-center mt-7">
      <div>
        <div>img</div>
        <div>
          <h4>Home Rent</h4>
          <h2>Test</h2>
          <p>30 min</p>
          <p>Location</p>
        </div>
      </div>
      <div className="mx-6 border">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>
      <div>{showTime ? <Time date={date} /> : null}</div>
    </section>
  );
}
export default PickDate;
