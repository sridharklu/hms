import React,{useEffect,useContext} from 'react'
import Layout from '../../common/layout/Layout'
import { MdOutlineDoubleArrow,MdOutlineMessage, } from "react-icons/md";
import {CgSandClock} from "react-icons/cg";
import { Link } from 'react-router-dom';
import Button from '../../common/button/Button'
import "../../assets/css/index.css";
import { Table } from 'react-bootstrap';
import Input from '../../common/input/Input';
import axios from 'axios';
import { GlobalVariable } from '../../common/baseUrl/baseUrl';
import { AddtestresultContext } from '../context/addtestresultContext/AddtestresultContext';
import {OrderContext} from '../context/orderContext/OrderContext';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../common/table/patientTable/checkbox';

const AddtestresultScreen = () => {
  const navigate = useNavigate();

  const {orders,orderdGroupName,orderGroupName,ordersList, orderslist,saveTestresult,updatedetestResult,testResult,
    handleSelectAll,isCheckAll,isCheck,handleClick} = useContext(AddtestresultContext)
  const {SinglePatients}= useContext(OrderContext)


  

const payloaddata ={
  testGroupName:SinglePatients.testName,
  testCode:SinglePatients.testCode
}
   
  //  console.log(ordersList.testName,"ordersList");
    // console.log(orderdGroupName.testGroupName,"orderdGroupName full view");
   

const getData = async () => {

 

  // console.log(fetchedtestName,"testName");

  // console.log(SinglePatients.testName, "SinglePatients in testName");

   await axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest/get-individualtests`,payloaddata).then((res)=>{
    // orderslist (res.data.data)
    const individualtestresult = res.data.data ;


    if(res.data.data[0]){
      orderslist(res.data.data.length > 0 && res.data.data[0].aggrindividualtests)
      
    }else{
      orderslist([individualtestresult]);
    }
   

    
    orderGroupName(res.data.data.length > 0 && res.data.data[0].aggrgroup);
   //  console.log(res.data.data.length > 0 && res.data.data[0].aggrgroup, "orderGroupName");
  //  const {aggrindividualtests} = ordersList.length > 0 && ordersList[0]



  })

}


   
  useEffect( () => {
    // axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest/get-individualtests`, {testGroupName:fetchedtestName})
    //   .then((res) => {
    //      //console.log(res.data.data)
    //      // updateOrders(res.data.data)
    //     console.log(res.data.data, "res data")
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })


    
      
      SinglePatients.testName && getData()
 
 

    

  }, [SinglePatients])

  
  return (
    <Layout>
     <div >
     <div className="create-patient">
      <div className="create-topheader">
        <div className="create-navigate">
        <p className="navigateLable">TestResult</p>
          <MdOutlineDoubleArrow />
          <p>Edit</p>
        </div>
        
        <div className="create-btn">
          <Button className="cancel-btn" 
          
          onClick={()=>{window.location =  "http://localhost:3000/order"; }} 
      
          label="Cancel" />
          <Button
            className="save-btn"
            label="Save Result"
            onClick={ ()=>{saveTestresult(SinglePatients, navigate("/order")) }}
            icon={<CgSandClock size={18} />}
          />
        </div>
        
      </div>
    </div>
    <div className='orderdetail'>
        <p>OrderCode:<span>{SinglePatients.orderCode}</span></p>
        <p>OrderDate:<span>{SinglePatients.orderDate}</span></p>

     </div>

          <div className='card-container'>
                <table>
                    <tr>
                        <td>Patient Name<br/> <b><span>{SinglePatients.patientName}</span></b></td>
                        <td>Age <br/><b><span>{SinglePatients.patientAge}</span></b></td>
                        <td>Gender<br/><b><span>{SinglePatients.patientGender}</span></b></td>
                        <td>Phone No <br/><b><span>{SinglePatients.patientPhone}</span></b></td>
                        <td>Refferd By<br/><b><span>{SinglePatients.referredBy}</span></b></td>
                        <td>Patient type<br/><b><span>Lab</span></b></td>
                    </tr>

                    </table>

          </div>
          

        
        <div className='testresult-card'>
        <div className="card">
            <div className="card-header">
              TestResult
         </div>
        <div className="card-body">
          <p>    <Checkbox
      type="checkbox"
      name="selectAll"
      id="selectAll"
      handleClick={handleSelectAll}
      isChecked={isCheckAll}
    /><span>Select All Test</span></p>  
            <div>
            <table className="table table-bordered">
          
  
                    <thead>
                        <tr>
                        <th scope="col" style={{width: "50%"}} >Test Name</th>
                        <th scope="col">Result</th>
                        <th scope="col">Units</th>
                        <th scope="col">Normal Ranges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                       { orderdGroupName ? orderdGroupName.testGroupName : ''}
                      {/* {orderdGroupName.testGroupName || ''} */}
                        {/* ANTIBIOTIC SUSCEPTIBILITY TESTING (AST) */}
                        
                        </tr>
                        {ordersList.length > 0 && ordersList.map((item, index)=>{
                          return(
                            <tr key={index}>
                        <td> <p> <Checkbox key={item._id} type="checkbox" id={item._id} handleClick={handleClick}
     /*isChecked={isCheck.includes(SinglePatients._id)}*//><span>{item.testName}</span></p> </td>
                        <td><input type="text"  onChange={(e) => updatedetestResult(e.target.value, index, item.testName)}
                        //  value={testResult}
                         
                         /></td>
                        <td></td>
                        <td></td>
                        </tr>
                          )
                        }) }
                        
                        
                    </tbody>
                    </table>
            </div>
            
        </div>
       </div>

        </div>
      
    </div>
    </Layout>

  )
}

export default AddtestresultScreen
