import "./calender.styles.scss";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { CalenderContext } from "../../../contexts/calender.context";

const getTimes = (timeSteps = 30, startTime = 6, endTime = 23) => {
  const finalTimes = [];
  // 24 hours in a day
  for (var i = startTime; i < endTime; i++) {
    for (var x = 0; x < 60; x += timeSteps) {
      var time = "";
      if (i < 10) {
        if (x < 10) {
          time = `0${i}:0${x}`;
        } else {
          time = `0${i}:${x}`;
        }
      } else {
        if (x < 10) {
          time = `${i}:0${x}`;
        } else {
          time = `${i}:${x}`;
        }
      }
      finalTimes.push(time);
    }
  }
  return finalTimes;
};

const Calender = () => {
  const { timeSteps, startTime, endTime } = useContext(CalenderContext);

  const times = getTimes(timeSteps, startTime, endTime);

  const visibleDays = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="calender-container">
      <Table
        striped
        bordered
        responsive
        size="sm"
        variant="dark"
        className="calender"
      >
        <thead>
          <tr id="calender-headers" className="calender-headers">
            <th className="calender-header-item"></th>
            <th className="calender-header-item">Monday</th>
            <th className="calender-header-item">Tuesday</th>
            <th className="calender-header-item">Wednesday</th>
            <th className="calender-header-item">Thursday</th>
            <th className="calender-header-item">Friday</th>
            <th className="calender-header-item">Saturday</th>
            <th className="calender-header-item">Sunday</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td id="time-col">{time}</td>
              {visibleDays.map((day) => (
                <td className="cell" key={`${day}-${time}`}>
                  <div className="cell-button"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Calender;
