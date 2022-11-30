import React,{useContext} from "react";
import Layout from "../layout/Layout";
import "../../assets/css/index.css";
import { MdAccessTime, MdDateRange, MdOutbound, MdOutlineAddLocation, MdOutlineAttachMoney, MdOutlineMailOutline, MdOutlineMedication, MdOutlinePersonalInjury, MdOutlinePersonOutline, MdOutlinePhone } from "react-icons/md";
import Input from "../input/Input";
import Label from "../label/Label";
import Button from "../button/Button";
import { DoctorContext } from "../../containers/context/doctorContext/DoctorContext";


const DoctorForm = () => {
  const {doctorName,DoctorCode,DoctorType,DoctorSpecialist,DoctorQualification,
    updateDoctorName,DoctorPhone, DoctorAmount, DoctorAppointment,DoctorEmail,
    DoctorUsername,DoctorAddress,DoctorSchedular,
     updateDoctorCode,updateDoctorType,updateDoctorSpecialist
    ,updateDoctorQualification,updateDoctorPhone,updateDoctorAppointment,updateDoctorAmount,
    updateDoctorEmail,updateDoctorSchedular,updateDoctorUsername,updateDoctorAddress
  } = useContext(DoctorContext)
  return (
    <div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Doctor Details" />
          <div className="create-tab">
            <Button className="lab-btn" label="Doctor" />
            <Button className="hospital-btn" label="OP" />
            <Button className="hospital-btn" label="Equipments" />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Doctor code" />
          <div className="create-field">
          <p className="icon" size={20}>D</p>
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorCode(e.target.value)}
             value={DoctorCode}
             
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Doctor Name" />
          <div className="create-field">
            <MdOutlinePersonOutline className="icon" size={20} />
            <Input
              className="larger-field"
             onChange={(e) => updateDoctorName(e.target.value)}
             value={doctorName}
            />
         
          </div>
        </div>
      </div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Type" />
          <div className="create-field">
            <MdOutlineAddLocation className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorType(e.target.value)}
             value={DoctorType}
             
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Specialist In" />
          <div className="create-field">
          <p className="icon" size={20}>.</p>
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorSpecialist(e.target.value)}
              value={DoctorSpecialist}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Qualification" />
          <div className="create-field">
            <MdOutlineMedication className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorQualification(e.target.value)}
             value={DoctorQualification}
             
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Phone" />
          <div className="create-field">
            <MdOutlinePhone className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorPhone(e.target.value)}
             value={DoctorPhone}
              
            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Time for Each Appointment" />
          <div className="create-field">
            <MdAccessTime className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorAppointment(e.target.value)}
              value={DoctorAppointment}
             
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Amount For Each Appointment" />
          <div className="create-field">
            <MdOutlineAttachMoney className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorAmount(e.target.value)}
              value={DoctorAmount}
             
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Email" />
          <div className="create-field">
            <MdOutlineMailOutline className="icon" size={20} />
            <Input
              className="larger-field"
              onChange={(e) => updateDoctorEmail(e.target.value)}
              value={DoctorEmail}
          
            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Schedular Days" />
          <div className="create-field">
            <MdDateRange className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorSchedular(e.target.value)}
              value={DoctorSchedular}
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="User Name" />
          <div className="create-field">
            <MdOutlinePersonOutline className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(e) => updateDoctorUsername(e.target.value)}
              value={DoctorUsername}
             
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Address" />
          <div className="create-field">
            <Input
              className="larger-field"
              onChange={(e) => updateDoctorAddress(e.target.value)}
              value={DoctorAddress}
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
