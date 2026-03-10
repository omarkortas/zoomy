import React from "react";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsClipboardFill,
} from "react-icons/bs";
import zoomy_noir from "../../assets/zoomy_noir.png";
import { NavLink } from "react-router-dom";
import { FaFileAlt, FaMap, FaTasks, FaUsersCog } from "react-icons/fa";
function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={zoomy_noir} alt="zoomy logo" className="logo-dash" />
        </div>
        <span className="icon-dash close_icon">X</span>
      </div>
      <ul className="sidebar-list"> 
        <li className="sidebar-list-item">
          <NavLink to="/dashboard/home_dash">
            <BsGrid1X2Fill className="icon-dash" /> 
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/dashboard/users">
            <BsPeopleFill className="icon-dash" />
            Users List
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/dashboard/roadmaps">
            <FaMap className="icon-dash" />
            Roadmaps
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/dashboard/publications">
            <FaFileAlt className="icon-dash" />
            Publications
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/dashboard/admins">
            <FaUsersCog className="icon-dash" />
            Admins List
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/dashboard/tasks">
            <FaTasks className="icon-dash" />
            Tasks 
          </NavLink> 
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
