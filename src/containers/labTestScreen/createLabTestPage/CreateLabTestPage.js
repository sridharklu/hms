import React from "react";
import { MdOutlineArrowForward, MdOutlineDoubleArrow, MdScience } from "react-icons/md";
import "../../../assets/css/index.css";
import Button from "../../../common/button/Button";
import Layout from "../../../common/layout/Layout";
import PatientForm from "../../../common/forms/PatientForm";
import LabTestForm from "../../../common/forms/LabTestForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LabTestContext } from "../../context/labTestContext/LabTestContext";

const CreateLabTestPage = () => {
  const {
    updateTestCode, testcode,
    updateTestName, testName,
    updateUnits, units,
    updateRate, rate,
    updateTestGroup, testGroup,
    updateDepartmentName, departmentName,
    updateMethodology, methodology,
    updateResultDuration, resultDuration,
    updateCutOff, cutOff,
    updateResultFormat, resultFormat,
    updateDisplayOrder, displayOrder,
    updatePrintResult, printResult,
    updatePrintMethodology, printMethodology,
    updateFormula, formula,
    updateCondition, condition,
    updateRemark, remark,
    updateDefaultValue, defaultValue,
    updateRange, ranges,
    updateRangeDescription, rangeDescription,
    updateRangeAge, rangeAge,
    updateMinimum, minimum,
    updateMaximum, maximum, labtestName
  } = useContext(LabTestContext)
  return (
    <Layout>
      <div className="create-patient">
        <div className="create-topheader">
          <div className="create-navigate">
            <Link to='/labtest'>
              <p className="navigateLable">LabTest</p>
            </Link>
            <MdOutlineDoubleArrow />
            <p>Create</p>
          </div>
          <div className="create-btn">
            <Button
              onClick={() => {

                
                updateTestCode('');
                updateTestName('');
                updateUnits('');
                updateRate('');
                updateTestGroup('');
                updateDepartmentName('');
                updateMethodology('');
                updateResultDuration('');
                updateCutOff('');
                updateResultFormat('');
                updateDisplayOrder('');
                updatePrintResult('');
                updatePrintMethodology('');
                updateFormula('');
                updateCondition('');
                updateRemark('');
                updateDefaultValue('');
                updateRange('');
                updateRangeDescription('');
                updateRangeAge('');
                updateMinimum('');
                updateMaximum('');
                window.location = "http://localhost:3000/labtest";
                
              }}
              className="cancel-btn" label="Cancel" />
            <Button
              className="save-btn"
              label="Save invoice"
              icon={<MdScience size={17} />}
              onClick={labtestName}
            />
          </div>
        </div>
        <LabTestForm />
      </div>
    </Layout>
  );
};

export default CreateLabTestPage;
