import React,{useContext,useState,useEffect} from 'react';
import { MdClose, MdLocalParking, MdOutlineDelete, MdOutlinePersonOutline, MdOutlineSouth } from 'react-icons/md';
import "../../assets/css/testName.css";
import { PatientContext } from '../../containers/context/patientContext/PatientContext';
import Input from '../input/Input';
import Label from '../label/Label';
import Button from '../button/Button';
import {CgSandClock} from "react-icons/cg";
import { LabTestContext } from '../../containers/context/labTestContext/LabTestContext';
import axios from 'axios';
import { GlobalVariable } from '../baseUrl/baseUrl';
import {  useNavigate } from 'react-router-dom';
import { options } from '../../mock/tableData/CashType';
import moment from 'moment'



const TestNameForm = () => {
    const navigate = useNavigate();
    
    const [suggestions,setSuggestions]=useState([])
    // const [balance,setBalance] = useState()

    

    const {SinglePatient} = useContext(PatientContext)
    const {labtestsName,updatetestName,updatetedtestName,
        selectedtestName, selectetestName ,amountReceived,amountReceive,
        amountType,totalCalculate,TotalAmount,updateTotalAmount,otherCharges,otherCharge,
        Discount,billAmount,testname,testGroupname,deletethearray,discountCalculate,
        discounttypedValue,onOptionChangeHandler,cashtype,testcode,groupCode } = useContext(LabTestContext)
  

         console.log(testcode,"testcode",groupCode,"groupCode");
// const balance = selectetestName.rate - amountReceive;


 let totalbillAmount = billAmount.reduce((previous, current) => {
    return Number(previous)+Number(current);
 }, 0)

//  console.log(totalbill,"total bill in function");



 const d = moment(new Date()).format('MM/DD/YY')



const onChangeHandler = (text)=>{
let matches =[];
if(text.length > 0){
    matches= labtestsName.filter((item) => {
        const regex = new RegExp(`${text}`,"gi");
        let searchName =(item.testGroupName && item.testGroupName) || (item.testName && item.testName)
        console.log(searchName,"search name");
        return searchName.match(regex) 
        
    });
}
console.log(matches,"matches");
setSuggestions(matches)
updatetestName(text);

}

const getData = async (params) => {


     console.log("data",typeof(params),params);
    await axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests/testname`,{testName:params}).then((res)=>{
     const individualdata = res.data.data
     
      if (individualdata.length > 0 || individualdata.length === undefined ){

      
        selectedtestName(individualdata)

      }
   
      if(individualdata){

        axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest/getsingal-testgroup`,{testGroupName:params})
     .then((result) => {
        const labData = result.data.data
     //console.log(result,"lab data");
       //  console.log(result.data.data,"lab test selected data")
    //    console.log(labData,"grouppeddata ");
    //   console.log(labData.length,"grouppeddata");
       
       if (labData.length > 0 || labData.length === undefined ){

    
        selectedtestName(result.data.data)

      }
       

      
     
       //  updateFilterData(res.data.data)
       // console.log(res.data.data, "res data")
     })
     .catch((err) => {
       console.log(err)
     })
      }
     
     
    })
   // setData(data);
 };
const onSuggestHandler = async (event)=>{
    
    updatetestName(event.currentTarget.innerHTML);
    // console.log(event.currentTarget.innerHTML);
//    await  axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests/testname`,
//    {testName:event.currentTarget.innerHTML}) 

//     .then((res)=>{

//        axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest/getsingal-testgroup`, {testName:event.currentTarget.innerHTML})
//        .then((result)=>{
//         console.log(result.data.data);
//        })
//         selectedtestName(res.data.data);
//         console.log(res.data.data);
//     })
getData(event.currentTarget.innerHTML)

}


