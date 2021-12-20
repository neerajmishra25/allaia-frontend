import React from "react";
import "./SideNavbar.css";

import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "./../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
const SidebarNav = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div id="mySidenav" className={`sidenav ${drawerClasses}`}>
      <div className="mobile-header">
        <div className="sidebar-logo-container">
          <Logo color="black" />
        </div>
        <div className="close-icon-container">
          <AiOutlineClose onClick={props.handleClick} />
        </div>
      </div>
      <div className="mobile-menu">
        <NavMenu />
      </div>
    </div>
  );
};

export default SidebarNav;
