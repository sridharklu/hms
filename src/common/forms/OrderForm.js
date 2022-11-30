import React from "react";
import { MdOutbound, MdOutlinePersonOutline, MdOutlineSouth } from "react-icons/md";
import Input from "../input/Input";
import Label from "../label/Label";
import "../../assets/css/createorder.css"

const OrderForm = () => {
  return (
    <div className="patient-form">
      <div className="input-container">
        <Label label="Patient Code" />
        <div className="create-field">
          <Input
            className="create-code"
            type="text"   
            placeholder="Username"
            name="usrnm"
          />
        </div>
      </div>

      <div className="input-container">
        <Label label="Patient Name" />
        <div className="create-field">
        <MdOutlinePersonOutline className="icon" size={20} />
          <Input
            className="input-field"
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>
      </div>

      <div className="input-container">
        <Label label="Order-No" />
        <div className="create-field">
        <p className="icon" size={20} >C</p>
          <Input
            className="create-code"
            
          />
        </div>
      </div>

      <div className="input-container">
        <Label label="Order-Date" />
        <div className="create-field">
          <MdOutlineSouth className="icon" size={20} />
          <Input
            className="input-field"
           
          />
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
