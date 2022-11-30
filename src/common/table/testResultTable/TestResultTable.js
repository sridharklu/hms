import React,{useContext}from 'react'
import { TestresultContext } from '../../../containers/context/testresultContext.js/testresultContext'
import TestResultsData, { TestResultsTableHeader } from '../../../mock/tableData/TestResultData'
import Checkbox from '../patientTable/checkbox'
import { MdOutlineDelete } from "react-icons/md";
import Button from "../../button/Button";

const TestResultTable = () => {

    const {testresult,updatetestresult,handleSelectAll,isCheckAll,
      handleClick,isCheck,selectCount,alldelete}= useContext(TestresultContext)
// console.log(testresult);

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
      <div className="testResultTableContainer">
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
                { TestResultsTableHeader.map((data, index) => (
                  <th key={index}>{data.title}</th>
              ))}
    
          </tr>
    
            </thead>
          {testresult.map((data, index) => (
                <tbody key={index}>
              <tr>
              <td className="createOrder" >
          <Checkbox key={data._id} type="checkbox"  
              id={data._id}
              handleClick={handleClick}
              isChecked={isCheck.includes(data._id)}
            />
          
            </td>
                  {/* <td className="orderLable">
                  {index +1} </td> */}
                  <td> {data.OrderCode}</td>
                  <td>{data.PatientCode}</td>
                  <td>{data.patientName}</td>
                  <td>{data.patientAge}</td>
                  <td>{data.billAmount}</td>
                  <td>{data.totalAmount}</td>
                  <td>{data.paidAmount}</td>
              </tr>
              </tbody>
          ))}
      </table>
</div>
    </div>
    
  )
}

export default TestResultTable