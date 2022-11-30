import React,{useContext} from "react";
import { MdCreate, MdOutlineDelete } from "react-icons/md";
import DoctorsListData, {
  DoctorsTableHeader,
} from "../../../mock/tableData/DoctorsListData";
import "../../../assets/css/index.css";
import Button from "../../button/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../patientTable/checkbox";
import { DoctorContext } from "../../../containers/context/doctorContext/DoctorContext";
import axios from "axios";
const DoctorTable = () => {
  const navigate = useNavigate();
  const {Doctors,selectAllDelete,selectCount,handleSelectAll,isCheckAll,
    handleClick,isCheck,filterData} = useContext(DoctorContext)



  
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
    /> </td>
            { DoctorsTableHeader.map((data, index) => (
              <th key={index}>{data.title}</th>
          ))}

      </tr>

        </thead>
        {  filterData.length > 0 && filterData.map((data, index)=>data.status && (
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
  <td>{data.doctorCode}</td>
  <td className="patientsLablesColors">{data.doctorName}</td>
          <td>{data.doctorSpecialist}</td>
          <td>{data.doctorEmail}</td>
          <td>{data.doctorTimeforeachAppointment}</td>
          <td>{data.doctorAmountforEachAppointment}</td>
          <td>{data.doctorSchedularDays}</td>
      
        <td>  <MdOutlineDelete  onClick={async () => {
          await axios.put(
            `http://localhost:3001/api/doctors/delete-doctor/${data.doctorCode}`,{},

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

export default DoctorTable;
