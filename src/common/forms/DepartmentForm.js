import React,{useContext} from "react";
import Layout from "../layout/Layout";
import "../../assets/css/index.css";
import { MdOutbound, MdOutlineStorefront } from "react-icons/md";
import Input from "../input/Input";
import Label from "../label/Label";
import Button from "../button/Button";
import {DepartmentContext } from "../../containers/context/departmentContext/departmentContext";

const DepartmentForm = () => {
  const {cancelCourse,departmentCode,departmentName,remarks,TestResult,updatedepartmentCode,updatedepartmentName,updateremarks,updateprintTestResult}= useContext(DepartmentContext)
  
 
  return (
    <form id="department-form">
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Deparment Code " />
          <div className="create-field">
          <MdOutlineStorefront className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updatedepartmentCode(e.target.value)}
              value={departmentCode}
             />
             
            
          </div>
        </div>

        <div className="patient-container">
          <Label label="Department Name " />
          <div className="create-field">
            <MdOutlineStorefront className="icon" size={20} />
            <Input
              className="department-field"
              onChange={(e) => updatedepartmentName(e.target.value)}
              value={departmentName}
             />
             
            
          </div>
        </div>
      </div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Remark" />
          <div className="create-field">
            <Input
              className="department-field"
              onChange={(e) => updateremarks(e.target.value)}
              value={remarks}
             />
              
            
          </div>
        </div>

        <div className="patient-container">
          <Label label="Order-Date" />
          <div className="create-field">
          

            <div className="icon">
              <input type="checkbox" onChange={updateprintTestResult} />
            </div>
            <Input
              className="normal-field"
              // onChange={(e) => updateprintTestResult(e.target.value)}
              // value={TestResult}
            
           
              placeholder="Print Findings-reference Range Test Result"
             
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default DepartmentForm;
