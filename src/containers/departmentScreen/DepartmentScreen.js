import React, {useContext,useEffect} from "react";
import { MdOutlineAddBox, MdOutlineDelete, MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../assets/css/index.css";
import Button from "../../common/button/Button";
import Layout from "../../common/layout/Layout";
import DepartmentTable from "../../common/table/departmentTable/DepartmentTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import { DepartmentContext } from "../context/departmentContext/departmentContext";
import axios from "axios";
import {GlobalVariable} from '../../common/baseUrl/baseUrl';


const DepartmentScreen = () => {

  const {Departments,updateDepartment,updateFilterData,filterData,updateInput} = useContext(DepartmentContext)


  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/department`,
      { headers: { "token": localStorage.getItem("token") } })
      .then((res) => {
         //console.log(res.data.data)
          updateDepartment(res.data.data)
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
    const newFilter = Departments.filter((value) => {
      return value.departmentName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      updateFilterData(Departments);
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
        <div className="departmentsTagIcons">
          <MdSell />
          <h4>Departments</h4>
        </div>

        <div className="searchBar">
          <input placeholder={"Search department..."}  onChange={handleFilter} className="search-input" />
          <button>Go!</button>
        </div>
        <div className="newDepartments">
        <Link to="/createdepartment">
        <button className="newDepartmentsLable">
          <MdOutlineAddBox />
          New Departments
        </button>
        </Link>

        </div>
   
      </div>
 
      <DepartmentTable />
    </Layout>
  );
};

export default DepartmentScreen;
