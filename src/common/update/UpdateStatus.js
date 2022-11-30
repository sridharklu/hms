import React,{useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import "../../assets/css/index.css";
import { PatientContext } from "../../containers/context/patientContext/PatientContext";
import { QuickPatientContext } from "../../containers/context/quickPatient/QuickPatientContext";
import Button from "../button/Button";

const UpdateStatus = () => {
  const {alldelete, selectCount } = useContext(PatientContext)

  return (
    <div>
      <div className="statusContainer">
        <h5>{selectCount } selected</h5>
        <Button className="update-box" label="Update Status" />
        <Button
          className="update-box"
          icon={<MdOutlineDelete />}
          label="Delete" 
          onClick={alldelete}
        />
      </div>
    </div>
  );
};

export default UpdateStatus;
