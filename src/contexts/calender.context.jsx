import { createContext, useReducer } from "react";

const initialState = {
  timeSteps: 30,
  startTime: 6,
  endTime: 23,
};

const actions = {
  SET_TIMESTEP: "SET_TIMESTEP",
  SET_STARTTIME: "SET_STARTTIME",
  SET_ENDTIME: "SET_ENDTIME",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_TIMESTEP:
      return { ...state, timeStep: action.value };
    case actions.SET_STARTTIME:
      return { ...state, startTime: action.value };
    case actions.SET_ENDTIME:
      return { ...state, endTime: action.value };
    default:
      return state;
  }
}

export const CalenderContext = createContext();

function CalenderProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    timeStep: state.timeStep,
    startTime: state.startTime,
    endTime: state.endTime,
    setTimeStep: (value) => {
      dispatch({ type: actions.SET_TIMESTEP, value });
    },
    setStartTime: (value) => {
      dispatch({ type: actions.SET_STARTTIME, value });
    },
    setEndTime: (value) => {
      dispatch({ type: actions.SET_ENDTIME, value });
    },
  };

  return (
    <CalenderContext.Provider value={value}>
      {children}
    </CalenderContext.Provider>
  );
}
export default CalenderProvider;

/* export const CalenderContext = createContext({
  timeStep: 30,
  startTime: 6,
  endTime: 23,

  changeTimeStep: (newStep) => newStep,
  changeStartTime: () => null,
  changeEndTime: () => null,
});

const CalenderProvider = () => {
  const [timeStep, setTimeStep] = useState(30);
  const [startTime, setStartTime] = useState(6);
  const [endTime, setEndTime] = useState(23);

  function changeTimeStep(newStep) {
    setTimeStep(newStep);
  }
  const changeStartTime = (newStartTime) => {
    setStartTime(newStartTime);
  };
  const changeEndTime = (newEndTime) => {
    setEndTime(newEndTime);
  };

  const value = {
    timeStep,
    startTime,
    endTime,
    setTimeStep,
    setStartTime,
    setEndTime,
  };

  return <CalenderContext.Provider value={value}></CalenderContext.Provider>;
};
*/
