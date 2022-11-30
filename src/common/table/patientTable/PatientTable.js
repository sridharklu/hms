
import React, {useContext, useState} from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import PatientsListData, { PatientsTableHeader } from '../../../mock/tableData/PatientData'
import "../../../assets/css/index.css"

import {Button} from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { PatientContext } from '../../../containers/context/patientContext/PatientContext';
import Checkbox from "../../../common/table/patientTable/checkbox";

const PatientTable = () => {
    const navigate = useNavigate();
   
  
    

    // console.log("patients",patients);
    // console.log("patients",patient);
    

  const { patient, handleSelectAll,handleClick,isCheck,isCheckAll,filterData,updateSinglePatient } = useContext(PatientContext)


  // const catalog = patient.map((data, index) => {
     var catalog;
    return (
    
      <div className="tableContainer">
        <table>
        <thead>
          <tr>
         <td className="createOrder">
          <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      /></td>  
              {PatientsTableHeader.map((data, index) => (
                <th key={index}>{data.title}</th>
            ))}
            

        </tr>

          </thead>
       {   filterData.map((data, index)=> data.status && (

        <tbody>
         
        <tr  key={index}>
        <td className="createOrder"> <Checkbox
      key={index}
      type="checkbox"
      // name={data.patientName}
      id={data._id}
      handleClick={handleClick}
      isChecked={isCheck.includes(data._id)}
    />
    {/* {data.patientName} */}
    </td>
    {/* <th scope='row'>{index + 1}</th> */}
    <td>{data.patientCode}</td>
    <td className="patientsLablesColors">{data.patientName}</td>
            <td>{data.patientAge}</td>
            <td>{data.patientGender}</td>
            {/* <td>{data.patientBalance}</td> */}
            <td className="patient-createOrder">{<Link to="/testname"><Button onClick={ async()=>{
              await axios.get(`http://localhost:3001/api/patients/patient/${data._id}`,
              
              ).then((res)=>{
                  // console.log(res.data.data, "res data")
                  updateSinglePatient(res.data.data)
              }).catch((err) => {
                console.log(err)
              })

            }} >Create Order</Button></Link>}</td>
            
            
            <td><MdOutlineDelete  onClick={async () => {
          
          await axios.put(
            `http://localhost:3001/api/patients/delete-patient/${data.patientCode}`,
            {},
            
          );
          navigate("/dashboard")
        }
        }className="deleteIcon" /></td>
        </tr>
     
   
      </tbody>

  ))}
         
         
        </table>
     
        </div>
      

    );
  };

    


//   return (
//     <div className="tableContainer">
//      <table>
//       <thead>
//         <tr>
//             <th className="createOrder"><input type="checkbox" checked={isCheckAll}  name ="selectAll" onChange={handleSelectAll} /></th>
//             {PatientsTableHeader.map((data, index) => (
//                 <th key={index}>{data.title}</th>
//             ))}

//         </tr>
//         </thead>
//         {patient?.map((data, index) => (
          
//             <tbody key ={index} >
//                 <tr >

//                 <td className="createOrder"><input type="checkbox" value={data.patientId} name ="singleSelect" checked={isChecked.includes(data.patientId)} onChange={(e)=>handlecheckbox(e)}/></td>
//                 <th scope='row'>{index + 1}</th>
//                 {/* <td className="patientsLablesColors">{data.patientId}</td> */}
//                 <td className="patientsLablesColors">{data.patientName}</td>
//                 <td>{data.patientAge}</td>
//                 <td>{data.patientGender}</td>
//                 <td>{data.patientBalance}</td>
//                 <td className="patient-createOrder">{<Button >Create Order</Button>}<MdOutlineDelete  onClick={async () => {
//               await axios.delete(
//                 `http://localhost:3001/api/patients/delete-patient/${data.patientId}`,

//                 { headers: { "token": localStorage.getItem("token") } }
//               );
//               navigate("/dashboard")
//             }
//             }className="deleteIcon" /></td>
                
//             </tr>
//              </tbody>
//         ))}
       
//     </table> 
// </div>
//   )


export default PatientTable;


