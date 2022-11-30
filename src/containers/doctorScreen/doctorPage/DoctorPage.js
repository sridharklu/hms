import React,{useContext}from 'react'
import { MdOutlineArrowForward, MdOutlineDoubleArrow, MdPersonOutline } from 'react-icons/md'
import Button from '../../../common/button/Button';
import { useNavigate } from 'react-router-dom';
import DoctorForm from '../../../common/forms/DoctorForm'
import Layout from '../../../common/layout/Layout'
import { DoctorContext } from '../../context/doctorContext/DoctorContext'

const DoctorPage = () => {
  const navigate = useNavigate();
   const {DoctorRegister} = useContext(DoctorContext)

   
  return (
    <Layout>
    <div className="create-patient">
      <div className="create-topheader">
        <div className="create-navigate">
        <p className="navigateLable">Doctor</p>
          <MdOutlineDoubleArrow />
          <p>Create</p>
        </div>
        <div className="create-btn">
          <Button className="cancel-btn"
          onClick={() => {
            window.location = "http://localhost:3000/doctors";
            
          }}
          label="Cancel" />
          <Button
            className="save-btn"
            label="Save Doctor"
            onClick={DoctorRegister}
        
            icon={<MdPersonOutline size={17}/>}
            
          />
          
        </div>
      </div>
      <h3>Doctor Details</h3>
      <DoctorForm/>
    </div>
  </Layout>
  )
}

export default DoctorPage