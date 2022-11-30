import React, {useEffect, useContext} from "react";
import { MdOutlineAddBox, MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import Layout from "../../common/layout/Layout";
import DoctorTable from "../../common/table/doctorTable/DoctorTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import axios from "axios";
import { GlobalVariable } from "../../common/baseUrl/baseUrl";
import { DoctorContext } from "../context/doctorContext/DoctorContext";

const DoctorScreen = () => {


  const {Doctors,updateDoctors,updateFilterData,updateInput,filterData} = useContext(DoctorContext)


  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/doctors`,
      { headers: { "token": localStorage.getItem("token") } })
      .then((res) => {
         //console.log(res.data.data)
          updateDoctors(res.data.data)
          updateFilterData(res.data.data)
         //console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  let searchWord;
  const handleFilter = (e) => {
    searchWord = e.target.value;
    updateInput(searchWord);
    const newFilter = Doctors.filter((value) => {
      return value.doctorName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      updateFilterData(Doctors);
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
          <h4>Doctors</h4>
        </div>

        <div className="searchBar">
          <input placeholder={"Search doctors..."} onChange={handleFilter} />
          <button>Go!</button>
        </div>
        <div className="newDoctors">
        <Link to="/createdoctor">
        <button className="newDoctorLable">
          <MdOutlineAddBox />
          New Doctors
        </button>
        </Link>
          
        </div>
  
      </div>
      {/* <UpdateStatus /> */}
      <DoctorTable />
    </Layout>
  );
};

export default DoctorScreen;
