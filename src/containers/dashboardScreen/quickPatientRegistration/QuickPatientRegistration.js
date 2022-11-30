import React from "react";
import { useContext } from "react";
import Button from "../../../common/button/Button";
import { QuickPatientContext } from "../../context/quickPatient/QuickPatientContext";

const QuickPatientRegistration = () => {
  const {
    patientName, updatePatientName,
    age, updateAge,
    gender, updateGender,
    refferdby, updateRefferdBy,
    phone, updatePhone, savePatients,} = useContext(QuickPatientContext)

    console.log('Patient Name:',patientName);
    console.log('Age',age);
    console.log('Gender',gender);
    console.log('Referred By:',refferdby);
    console.log('Phone',phone);
  return (
    <form onSubmit ={(e) =>savePatients(e)}>
    <div className="dashboard">
      <div className="dashboard-registration">
        <p>Quick Patient Registration</p>
        <hr />
        <div className="quick-register">
          <div className="quick-input">
            <label htmlFor="fname">Patient Name:</label>
            <input
              onChange={(e) => { updatePatientName(e.target.value) }}
              value={patientName}
              type="text" id="fname" name="name" />
          </div>
          <div className="quick-input">
            <label htmlFor="lname">Age:</label>
            <input
            onChange={(e)=>{ updateAge(e.target.value)}}
            value={age}
            type="text" id="lname" name="age" />
          </div>
        </div>
        <div className="quick-register">
          <div className="quick-input">
            <label htmlFor="fname">Gender:</label>
            <input 
            onChange={(e)=>{updateGender(e.target.value)}}
            value={gender}
            type="text" id="fname" name="gender" />
          </div>
          <div className="quick-input">
            <label htmlFor="lname">Referred By:</label>
            <input
            onChange={(e)=>{updateRefferdBy(e.target.value)}}
            value={refferdby}
            type="text" id="lname" name="referred" />
          </div>
        </div>
        <div className="quick-phone">
          <div className="quick-input">
            <label htmlFor="lname">Phone:</label>
            <input
            onChange={(e)=>{updatePhone(e.target.value)}}
            value={phone}
            type="text" id="lname" className="phone" />
          </div>
        </div>
        <div className="quick-registerbtn">
          <Button className="quick-savebtn"  onClick={savePatients} label="Save Patient" />
        </div>
      </div>
    </div>
    </form>
  );
};

export default QuickPatientRegistration;
