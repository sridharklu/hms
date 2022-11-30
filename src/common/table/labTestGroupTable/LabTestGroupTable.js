import React,{useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import Button from "../../button/Button";
import Checkbox from '../patientTable/checkbox';
import LabTestGroupData, { LabTestGroupTableHeader } from "../../../mock/tableData/LabTestGroupData";
import {LabTestGroupContext} from "../../../containers/context/labTesGroupContext/LabTestGroupContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LabTestGroupTable = () => {
  const navigate = useNavigate();

   const {groupTests,selectCount,selectAllDelete,handleSelectAll,isCheckAll,
    handleClick,isCheck}= useContext(LabTestGroupContext)

  return (
   
    <div>
      
      <div className="statusContainer">
        <h5>{selectCount } selected</h5>
        <Button className="update-box" onClick={() => window.location.reload(false)} label="Update Status" />
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
       
            { LabTestGroupTableHeader.map((data, index) => (
              <th key={index}>{data.title}</th>
          ))}

      </tr>

        </thead>
        {    groupTests.length > 0 && groupTests.map((data, index)=>data.status &&(
      <tbody key={index}>
      <tr >
      <td className="createOrder" >
         <Checkbox
    key={data._id}
    type="checkbox"
  
    id={data._id}
    handleClick={handleClick}
    //isChecked = {isCheck}
  isChecked={isCheck.includes(data._id)}
  />

  </td>
  {/* <th scope='row'>{index + 1}</th> */}
  <td>{data.groupCode}</td>
  {/* <td></td> */}
  <td className="patientsLablesColors">{data.testGroupName}</td>
          <td>{data.rate}</td>
          
          
      
        <td>  <MdOutlineDelete  onClick={async () => {
          await axios.put(
            
            `http://localhost:3001/api/grouptest/delete-labgroups/${data.groupCode}`,
            
          );
          
          window.location.reload(false);
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

export default LabTestGroupTable;
