import Layout from "./components/layout/layout.component";
import CalenderProvider from "./contexts/calender.context";

const App = () => {
  return (
    <CalenderProvider>
      <div className="App">
        <Layout />
      </div>
    </CalenderProvider>
  );
};

export default App;
