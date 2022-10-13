import Calender from "./calender/calender.component";
import Tasks from "./tasks/tasks.component";

import "./layout.styles.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <Tasks />
      <Calender />
    </div>
  );
};

export default Layout;
