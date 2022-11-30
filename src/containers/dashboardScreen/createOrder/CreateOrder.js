import React from "react";
import { MdEdit, MdPermIdentity } from "react-icons/md";

const DashBordOrder = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-createOrder">
        <div className="order-dashboard">
        <p>
          <MdEdit /> Create Order
        </p>
       
        </div>
        <hr/>
        <div className="patient">
          <MdPermIdentity size={80} />
          <div>
          <label htmlFor="fname">select Patient</label>
          <input type="text" placeholder="search patient.." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBordOrder;
