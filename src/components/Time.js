import { useState, useEffect } from "react";

const data = [
  "8:00 am",
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00pm",
  "3:00pm",
  "4:00 pm",
  "5:00 pm",
];

function Time({ date }) {
  const [event, setEvent] = useState(data);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const display = () => {
      setInfo(true);
    };
    display();
  }, []);

  const handleClick = (e) => {
    console.dir(e.target.innerText);
  };

  return (
    <div>
      {info ? (
        <div>
          {event.map((ele, idx) => (
            <div key={idx} className="border p-1 text-center">
              <button onClick={handleClick}>{ele}</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default Time;
