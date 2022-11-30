import React,{useContext} from 'react'
import { MdOutlineArrowForward, MdOutlineDoubleArrow, MdOutlineMessage } from 'react-icons/md'
import Button from '../../../common/button/Button'
import DepartmentForm from '../../../common/forms/DepartmentForm'
import DoctorForm from '../../../common/forms/DoctorForm'
import Layout from '../../../common/layout/Layout';
import { useNavigate } from 'react-router-dom'
import { DepartmentContext } from '../../context/departmentContext/departmentContext'

const CreateDepartment = () => {
  const navigate = useNavigate();
  const {departmentAdded,cancelCourse} = useContext(DepartmentContext)

// const cancelDepartement =()=>{

// // window.location.reload()
//   navigate("/dashboard")

// }

// const cancelCourse = (id) => { 
//   alert()
// document.getElementById(id).reset();
// }

  return (
    <Layout>
    <div className="create-patient">
      <div className="create-topheader">
        <div className="create-navigate">
        <p className="navigateLable">Department</p>
          <MdOutlineDoubleArrow />
          <p>Create</p>
        </div>
        <div className="create-btn">
          <Button className="cancel-btn" 
           onClick={()=>cancelCourse(navigate("/department"))} 
          label="Cancel" />
          <Button
            className="save-btn"
            label="Save Department"
            onClick={departmentAdded}
            icon={<MdOutlineMessage size={18} />}
          />
        </div>
      </div>
      <h3>Department Details</h3>
      <DepartmentForm/>
    </div>
  </Layout>
  )
}

export default CreateDepartment