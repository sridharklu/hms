import React,{useContext, useEffect} from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import LabTestListData, { LabTestTableHeader } from '../../../mock/tableData/LabTestData';
import { LabTestContext } from "../../../containers/context/labTestContext/LabTestContext";
import Checkbox from '../patientTable/checkbox';
import axios from 'axios';

const LabTestTable = () => {
  const navigate = useNavigate();

  const {individualTests,handleSelectAll,isCheckAll,handleClick
  ,isCheck,selectCount,selectAllDelete} = useContext(LabTestContext)

  console.log(individualTests);
 


  return (
    <div>
      <div className="statusContainer">
        <h5>{selectCount } selected</h5>
        <Button className="update-box" label="Update Status" />
        <Button
          className="update-box"
          icon={<MdOutlineDelete />}
          label="Delete" 
           onClick={selectAllDelete}
        />
      </div>
    <div className="list-table">
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
    /> 
          </td>
       
            { LabTestTableHeader.map((data, index) => (
              <th key={index}>{data.title}</th>
          ))}

      </tr>

        </thead>
        {    individualTests.length > 0 && individualTests.map((data, index)=>data.status &&(
      <tbody key={index}>
      <tr >
      <td className="createOrder" >
         <Checkbox
    key={data._id}
    type="checkbox"
  
    id={data._id}
    handleClick={handleClick}
     isChecked={isCheck.includes(data._id)}
  />

  </td>
  {/* <th scope='row'>{index + 1}</th> */}
  <td>{data.testCode}</td>
  {/* <td></td> */}
  <td className="patientsLablesColors">{data.testName}</td>
          <td>{data.methodology}</td>
          <td>{data.units}</td>
          <td>{data.rate}</td>
          
      
        <td>  <MdOutlineDelete  onClick={async () => {
          await axios.put(
           
            `http://localhost:3001/api/labtests/delete-labtest/${data.testCode}`,{},

            { headers: { "token": localStorage.getItem("token") } }
          );
          navigate("/dashboard")
        }
        }className="deleteIcon" /></td>
          
         
      </tr>
   
 
    </tbody>

))}
      
    </table>
</div>

    </div>
    
  )
}

export default LabTestTable