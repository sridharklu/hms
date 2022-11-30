import React,{useContext} from "react";
import "../../../assets/css/index.css";
//  import {Button} from 'react-bootstrap';
import { MdOutlineDelete } from 'react-icons/md'
import { DepartmentContext } from "../../../containers/context/departmentContext/departmentContext";
import Checkbox from "../patientTable/checkbox";
import DepartmentListData, {
  DepartmentListTitle,
} from "../../../mock/tableData/DepartmentListData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";



const DepartmentTable = () => {
  const navigate = useNavigate();

  const {Departments,handleSelectAll,isCheckAll,handleClick,isCheck,selectCount,selectAllDelete,filterData} = useContext(DepartmentContext)

  
  var catalog;
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


    <div className="tableContainer">
      <table>
      <thead>
        <tr>
      <td className="createOrder" >
        <Checkbox
      type="checkbox"
      name="selectAll"
      id="selectAll"
      handleClick={handleSelectAll}
      isChecked={isCheckAll}
    /> </td>
            { DepartmentListTitle.map((data, index) => (
              <th key={index}>{data.title}</th>
          ))}

      </tr>

        </thead>

     {    filterData.length > 0 && filterData.map((data, index)=>data.status &&(
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
  <td className="patientsLablesColors">{data.departmentCode}</td>
          <td>{data.departmentName}</td>
          <td>{data.remarks}</td>
          {/* <td className="patient-createOrder">{<Button label="Create Order" />}</td> */}
        <td>  <MdOutlineDelete  onClick={async () => {
          await axios.put(
            `http://localhost:3001/api/department/delete-Department/${data.departmentCode}`,{},

            // { headers: { "token": localStorage.getItem("token") } }
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
    
    

  );
};

export default DepartmentTable;