const submit = async (event) =>{ 

    event.preventDefault(); 

    
     
    await axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/orders/add-Order`,
    {
     patientCode: SinglePatient.patientCode,
     orderDate: d,
     patientName:SinglePatient.patientName,
     patientAge:SinglePatient.patientAge,
     patientGender:SinglePatient.patientGender,
     patientPhone:SinglePatient.patientMobile,
     referredBy:SinglePatient.referredBy,
     testCode : testcode,
     testGroupCode : groupCode,
     testName : testname,
     testGroupname : testGroupname,
     rate:totalbillAmount,
     billAmount:totalbillAmount,
     billType: cashtype,
     otherCharges: otherCharges,
     discount: Discount,
     totalAmount:TotalAmount || billAmount || 0,
     paidAmount: amountType,
     amountReceived:amountType,
     balance: amountReceive || 0,
     status: false
    },
    
    
    ).then(res =>{
        console.log(res.data);
        
        navigate("/order");
        
        // window.location.reload(false);

    })
}


  return (
    <div className='containers'>
            <div /*onSubmit={(e)=>submit(e)} */ >
            <div className="testName-container">
                <div className="input-container">
                    <Label label="Patient Code" />
                    <div className="create-field">
                        <Input  
                            className="create-code"
                            type="text"
                            placeholder="patientCode"
                            name="patientCode"
                            
                            
                            id="patientCode"
                            
                            value={SinglePatient.patientCode}
                        />
                    </div>
                </div>

                <div className="input-container">
                    <Label label="Patient Name" />
                    <div className="create-field">
                        <MdOutlinePersonOutline className="icon" size={20} />

                 
                        <Input
                            className="input-field"
                            type="text"
                            id="patientName"       
                            name="patientName"
                            value={SinglePatient.patientName}
                        />
                    </div>
                </div>

                <div className="input-container">
                    <Label label="Order-No" />
                    <div className="create-field">
                        <p className="icon" size={20} >C</p>
                        <Input
                         type="text"   
                         name="orderNo"
                            id="orderNo"
                            className="create-code"
                            value={"23"}
                        />
                    </div>
                </div>

                <div className="input-container">
                    <Label label="Order-Date" />
                    <div className="create-field">
                        <MdOutlineSouth className="icon" size={20} />
                        <Input
                            className="input-field"
                            type="text"               
                            name="date"
                            id="date"
                             value={d}
                        />
                    </div>
                </div>
            </div>
        
            {/* <input type='submit' /> */}
            </div>
           

            <div className='card-container'>
                <table>

                    <tr>
                        <td>Patient Name<br/> <b><span>{ SinglePatient.patientName }</span></b></td>
                        <td>Age <br/><b><span>{ SinglePatient.patientAge } </span></b></td>
                        <td>Gender<br/><b><span>{ SinglePatient.patientGender }</span></b></td>
                        <td>Phone No <br/><b><span>{ SinglePatient.patientMobile }</span></b></td>
                        <td>Refferd By<br/><b><span>{ SinglePatient.referredBy }</span></b></td>
                        <td>Patient type<br/><b><span>Nill</span></b></td>
                    </tr>

                </table>


                <div className="testDetails">
                    <div className="details-header">Test Details</div>
                    <div className='test-searchbox'>
                    <p>Select any test / test group to add for patient</p>
                    <div className='hoverInput'>
                        <Input
                            type="text"
                            onChange={(e)=>onChangeHandler(e.target.value)}
                             value={updatetedtestName || ''}
                             onBlur={()=>{
                                setTimeout(() =>  setSuggestions([]), 500);
                              }}
                            placeholder="Search Test / Test Group"  />
                    {suggestions && suggestions.map((suggestion, i)=>(
                    <div  className='suggestion'
                    onClick={onSuggestHandler}
                    key ={i}>{
                        suggestion.testName || suggestion.testGroupName
                    }</div>
                    ))}
                    </div>
                        
                    </div>
                    {

                        
                   selectetestName.length > 0 ? (
                            <>
                                <div className='saveInvoice'>
                        <table className='table table-borderd'>
                            <thead>
                                <tr>
                                    <th scope='col'>Test Code</th>
                                    <th scope='col'>Test/Test Group Name</th>
                                    <th scope='col'>Units</th>
                                    <th scope='col'>Rate</th>
                                    <th scope='col'> </th>
                                </tr>
                            </thead>
                            <tbody>
                            {selectetestName.length && selectetestName.map((item, i)=>(
                                <tr  key={i}>
                                
                                          <><td>{item.testCode || item.groupCode}</td>
                                          <td>{item.testName || item.testGroupName}</td>
                                          <td>{item.units }</td>
                                          <td>{item.rate || item.rate}</td>
                                          <td><MdClose  id="MdClose" onClick={()=>{ deletethearray(i)}}/></td></> 
                                    
                                   
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                
                    <br></br>
                    <div className='printInvoice'>
                        <table className='table table-borderd'>
                            <tr>
                                <th>Bill Amount</th>
                                <td>{totalbillAmount}</td>
                            </tr>
                            <tr>
                                <th>Other Charges</th>
                                <td><Input onBlur= {(e)=>{
                                    updateTotalAmount(TotalAmount+Number(e.target.value))
                                     otherCharge(e.target.value)
                                    // console.log('tol',TotalAmount+Number(e.target.value));
                                }}
                                onFocus={(e)=>{updateTotalAmount(TotalAmount-Number(e.target.value));
                                     otherCharge(e.target.value)
                                }}
                                //  id= "otherCharge"
                                //   value={otherCharges}
                                /> </td>
                            </tr>
                            <tr>
                                <th>Discount</th>
                                <td><Input onBlur={(e)=> {

                               discountCalculate (TotalAmount - Number(TotalAmount * (e.target.value) / 100) );
                               discounttypedValue(e.target.value);
                               //    console.log('discount tol',TotalAmount - Number(TotalAmount * (e.target.value) / 100));  
                            }} 
                            onFocus={(e)=>{ 
                                discountCalculate(TotalAmount + Number(TotalAmount * (e.target.value) / (100-e.target.value)));
                                
                             }}
                                // value={Discount}
                                /></td>
                            </tr>
                            <tr>
                                <th>Total Amount</th>
                                <td>{ TotalAmount || billAmount || 0 } </td>
                            </tr>
                            <tr>
                                <th>Amount Recevied</th>
                                <td><Input   onChange={(e) => amountReceived(e.target.value)}
                                value ={amountType}
                                /></td>
                            </tr>
                        </table>


                        <table className='table table-borderd'>
                            <tr>
                                <th>Bill Type</th>
                                <td>
                                    <select name="cashtype" id="cashtype" onChange={onOptionChangeHandler} required>
                                    <option>Please choose one option</option>
                                        {options.map((option, index) => {
                                            return <option key={index} >
                                                {option}
                                            </option>
                                        })}
                                   </select>
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Paid Amount</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>Balance</th>
                                <td>{ amountReceive || 0}</td>
                            </tr>
                        </table>

                    </div>
                    <div className="create-btn">
                        <Button
                            className="cancel-btn" label="Cancel" />
                        <Button
                            className="save-btn"
                            label="Save Invoice"
                            onClick={(e) => submit(e)}

                            icon={<CgSandClock size={17} />}
                            disabled={!amountReceive && !cashtype}
                        />
                        
                       
                    </div>
                            </>
                        ):''}
                </div>


            </div>




        </div>
  )
}

export default TestNameForm