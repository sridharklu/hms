import React,{useEffect,useContext} from "react";
import { MdOutlineAddBox, MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import Layout from "../../common/layout/Layout";
import LabTestGroupTable from "../../common/table/labTestGroupTable/LabTestGroupTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import { GlobalVariable } from "../../common/baseUrl/baseUrl";
import axios from "axios";
import { LabTestGroupContext } from "../context/labTesGroupContext/LabTestGroupContext"

const LabTestGroup = () => {

const {updateGroupTests,groupTests}=useContext(LabTestGroupContext)


  
  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest`)
      .then((res) => {
         //console.log(res.data.data)
         updateGroupTests(res.data.data)
        // console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])
  return (
    <Layout>
      <div className="headerContainer">
        <div className="tagIcons">
          <MdSell />
          <h4>LabTestGroups</h4>
        </div>

        <div className="searchBar">
          <input placeholder={"Search Labtestgroup..."} />
          <button>Go!</button>
        </div>
       <Link to="/createtestgroup">
        <button className="newLabTestGroupLable">
          <MdOutlineAddBox />
          New LabTestGroups
        </button>
        </Link>
      </div>
      {/* <UpdateStatus /> */}
      <LabTestGroupTable />
    </Layout>
  );
};

export default LabTestGroup;
