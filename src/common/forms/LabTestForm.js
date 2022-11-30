import React, { useContext } from "react";
import Layout from "../layout/Layout";
import "../../assets/css/index.css";
import { MdAccessTime, MdOutbound, MdOutlineBiotech, MdOutlineDelete, MdOutlineHeight, MdOutlineMergeType, MdShuffle, MdWaterDrop } from "react-icons/md";
import Input from "../input/Input";
import Label from "../label/Label";
import Button from "../button/Button";
import TextArea from "../textarea/TextArea";
import RadioButton from "../radioButton/RadioButton";
import { LabTestContext } from "../../containers/context/labTestContext/LabTestContext";

const LabTestForm = () => {
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
    updateMaximum, maximum } = useContext(LabTestContext)
   
  return (
    <div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Test Code" />
          <div className="create-field">
            <p className="icon" size={20} >L</p>
            <Input
              onChange={(e) => { updateTestCode(e.target.value) }}
              value={testcode}
              className="normal-field"
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Test Name" />
          <div className="create-field">
            <p className="icon" size={20} >#</p>
            <Input
              onChange={(e) => { updateTestName(e.target.value) }}
              value={testName}
              className="larger-field"
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Units" />
          <div className="create-field">
            <MdWaterDrop className="icon" size={20} />
            <Input
              onChange={(e) => {updateUnits (e.target.value) }}
              value={units}
              className="normal-field"

            />
          </div>
        </div>
      </div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Rate " />
          <div className="create-field">
            <p className="icon" size={20} >$</p>
            <Input
              onChange={(e) => { updateRate(e.target.value) }}
              value={rate }
              className="normal-field"

            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Test Group" />
          <div className="create-field">
            <p className="icon" size={20} >#</p>
            <Input
              onChange={(e) => { updateTestGroup(e.target.value) }}
              value={testGroup }
              className="normal-field"

            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Department Name" />
          <div className="create-field">
            <p className="icon" size={20} >#</p>
            <Input
              onChange={(e) => {updateDepartmentName (e.target.value) }}
              value={departmentName }
              className="normal-field"

            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Methodology" />
          <div className="create-field">
            <MdOutlineBiotech className="icon" size={20} />
            <Input
              onChange={(e) => {updateMethodology(e.target.value) }}
              value={methodology}
              className="normal-field"

            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Result Duration" />
          <div className="create-field">
            <MdAccessTime className="icon" size={20} />
            <Input
              onChange={(e) => {updateResultDuration(e.target.value) }}
              value={resultDuration}
              className="normal-field"

            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Sample Cut-off" />
          <div className="create-field">
            <MdOutlineHeight className="icon" size={20} />
            <Input
              onChange={(e) => {updateCutOff(e.target.value) }}
              value={cutOff}
              className="normal-field"

            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Result Format" />
          <div className="create-field">
            <MdShuffle className="icon" size={20} />
            <Input
              onChange={(e) => {updateResultFormat(e.target.value) }}
              value={resultFormat}
              className="normal-field"

            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Display Order" />
          <div className="create-field">
            <MdShuffle className="icon" size={20} />
            <Input
              onChange={(e) => {updateDisplayOrder(e.target.value) }}
              value={displayOrder}
              className="normal-field"

            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <div className="create-field check">
            <div className="icon">
              <input type="checkbox" onChange={updatePrintResult} />
            </div>
            <Input
              
              // value={printResult}
              className="normal-field"
              value="Print Remark in Test Result"
            />
          </div>
        </div>

        <div className="patient-container">
          <div className="create-field check">
            <div className="icon">
              <input type='checkbox'  onChange={updatePrintMethodology}/>
            </div>
            <Input
              // onChange={(e) => {updatePrintMethodology(e.target.value) }}
              // value={printMethodology}
              className="normal-field"
              value="Print Methodology in Test Result"
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Formula" />
          <div className="create-field">
            <MdShuffle className="icon" size={20} />
            <Input
              onChange={(e) => {updateFormula(e.target.value) }}
              value={formula}
              className="normal-field"
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Condition" />
          <div className="create-field">
            <MdShuffle className="icon" size={20} />
            <Input
              onChange={(e) => {updateCondition(e.target.value) }}
              value={condition}
              className="normal-field"


            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container">
          <Label label="Remarks" />
          <div className="create-field">
            <TextArea
              onChange={(e) => {updateRemark(e.target.value) }}
              value={remark}
              className="text-area"
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Default Value" />
          <div className="create-field">
            <TextArea
              onChange={(e) => {updateDefaultValue(e.target.value) }}
              value={defaultValue}
              className="text-area"

            />
          </div>
        </div>
      </div>
      {/* ------------extra details -------------- */}
      
      <div className="extra-details">
        <div className="details-header">Normal Ranges</div>
        <RadioButton 
        onChange={(e) => {updateRange(e.target.value) }}
        value={ranges}
        className="radio-button" />
        <hr></hr>
        <div className="patient-form">
          <div className="patient-container">
            <Label label="Range Description" />
            <div className="create-field">
              <Input
                onChange={(e) => {updateRangeDescription(e.target.value) }}
                value={rangeDescription}
                className="normal-field"

              />
            </div>


          </div>
          <div className="patient-container">
            <Label label="Age" />
            <div className="create-field">
              <Input
                onChange={(e) => {updateRangeAge(e.target.value) }}
                value={rangeAge}
                className="normal-field"

              />
            </div>
          </div>

          <div className="patient-container">
            <Label label="Min" />
            <div className="create-field">
              <Input
                onChange={(e) => {updateMinimum(e.target.value) }}
                value={minimum}
                className="normal-field"

              />
            </div>
          </div>
          <div className="patient-container">
            <Label label="Max" />
            <div className="create-field">
              <Input
                onChange={(e) => {updateMaximum(e.target.value) }}
                value={maximum}
                className="normal-field"
              
              />
              <MdOutlineDelete className="icon" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LabTestForm;
