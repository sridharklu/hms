import React,{useEffect,useContext} from "react";
import { MdOutlineAddBox, MdSell } from "react-icons/md";
import LabTestTable from "../../common/table/labTestTable/LabTestTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import Layout from "../../common/layout/Layout";
import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalVariable } from "../../common/baseUrl/baseUrl";
import { LabTestContext } from "../context/labTestContext/LabTestContext";


const LabTestScreen = () => {


   const {updateIndividualTests} = useContext(LabTestContext)


  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests`,
      { headers: { "token": localStorage.getItem("token") } })
      .then((res) => {
         //console.log(res.data.data)
        updateIndividualTests(res.data.data)
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
          <h4>LabTests</h4>
        </div>

        <div className="searchBar">
          <input placeholder={"Search.."} />
          <button>Go!</button>
        </div>
      <div className="newLabTestLable">
      <Link to="/createlabtest" >
              <button className="newLabTestLable">
                <MdOutlineAddBox />
                New LabTest
              </button>
              </Link>
        
      </div>

      </div>
     
      <LabTestTable />
    </Layout>
  );
};

export default LabTestScreen;
