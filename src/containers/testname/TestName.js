import React,{useEffect,useContext} from 'react'
import Layout from '../../common/layout/Layout';
 import '../../assets/css/testName.css';
 import "../../assets/css/index.css"
import { MdOutlineDoubleArrow, MdPersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PatientForm from '../../common/forms/PatientForm';
import  TestNameForm  from '../../common/forms/TestNameForm';
import Button from '../../common/button/Button';
import axios from 'axios';
import { GlobalVariable } from '../../common/baseUrl/baseUrl';
import { LabTestContext } from "../context/labTestContext/LabTestContext";
import { useNavigate } from "react-router-dom";

const TestName = () => {
  const navigate = useNavigate();
  const {updateLabtests,cancelCourse,updategrouptests} = useContext(LabTestContext)

  const getData = async () => {
     await axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest`).then((res)=>{
      const data = res.data.data
      console.log(data);
      
      axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests`)
      .then((result) => {
        const labData = data.concat(result.data.data)
        console.log(labData,"lab data");
         //console.log(res.data.data)
        updateLabtests(labData)
        

      
        //  updateFilterData(res.data.data)
        // console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })
     })
    // setData(data);
  };


  useEffect(() => {

    getData()
  }, [])

  // useEffect(() => {
  //   axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest`)
  //     .then((res) => {
  //        //console.log(res.data.data)
  //        updategrouptests(res.data.data)
  //       //  updateFilterData(res.data.data)
  //     // console.log(res.data.data, "res data")
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })


    

  // }, [])

    return (
        <Layout>
<div>
<div className="create-patient">
      <div className="create-topheader">
        <div className="create-navigate">
        <p className="navigateLable">create order</p>
          <MdOutlineDoubleArrow />
          <p>Create</p>
        </div>
        
        <div className="create-btn">
          <Button className="cancel-btn" 
           onClick={()=>cancelCourse(navigate("/patient"))} 
          label="Cancel" />
          <Button
            className="save-btn"
            label="Save Result"
            // onClick={departmentAdded}
            // icon={<CgSandClock size={18} />}
          />
        </div>
        
      </div>
    </div>
    <TestNameForm />
   
</div>

            
             
        </Layout>
    )
}
export default TestName