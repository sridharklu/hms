import React from "react";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import "../../assets/css/index.css";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="sidebar-cotainer">
        <SideBar options={{headerShown: false}}/>
      </div>
      <div className="topBar-container">
        <Header options={{headerShown: false}}/>
      </div>
      <div className="content-container">{props.children}</div>
    </div>
  );
};

export default Layout;
