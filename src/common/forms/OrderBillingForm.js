import React,{useState,useContext,useEffect,useRef} from "react";
import { MdOutbound, MdOutlineAlarm, MdOutlineArrowForward, MdClose, MdOutlineMenuBook,MdOutlineSouth,  MdOutlinePersonOutline, MdPrint } from "react-icons/md";
import { LabTestContext } from "../../containers/context/labTestContext/LabTestContext";
import Button from "../button/Button";
import Input from "../input/Input";
import Label from "../label/Label";
import axios from "axios"
import {CgSandClock} from "react-icons/cg";
import { GlobalVariable } from "../baseUrl/baseUrl";
import { OrderContext } from "../../containers/context/orderContext/OrderContext";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import "../../assets/css/index.css";
import "../../assets/css/PrintView.css"
import { OrderBillingContext } from "../../containers/context/orderBillingContext/orderBillingContext";




const OrderBillingForm = () => {
  const navigate = useNavigate();



  const [suggestions,setSuggestions]=useState([])

const {orders,SinglePatients,cancelButton}=useContext(OrderContext)



const {alllabtests,typedvalue,updateTypedtestName,selectedtestName,}= useContext(OrderBillingContext)





  
  
  const d = new Date();


const onChangeHandler =(text) =>{
  let matches =[];
  if(text.length > 0){
    matches = alllabtests.filter((item)=>{
      const regex = new RegExp (`${text}`,"gi");
      return item.testName.match(regex);

    });
  }
  console.log(matches,"matches");
   setSuggestions(matches)
  updateTypedtestName(text);
}

    const onSuggestHandler = async (event)=>{
      updateTypedtestName(event.currentTarget.innerHTML);
        // console.log(event.currentTarget.innerHTML);
       await  axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests/testname`,
       {testName:event.currentTarget.innerHTML},
       { headers: {"token":localStorage.getItem("token") } },
       
       )
        .then((res)=>{
            selectedtestName(res.data.data);
        })
    
    }
 
  const componentRef = useRef();

  const handlePrint = useReactToPrint({

    content: () => componentRef.current,

  });
//   <useReactToPrint
//   // trigger={() => <Button>Print this out!</Button>}
//   content={() => componentRef}
// />
  


  
  return (
    <div  >
 
    <div className="create-btn">
        <Button className="cancel-btn"   label="Print" onClick={handlePrint}  icon={<MdPrint size={13}/>} />
          <Button className="save-btn" label="Add Test Result"  icon={<MdOutlineAlarm size={14} />}/>
        <Button className="cancel-btn" label="Cancel"  onClick={()=>cancelButton(navigate("/order"))} />
          <Button className="save-btn" label="Save invoice"  icon={<MdOutlineMenuBook size={16}/>}/>
        </div>

        <div className='containers'>
            <div /*onSubmit={(e)=>submit(e)} */ >
            <div className="testName-container" >
                <div className="input-container">
                    <Label label="Patient Code" />
                    <div className="create-field">
                        <Input  
                            className="create-code"
                            type="text"
                            placeholder="patientCode"
                            name="patientCode"
                            
                            
                            id="patientCode"
                            
                           value={SinglePatients.patientCode}
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
                             value={SinglePatients.patientName}
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
                            value={SinglePatients.orderCode}
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
                             value={d.toLocaleDateString()}
                        />
                    </div>
                </div>
            </div>
        
            {/* <input type='submit' /> */}
            </div>
           

            <div className='card-container'>
                <table>

                    <tr>
                        <td>Patient Name<br/> <b><span>{ SinglePatients.patientName }</span></b></td>
                        <td>Age <br/><b><span>{ SinglePatients.patientAge } </span></b></td>
                        <td>Gender<br/><b><span>{ SinglePatients.patientGender  }</span></b></td>
                        <td>Phone No <br/><b><span>{ SinglePatients.patientPhone }</span></b></td>
                        <td>Refferd By<br/><b><span>{ SinglePatients.referredBy }</span></b></td>
                        <td>Patient type<br/><b><span>Nill</span></b></td>
                    </tr>

                </table>


                <div className="testDetails" >
                    <div className="details-header">Test Details</div>
                    <div className='test-searchbox'>
                    <p>Select any test / test group to add for patient</p>
                    <div className='hoverInput'>
                        <Input
                            type="text"
                            onChange={(e)=> onChangeHandler(e.target.value)}
                             value={typedvalue}
                             onBlur={()=>{
                              setTimeout(() =>  setSuggestions([]), 300);
                            }}
                            placeholder="Search Test / Test Group"  />
                    {suggestions && suggestions.map((suggestion, i)=>(
                    <div  className=''
                   onClick={onSuggestHandler}
                    key ={i}>{suggestion.testName}</div>
                    ))}
                    </div>
                        
                    </div>
                 
                </div>


            </div>




        </div>

      <div className="test-orderdetails" >
        

        <div className="order-report" >
          <div className="order-test">
            <div className="order-name">
              <p>test Code </p>
              <h4>{SinglePatients.testCode}</h4>
            </div>
            <div className="order-name">
              <p>Test/Test Group Name</p>
              <h4>{SinglePatients.testName}</h4>
            </div>
          </div>
          <div className="order-test">
            <div className="order-name">
              <p>Units</p>
              <h4>{}</h4>
            </div>
            <div className="order-name">
              <p> Rate</p>
              <Input type="text" value={SinglePatients.rate}/>
            </div>
          </div>
        </div>
        <div className="order-billing" >
          <div className="order-invoice">
            <div className="order-bill">
              <div className="order-amount">
                <p>Bill Amount </p>
                <Input type="text" value={SinglePatients.billAmount} />
              </div>
              <div className="order-amount">
                <p>other charges</p>
                <Input type="text" value={SinglePatients.otherCharges}/>
              </div>
            </div>

            <div className="order-amount">
              <p>Discount</p>
              <Input type="text"  value={SinglePatients.discount}/>
            </div>
            <div className="order-amount">
              <p>Total Amount</p>
              <Input type="text" value={SinglePatients.totalAmount}/>
            </div>
          </div>
          <div className="order-invoice">
            <div className="order-amount">
              <p>Bill Type </p>
              <Input type="text" value={SinglePatients.billType}/>
            </div>
            <div className="order-paid">
            <div className="order-amount">
              <p>Paid Amount</p>
              <Input type="text" value={SinglePatients.paidAmount}/>
            </div>
            <div className="order-amount">
              <p>Balance</p>
              <Input type="text" value={SinglePatients.balance}/>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="group-btn">
        <Button className="cancel-btn" label="Print" onClick={handlePrint}  icon={<MdPrint size={13}/>} />
          <Button className="save-btn" label="Add Test Result"  icon={<MdOutlineAlarm size={14} />}/>
        <Button className="cancel-btn" label="Cancel"  onClick={()=>cancelButton(navigate("/order"))} />
          <Button className="save-btn" label="Save invoice"  icon={<MdOutlineMenuBook size={16}/>}/>
        </div>
        
{/* <div style={{ display: "none" }}>
        <div  ref={componentRef} className="invoice-download">
          <div className="invoice-header">
          <h1><b>SRI SAI KRS DIAGNOSTIC</b></h1>
          </div>
         <div >
         <p>No 39, 7th Avenue.</p><br/>
          <p>Ashok Nagar Chennai -83</p><br/>
          <p>PH: 24892327, 24713061</p><br/>
         </div>
          <hr/>
          
        <div>
          <div className="print-content"><p>Inv.No</p>
          <p>c0050/cash</p>
          <p>Order Date: <span> {d.toLocaleDateString()}</span></p>
          </div>
          <div className="print-content"><p>
            patient Name: </p>
            <p>Naveen</p>
            <p>
              patient Id:<span>108</span>
            </p>
          
           </div>
           <div className="print-content">
            <p>Age/Sex:</p><p>34 years/(male)</p>
            <p></p>

           </div>
           <hr/>
           <div className="print-content">
                      <p>S.NO</p>
                      <p>particulars</p>
                      <p>Rate</p>
           </div>
           <hr/>
           <div className="invoice-footer">
           <p><span>Total :</span>{SinglePatients.totalAmount}</p>
           </div>
         

        </div>
          
        </div>
        </div> */}
<div style={{ display:"none" }}>
<div   ref={componentRef} className="printview-container">
    <header>
        <div className="title">
            <h1>SRI SAI KRS DIAGNOSTIC</h1>
            <div className="address">
                <h3>No 39,7th Avenue<br />
                    Ashok Nagar Chennai - 83<br/>
                    PH: 24892327, 24713061</h3>
            </div>
        </div>
        
    </header>
    
    <div className="cash-table">
        <hr/>
        <table id="customers">
            <tbody>
                <tr>
                    <td>Inv.No:</td>
                    <td>{SinglePatients.orderNo} / Cash</td>
                    <td className="c-table">Order Date: {d.toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td>{ SinglePatients.patientName }</td>
                    <td className="c-table">Patient ID: {SinglePatients.patientCode}</td>
    
                </tr>
                <tr>
                    <td>Age / Sex:</td>
                    <td>{ SinglePatients.patientAge } Year(s) / { SinglePatients.patientGender  }</td>
                </tr>
                <tr>
                    <td>Ref By:</td>
                    <td>{ SinglePatients.referredBy }</td>
                    <td className="c-table">Page 1 / 1</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <hr/>
            <table id="customers">
                <tr>
                    <td>Inv.No:</td>
                    <td>Particular</td>
                    <td>Rate:</td>
                    <td></td>
                </tr>
            </table>    
        <hr/>
        <div className="total">
            <h3>Total : {SinglePatients.totalAmount}</h3>
            <h4>Amount in Words: "one hundred fifty point zero zero" only</h4>
        </div>
        <hr />
    </div>
    </div>
</div>
        




    
    </div>
  );
};

export default OrderBillingForm;
