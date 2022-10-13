import { useEffect } from "react";
import "./grid.styles.scss";

const getTimes = (timeSteps = 30) => {
  const finalTimes = [];
  // 24 hours in a day
  for (var i = 0; i < 24; i++) {
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

const Grid = ({ timeSteps = 30, visibleDays = 3 }) => {
  const taskList = [
    {
      id: 1,
      name: "Task 1",
      title: "Check-in",
      description:
        "Follow the signs to the registration desk inside the north entrance",
      startTime: "",
      endTime: "",
    },
    {
      id: 2,
      name: "Task 2",
      title: "Check-in",
      description:
        "Follow the signs to the registration desk inside the north entrance",
      startTime: "",
      endTime: "",
    },
    {
      id: 3,
      name: "Task 3",
      title: "Check-in",
      description:
        "Follow the signs to the registration desk inside the north entrance",
      startTime: "",
      endTime: "",
    },
    {
      id: 4,
      name: "Task4",
      title: "Check-in",
      description:
        "Follow the signs to the registration desk inside the north entrance",
      startTime: "",
      endTime: "",
    },
  ];

  const times = getTimes(timeSteps);
  const visibleDaysArray = [];
  for (let index = 0; index < visibleDays; index++) {
    visibleDaysArray.push(index);
  }

  useEffect(() => {
    document.querySelector(
      ".schedule-container"
    ).style.gridTemplateColumns = `repeat(${visibleDays}, 1fr)`;
  });

  return (
    <div className="grid-container">
      <div className="task-list">
        {taskList.map((task) => (
          <div className="task" key={task.id}>
            <h3>{`${task.name}`}</h3>
            <p>{`${task.description}`}</p>
          </div>
        ))}
      </div>
      <div className="schedule-container">
        <p className="blocker"></p>
        {times.map((time) => (
          <div className="time-item" key={time}>
            <h3 className="time">{`${time}`}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
/*
< div className="days-container">
        <p className="blocker"></p>
        {visibleDaysArray.map((day) =>
          times.map((time) => (
            <div className="timeslot" key={`${day}-${time}`}>
              <h3 className="time">{`${time}`}</h3>
            </div>
          ))
        )}
      </> */
