import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="grid-container">
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="content">
           <Outlet />
      </div>
    </div>
  );
}
export default Dashboard;
