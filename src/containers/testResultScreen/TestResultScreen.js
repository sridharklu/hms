import React,{useEffect,useContext} from "react";
import { MdOutlineAddBox, MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import Layout from "../../common/layout/Layout";
import TestResultTable from "../../common/table/testResultTable/TestResultTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import axios from "axios";
import { GlobalVariable } from "../../common/baseUrl/baseUrl";
import { TestresultContext } from "../context/testresultContext.js/testresultContext";

const TestResultScreen = () => {

const {testresult,updatetestresult}= useContext(TestresultContext)

  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/testresult/`,{withCredentials: true}
      // { headers: { "token": localStorage.getItem("token") } }
      )
      .then((res) => {
         //console.log(res.data.data)
          updatetestresult(res.data.data)
       // console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  return (
    <Layout>
    <div className="testResultContainer">
      <div className="headerContainer">
        <div className="testResultTagIcons">
          <MdSell />
          <h4>TestResults</h4>
        </div>

        <div className="filterDate">
          <input placeholder={"Enter Order No:"} />
          <input placeholder={"Patient Code / Name:"} />
          <input placeholder={"From Date:"} />
          <input placeholder={"To Date:"} />
          <div className="goButton">
            <button>Go!</button>
            <Link to="/checkedresult">
            <button className="addButton">
              <MdOutlineAddBox />
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <UpdateStatus/> */}
      <TestResultTable/>
    </div>
    </Layout>
  );
};

export default TestResultScreen;
