import React,{useEffect, useState,useContext} from "react";
import { MdOutlineAddBox, MdSell } from "react-icons/md";
import Layout from "../../common/layout/Layout";
import PatientTable from "../../common/table/patientTable/PatientTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import "../../assets/css/index.css"
import { Link } from "react-router-dom";
import Button from "../../common/button/Button";
import axios from "axios";
import {GlobalVariable} from '../../common/baseUrl/baseUrl'
import { PatientContext } from "../context/patientContext/PatientContext";
axios.defaults.withCredentials = true

const PatientScreen = () => {

  
  const {patient,updatePatients,updateFilterData,filterData,updateInput} = useContext(PatientContext)


  useEffect(() => {

    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/patients`, {withCredentials: true, credentials: 'include'}
    //  { headers: { "token": localStorage.getItem("token") } }
      )
      .then((res) => {
         //console.log(res.data.data)
         updatePatients(res.data.data)
         updateFilterData(res.data.data)
       // console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  let searchWord;
  const handleFilter = (e) => {
    searchWord = e.target.value;
    updateInput(searchWord);
    const newFilter = patient.filter((value) => {
      return value.patientName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      updateFilterData(patient);
    }
    else {
      updateFilterData(newFilter);
    }
  };
  console.log("value:", filterData);
  console.log("searchWord:", searchWord);

  return (
    <Layout>
       <div className="headerContainer">
                <div className="tagIcons">
                    <MdSell />
                    <h4>Patients</h4>
                </div>
                <div className="searchBar">
          <input placeholder={"Search.."} onChange={handleFilter} />
          <button>Go!</button>
        </div>
                <div className="addPatient">
                <Link to="/createpatient">
                <Button className="newPatientLable" icon={<MdOutlineAddBox />} label="New Patient"/>
                </Link>
                </div>
            </div>
      <UpdateStatus />
       <PatientTable  /> 
    </Layout>
  );
};

export default PatientScreen;
