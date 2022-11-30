import React,{useContext} from "react";
import { MdOutbound, MdOutlineArrowForward, MdOutlineDoubleArrow, MdOutlineReceipt } from "react-icons/md";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";
import Label from "../../../common/label/Label";
import "../../../assets/css/index.css";
import Layout from "../../../common/layout/Layout";
import LabTestGroupForm from "../../../common/forms/LabTestGroupForm";
import { Link, useNavigate } from "react-router-dom";
import { LabTestGroupContext } from "../../context/labTesGroupContext/LabTestGroupContext";

const CreateTestGroup = () => {
  const navigate = useNavigate();

 const { grouplabtestadded,cancelCourse }=useContext(LabTestGroupContext)

  return (
    <Layout>
    
      <div className="create-patient">
        <div className="create-topheader">
          <div className="create-navigate">
            <Link to='/labtestgroup'>
          <p className="navigateLable">LabTestGroup</p>
          </Link>
            <MdOutlineDoubleArrow />
            <p>Create</p>
          </div>
          <div className="create-btn">
            <Button
              onClick={()=>cancelCourse(navigate("/labtestgroup"))}
              className="cancel-btn" label="Cancel" />
            <Button
              className="save-btn"
              label="Save invoice"
              icon={<MdOutlineReceipt size={17} />}
              onClick={grouplabtestadded}
            />
          </div>
     
          
        </div>
       
        <LabTestGroupForm />
      </div>
    </Layout>
   
  );
};
export default CreateTestGroup;
