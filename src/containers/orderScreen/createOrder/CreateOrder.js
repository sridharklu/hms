import React from "react";
import { MdOutlineArrowForward, MdOutlineDoubleArrow, MdOutlineMenuBook } from "react-icons/md";
import Button from "../../../common/button/Button";
import OrderForm from "../../../common/forms/OrderForm";
import Layout from "../../../common/layout/Layout";


const CreateOrder = () => {

  // const {
  //   updateTestCode, testcode,
  //   updateTestName, testName,
  //   updateUnits, units,
  //   updateRate, rate,
  //   updateTestGroup, testGroup,
  //   updateDepartmentName, departmentName,
  //   updateMethodology, methodology,
  //   updateResultDuration, resultDuration,
  //   updateCutOff, cutOff,
  //   updateResultFormat, resultFormat,
  //   updateDisplayOrder, displayOrder,
  //   updatePrintResult, printResult,
  //   updatePrintMethodology, printMethodology,
  //   updateFormula, formula,
  //   updateCondition, condition,
  //   updateRemark, remark,
  //   updateDefaultValue, defaultValue,
  //   updateRange, ranges,
  //   updateRangeDescription, rangeDescription,
  //   updateRangeAge, rangeAge,
  //   updateMinimum, minimum,
  //   updateMaximum, maximum, labtestName
  // } = useContext(LabTestContext)
  return (
    <Layout>
      <div className="create-patient">
        <div className="create-topheader">
          <div className="create-navigate">
            <p className="navigateLable">Invoice</p>
            <MdOutlineDoubleArrow />
            <p>Create</p>
          </div>
          <div className="create-btn">
          <Button className="cancel-btn" 
           onClick={() => {

                
            // updateTestCode('');
            // updateTestName('');
            // updateUnits('');
            // updateRate('');
            // updateTestGroup('');
            // updateDepartmentName('');
            // updateMethodology('');
            // updateResultDuration('');
            // updateCutOff('');
            // updateResultFormat('');
            // updateDisplayOrder('');
            // updatePrintResult('');
            // updatePrintMethodology('');
            // updateFormula('');
            // updateCondition('');
            // updateRemark('');
            // updateDefaultValue('');
            // updateRange('');
            // updateRangeDescription('');
            // updateRangeAge('');
            // updateMinimum('');
            // updateMaximum('');
            window.location = "http://localhost:3000/order";
            
          }}
          label="Cancel"  />
            <Button className="save-btn" label="Save invoice"  icon={<MdOutlineMenuBook size={18}/>}/>
          </div>
        </div>
        <OrderForm />
      </div>
    </Layout>
  );
};

export default CreateOrder;
