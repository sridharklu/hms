import React, { useContext, useState } from "react";
import Layout from "../layout/Layout";
import "../../assets/css/index.css";
import { MdDateRange, MdLocalParking, MdOutlineAlternateEmail, MdOutlineCardTravel, MdOutlineElderly, MdOutlineFavorite, MdOutlineMailOutline, MdOutlinePersonOutline, MdOutlinePhone, MdOutlinePushPin, MdOutlineSouthEast, MdOutlineVisibility, MdPlace, MdPriceChange } from "react-icons/md";
import Input from "../input/Input";
import Label from "../label/Label";
import Button from "../button/Button";
import { PatientContext } from "../../containers/context/patientContext/PatientContext";


const PatientForm = () => {
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
    remarks,updateRemarks} = useContext(PatientContext)
  console.log('patientCode', patientCode);
  console.log('patientName', patientName);
  console.log('gender', gender);
  console.log('dob', dob);
  console.log('age', age);
  console.log('martialStatus', martialStatus);
  console.log('weight', weight);
  console.log('phone', phone);
  console.log('email', email);
  console.log('referenceType', referenceType);
  console.log('referredBy', referredBy);
  console.log('occupation', occupation);
  console.log('station', station);
  console.log('pinCode', pinCode);
  console.log('address', address);
  console.log('idcard', idcard);
  console.log('registrationDate', registrationDate);
  console.log('print', print);
  console.log('remarks', remarks);


  // localStorage.setItem('patientCode', patientCode)
  return (
    <div className="pForm">
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Patient Of" />
          <div className="create-tab">
            <Button className="lab-btn" label="Lab" />
            <Button className="hospital-btn" label="Hospital" />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Patient Code" />
          <div className="create-field">
            <MdLocalParking className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updatePatientCode(eve.target.value) 
              // localStorage.setItem('patientCode',eve.target.value)
              }}
              value={patientCode} 
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Patient Name" />
          <div className="create-field">
            <MdOutlinePersonOutline className="icon" size={20} />
            <Input
              className="larger-field"
              onChange={(eve) => { updatePatientName(eve.target.value) 
                // localStorage.setItem('patientName',eve.target.value)
              }}
              value={patientName}
            />
          </div>
        </div>
      </div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Gender" />
          <div className="create-field">
            <MdOutlineVisibility className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateGender(eve.target.value) 
                // localStorage.setItem('gender',eve.target.value)
              }}
              value={gender}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Date Of Birth" />
          <div className="create-field">
            <MdDateRange className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateDob(eve.target.value) 
                // localStorage.setItem('dob',eve.target.value)
              }}
              value={dob}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Age" />
          <div className="create-field">
            <Input
              className="normal-field"
              onChange={(eve) => { updateAge(eve.target.value) 
                // localStorage.setItem('age',eve.target.value)
              }}
              value={age}
            />
            <MdOutlineElderly className="icon" size={20} />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Martial Status" />
          <div className="create-field">
            <MdOutlineFavorite className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateMartialStatus(eve.target.value) }}
              value={martialStatus}
            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Weight" />
          <div className="create-field">
            <MdOutlineAlternateEmail className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateWeight(eve.target.value) }}
              value={weight}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Phone" />
          <div className="create-field">
            <MdOutlinePhone className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updatePhone(eve.target.value) }}
              value={phone}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Email Address" />
          <div className="create-field">
            <MdOutlineMailOutline className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateEmail(eve.target.value) }}
              value={email}
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Reference Type" />
          <div className="create-field">
            <MdOutlineAlternateEmail className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateReferenceType(eve.target.value) }}
              value={referenceType}
            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Referred By" />
          <div className="create-field">
            <MdOutlineAlternateEmail className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateRefferdBy(eve.target.value) }}
              value={referredBy}
            />
          </div>
        </div>
      </div>
      {/* ------------extra details -------------- */}
      <div className="form-header">
        <h3>Extra Details</h3>
        <hr></hr>
      </div>
      <div className="details-form">
        <div className="patient-container">
          <Label label="Occupation" />
          <div className="create-field">
            <MdOutlineCardTravel className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateOccupation(eve.target.value) }}
              value={occupation}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Station" />
          <div className="create-field">
            <MdPlace className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateStation(eve.target.value) }}
              value={station}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Pin Code" />
          <div className="create-field">
            <MdOutlinePushPin className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updatePinCode(eve.target.value) }}
              value={pinCode}
            />
          </div>
        </div>

      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Address" />
          <div className="create-field">
            <MdOutlinePushPin className="icon" size={20} />
            <Input
              className="larger-field"
              onChange={(eve) => { updateAddress(eve.target.value) }}
              value={address}
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Identity Card" />
          <div className="create-field">
            <MdPriceChange className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateIdCard(eve.target.value) }}
              value={idcard}
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Registration Date" />
          <div className="create-field">
            <MdDateRange className="icon" size={20} />
            <Input
              className="normal-field"
              onChange={(eve) => { updateRegistrationDate(eve.target.value) }}
              value={registrationDate}
              // type="password"
              placeholder="20/02/2022"
              // name="psw"
            />
          </div>
        </div>
      </div>
      <div className="patient-form">
        <div className="patient-container">
          <div className="create-field check">
            <div className="icon">
              <input
               type={'checkbox'}
               onChange={(eve) => { updatePrint(eve.target.value) }}
              value={print}
               ></input>
            </div>
            <Input
              className="larger-field"
              value='Print Test Result Entry In Bill'
            // placeholder="Password"

            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Remarks" />
          <div className="create-field">
            <Input
              className="larger-field"
              onChange={(eve) => { updateRemarks(eve.target.value) }}
              value={remarks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
