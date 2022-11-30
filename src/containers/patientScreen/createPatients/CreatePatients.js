import React, { useContext } from "react";
import { MdOutlineArrowForward, MdOutlineChevronRight, MdOutlineDoubleArrow, MdPersonOutline } from "react-icons/md";
import Button from "../../../common/button/Button";
import Layout from "../../../common/layout/Layout";
import PatientForm from "../../../common/forms/PatientForm";
import { Link } from "react-router-dom";
import { PatientContext } from "../../context/patientContext/PatientContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePatients = () => {

  const navigate = useNavigate();
  const{patientCode, updatePatientCode,
    patientName,updatePatientName,
    gender,updateGender,
    dob,updateDob,
    age,updateAge,
    martialStatus,updateMartialStatus,
    weight,updateWeight,
    phone,updatePhone,
    email,updateEmail,
    referenceType,updateReferenceType,
    referredBy,updateRefferdBy,
    occupation,updateOccupation,
    station,updateStation,
    pinCode,updatePinCode,
    address,updateAddress,
    idcard,updateIdCard,
    registrationDate,updateRegistrationDate,
    print,updatePrint,
    remarks,updateRemarks, cancelCourse} = useContext(PatientContext)

  const handleClick= async () => {
  
         await axios
            .post("http://localhost:3001/api/patients/add-patient", {
            
    patientName: patientName,

    patientAge:age,
    patientGender:  gender,
    patientMobile: phone,
    referredBy:  referredBy,
    patientDoB:  dob,
    patientMartialStatus: martialStatus,
    patientWeight: weight,
    patientEmail: email,
    occupation:  occupation,
    station: station,
    pinCode: pinCode, 
    address: address,
    identityCard:  idcard,
    remarks: remarks,
    printTestResult:print
            }, 
  { headers: { "token": localStorage.getItem("token") } })
            .then((res) => {
              // navigate("/receiptlist")
              navigate("/dashboard")
              console.log("res:", res.data);
            })
            .catch((err) => {
              console.log("err:", err.message);
            })
  }
  
 
  return (
    <Layout>
      <div className="create-patient">
        <div className="create-topheader">
          <div className="create-navigate">
            <Link to="/patient">
          <p className="navigateLable">Patient</p>
            </Link>          
            <MdOutlineDoubleArrow/>
            <p>Create</p>
          </div>
          <div className="create-btn">
            <Button
              onClick={()=>cancelCourse(navigate("/patient"))} 
              className="cancel-btn" label="Cancel" />
              
            <Button
              onClick={handleClick}
              className="save-btn"
              label="Save Patient"
              icon={<MdPersonOutline size={17}/>}
            />
          </div>
        </div>
        <div className="form-header">
        <h3>Patient Details</h3>
        <hr></hr>
        </div>
        <PatientForm />
      </div>
    </Layout>
  );
};

export default CreatePatients;
