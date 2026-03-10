import React from "react";
import "./Dashboard.css";
import {
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-dash">
      {/* <div className='menu-icon'>
            <BsJustify className='icon-dash'></BsJustify>
      </div> */}
      

      <div className="header-left">
        <BsSearch className="icon-dash"></BsSearch>
      </div>
      <div className="header-right">
        <span
        className="menu-icon"
        onClick={() => {
          document
            .getElementById("sidebar")
            .classList.toggle("sidebar-responsive");
        }}
      >
        ☰
      </span> 
        <a onClick={() => navigate("/dashboard/profileAdmin")}>
          {" "}
          <BsPersonCircle className="icon-dash" />
        </a>
      </div>
    </div>
  );
}

export default Header;
