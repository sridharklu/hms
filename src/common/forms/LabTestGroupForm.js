import CheckBox from "rc-checkbox";
import React,{useState, useEffect} from "react";
import { useContext } from "react";
import { MdGroups, MdOutbound, MdOutlineAlternateEmail, MdOutlineAttachEmail, MdOutlineAttachMoney, 
  MdOutlineStorefront, MdOutlineThermostat, MdOutlineReceipt } from "react-icons/md";
import { LabTestGroupContext } from "../../containers/context/labTesGroupContext/LabTestGroupContext";
import Button from "../button/Button";
import Input from "../input/Input";
import Label from "../label/Label";
import axios from "axios";
import { GlobalVariable } from '../../common/baseUrl/baseUrl';

import { useNavigate } from "react-router-dom";
const LabTestGroupForm = () => {
  const [suggestions,setSuggestions]=useState([])
  
  const {
    updateGroupCode, groupCode,
    updateGroupName, groupName,
    updateParent, parentName,
    updteDepartmentName, departmentName,
    updteRate, rate,
    updteOrder, order,
    updateTestDepartment, testDepartment,
    updatePrint, print,
    updtePrintDetails, printDetails,
    updteDisplayTop, displayTop,
    updteSkipName, skipName,
    updteGroupCondition, groupCondition,
    testname,updateLabtests,allLabtests,updatetestName,selectedtestName,SelectedtestName
  } = useContext(LabTestGroupContext)


  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests`)
      .then((res) => {
         //console.log(res.data.data)
        updateLabtests(res.data.data)
        //  updateFilterData(res.data.data)
        // console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])




  const updateTestCode = (text)=>{
    let matches =[];
    if(text.length > 0){
        matches= allLabtests.filter((item) => {
            const regex = new RegExp(`${text}`,"gi");
            return item.testName.match(regex);
            
        });
    }
    console.log(matches,"matches");
    setSuggestions(matches)
    console.log(text);
     updatetestName(text);
    
    }
    const onSuggestHandler = async (event)=>{
        updatetestName(event.currentTarget.innerHTML);
        // console.log(event.currentTarget.innerHTML);
       await  axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests/testname`,
       {testName:event.currentTarget.innerHTML},
    //    { headers: {"token":localStorage.getItem("token") } },
       
       )
        .then((res)=>{
            selectedtestName(res.data.data);
            console.log(res.data.data);
        })
    
    }
  



  return (
    <div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Group Code" />
          <div className="create-field">
            <MdOutlineStorefront className="icon" size={20} />
            <Input
              onChange={(e) => { updateGroupCode(e.target.value) }}
              value={groupCode}
              className="normal-field"
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Group Name" />
          <div className="create-field">
            <MdOutlineStorefront className="icon" size={20} />
            <Input
              onChange={(e) => { updateGroupName(e.target.value) }}
              value={groupName}
              className="larger-field"
            />
          </div>
        </div>
      </div>
      <div className="patient-form">
        <div className="patient-container">
          <Label label="Parent Group Name" />
          <div className="create-field">
            <MdOutlineStorefront className="icon" size={20} />
            <Input
              onChange={(e) => { updateParent(e.target.value) }}
              value={parentName}
              className="normal-field"
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="Department Name" />
          <div className="create-field">
            <MdOutlineStorefront className="icon" size={20} />
            <Input
              onChange={(e) => { updteDepartmentName(e.target.value) }}
              value={departmentName}
              className="normal-field"
            />
          </div>
        </div>

        <div className="patient-container">
          <Label label="rate" />
          <div className="create-field">
            <MdOutlineAttachMoney className="icon" size={20} />
            <Input
              onChange={(e) => { updteRate(e.target.value) }}
              value={rate}
              className="normal-field"

            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Display Order" />
          <div className="create-field">
            <MdOutlineThermostat className="icon" size={20} />
            <Input
              onChange={(e) => { updteOrder(e.target.value) }}
              value={order}
              className="normal-field"
            />
          </div>
        </div>
      </div>
     
      <div className="patient-form">
        <div className="patient-container">

          <div className="create-field check">
            <div className="icon">
              <input type={'checkbox'}  onChange= {updateTestDepartment}
              value={testDepartment}></input>
              
            </div>
            <Input
             
              className="normal-field"

              placeholder="Test Of Same Department"

            />
          </div>
        </div>

        <div className="patient-container">

          <div className="create-field check">
            <div className="icon">
              <Input type={'checkbox'}  onChange={updatePrint}> value={print}</Input>
            </div>
            <Input
              
              
              className="normal-field"

              placeholder="Print select Test only"
            />
          </div>
        </div>

        <div className="patient-container">
          <div className="create-field check">
            <div className="icon">
              <Input type={'checkbox'} onChange={ updtePrintDetails}
              value={printDetails}></Input>
            </div>
            <Input
              
              className="normal-field"
              placeholder="Print Details"
            />
          </div>
        </div>
        <div className="patient-container">

          <div className="create-field check">
            <div className="icon">
              <Input type={'checkbox'}  onChange={ updteDisplayTop }
              value={displayTop}></Input>
            </div>
            <Input
             
              className="normal-field"
              placeholder="Display on Top"
              name="psw"
            />
          </div>
        </div>
      </div>

      <div className="patient-form">
        <div className="patient-container endCheck">

          <div className="create-field">
            <div className="icon">
              <Input type={'checkbox'} onChange={updteSkipName}
              value={skipName}></Input>
            </div>
            <Input
              
              className="larger-field"
              placeholder="Skip Group Naming in Printing"
              name="psw"
            />
          </div>
        </div>
        <div className="patient-container">
          <Label label="Group Condition" />
          <div className="create-field">
            <p className="icon">@@</p>

            <Input
              onChange={(e) => { updteGroupCondition(e.target.value) }}
              value={groupCondition}
              className="larger-field"

            />
          </div>
        </div>
       
      </div>
      <div className="patient-container">
        <div className='hoverInput'>
                        <Input
                            type="text"
                            onChange={(e)=>updateTestCode(e.target.value)}
                             value={testname || ''}
                             onBlur={()=>{
                                setTimeout(() =>  setSuggestions([]), 500);
                              }}
                            placeholder="Search Test / Test Group"  />
                    {suggestions && suggestions.map((suggestion, i)=>(
                    <div  className='suggestion'
                    onClick={onSuggestHandler}
                    key ={i}>{suggestion.testName}</div>
                    ))}
                    </div>
                    </div>

                  {  SelectedtestName.length > 0 ? (
                            <>
                              {SelectedtestName.length && SelectedtestName.map((item, i)=>(
                                <tr  key={i}>
                                
                                          <><td>{item.testCode}</td>
                                          <td>{item.testName}</td>
                                          <td>{item.units}</td>
                                          <td>{item.rate}</td>
                                          {/* <td><MdClose  id="MdClose" onClick={()=>{ deletethearray(i)}}/></td> */}
                                          </> 
                                    
                                   
                                </tr>
                                ))}
                  
                            </>
                        ):''}

    </div>

  )



  
};

export default LabTestGroupForm;
