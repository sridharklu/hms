import React, { useState } from "react";
import "../../App.css";
import "../../assets/css/index.css";

import {
  MdCloudUpload,
  MdDashboard,
  MdHome,
  MdPaid,
  MdPeopleAlt,
  MdPerson,
  MdPersonAddAlt1,
  MdReceipt,
  MdTextsms,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleDrawer = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div>
      <div className="navbutton" onClick={handleDrawer}>
        &#9776;
      </div>

      <div className="menu">
        <ul className="sidebar">
      
          <li className="menu-item">
            <p>
              <MdHome set="bulk" size={35} /> AloLab
            </p>
          </li>
         
          <Link to="/dashboard" style={{color:"white"}}>
          <li>
            <p>
              <MdDashboard set="bulk" size={20} /> Dashboard
            </p>
          </li>
         </Link>
         <Link to="/patient" style={{color:"white"}}>
          <li>  
            <p>        
              <MdPersonAddAlt1 set="bulk" size={20} />
              Patients
            </p>
          </li>
          </Link>
          <Link to="/labtest" style={{color:"white"}}>
          <li>
            <p>
              <MdPeopleAlt set="bold" size={20} />
              Lab Tests
            </p>
          </li>
          </Link>
          <Link to="/labtestgroup" style={{color:"white"}}>
          <li>
            <p>
              <MdReceipt set="bulk" size={20} />
              Lab Test Groups
            </p>
          </li>
          </Link>
          <Link to="/doctors" style={{color:"white"}}>
          <li>
            <p>
              <MdPaid set="bold" size={20} />
              Doctors
            </p>
          </li>
          </Link>
          <Link to="/department" style={{color:"white"}}>
          <li>
            <p>
              <MdTextsms set="bulk" size={20} />
              Departments
            </p>
          </li>
         </Link>
         <Link to="/order" style={{color:"white"}}>
          <li>
            <p>
              <MdCloudUpload set="bold" size={20} />
              Orders/Billing
            </p>
          </li>
         </Link>
         <Link to="/test" style={{color:"white"}}>
          <li className="user">
            <p>
              <MdPerson set="bold" size={20} />
              Test Results
            </p>
          </li>
          </Link>
        </ul>
      </div>

      {/** ---- responsive sidebar ------  */}
      {isMenu && (
        <div className="nav-responsive">
          <ul>
            <li className="menu-item">
              <p>
                <MdHome set="bulk" size={35} /> AloLab
              </p>
            </li>
            <li>
              <MdDashboard set="bulk" />
              <p>Dashboard</p>
            </li>
            <li>
              <MdPersonAddAlt1 set="bulk" />
              <p>registration</p>
            </li>
            <li>
              <MdPeopleAlt set="bold" />
              <p>Members</p>
            </li>
            <li>
              <MdReceipt set="bulk" />
              <p>Receipts</p>
            </li>
            <li>
              <MdPaid set="bold" />
              <p>Expenses</p>
            </li>
            <li>
              <MdTextsms set="bulk" />
              <p>Meeting</p>
            </li>
            <li>
              <MdCloudUpload set="bold" />
              <p>Backup</p>
            </li>
            <li className="logout">
              <MdPerson set="bold" />
              <p>User</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
