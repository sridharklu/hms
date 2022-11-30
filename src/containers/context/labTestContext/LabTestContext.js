import { useState } from "react";
import { createContext } from "react";
import {GlobalVariable} from '../../../common/baseUrl/baseUrl'
import axios  from "axios";
import {Navigate} from "react-router-dom"

export const LabTestContext = createContext({})

export const LabTestContextProvider = ({children}) => {
    const [testcode, setTestCode]= useState();
    const [groupCode, setgroupCode]=useState();
    const [testName,setTestName]= useState();
    const [units,setUnits]= useState();
    const [rate, setRate]= useState();
    const [testGroup,setTestGroup]= useState();
    const [departmentName,setDepartmentName]=useState();
    const [methodology , setMethodology]= useState();
    const [resultDuration, setResultDuration]= useState();
    const [cutOff, setCutOff]= useState();
    const [resultFormat,setResultFormat]= useState();
    const [displayOrder, setDisplayOrder]= useState();
    const [printResult, setPrintResult]= useState(false);
    const [printMethodology,setPrintMethodology]= useState(false);
    const [formula,setFormula]= useState();
    const [condition, setCondition]= useState();
    const [remark,setRemark]= useState();
    const [defaultValue, setDefaultValue]= useState();
    const [ranges, setRange]= useState();
    const [rangeDescription, setRangeDescription]= useState();
    const [rangeAge, setRangeAge]= useState();
    const [minimum, setMinimum]= useState();
    const [maximum, setMaximum]= useState();
    const [individualTests,setindividualLabtests]= useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [labtestsName, setlabtests] = useState([]);
    const [updatetedtestName,setupdatetetestName]=useState([])
    const [selectetestName,setSelectedtestName]=useState([])
    const [amountReceive,setamountReceived]= useState()
    const [amountType, setamountTyped] = useState(0)
    const [TotalAmount, setTotalAmount] = useState(0)
    const [Discount, setDiscountTyped] = useState()
    const [otherCharges, setTypedOthercharge] = useState()
    const [billAmount,setBillamount]= useState([])
    const [testname, setTestname]=useState()
    const [testGroupname, settestGroupname] = useState()
    const [cashtype, setCashtype]=useState()

    
console.log(labtestsName,"labtestsName");
// console.log(TotalAmount,"TotalAmount");

    const updateTestCode = (params) => {
        setTestCode(params)
    }
    const updateTestName = (params) => {
        setTestName(params)
    }
    const updateUnits = (params) => {
        setUnits(params)
    }
    const updateRate = (params) => {
        setRate(params)
    }
    const updateTestGroup = (params) => {
        setTestGroup(params)
    }
    const updateDepartmentName = (params) => {
        setDepartmentName(params)
    }
    const updateMethodology = (params) => {
        setMethodology(params)
    }
    const updateResultDuration = (params) => {
        setResultDuration(params)
    }
    const updateCutOff = (params) => {
        setCutOff(params)
    }
    const updateResultFormat = (params) => {
        setResultFormat(params)
    }
    const updateDisplayOrder = (params) => {
        setDisplayOrder(params)
    }
    const updatePrintResult = () => {

        setPrintResult(!printResult);
    }
    const updatePrintMethodology = () => {
        setPrintMethodology(!printMethodology)
    }
    const updateFormula = (params) => {
        setFormula(params)
    }
    const updateCondition = (params) => {
        setCondition(params)
    }
    const updateRemark = (params) => {
        setRemark(params)
    }
    const updateDefaultValue = (params) => {
        setDefaultValue(params)
    }
    const updateRange = (params) => {
        setRange(params)
    }
    const updateRangeDescription = (params) => {
        setRangeDescription(params)
    }
    const updateRangeAge = (params) => {
        setRangeAge(params)
    }
    const updateMinimum = (params) => {
        setMinimum(params)
    }
    const updateMaximum = (params) => {
        setMaximum(params)
    }
 const updateIndividualTests =(params)=>{
    setindividualLabtests(params)
 }
 const updateLabtests =(params)=>{
    
    setlabtests(params)
 }

 const updateTotalAmount =(params)=>{
    setTotalAmount(params)
   
 }

 const updatetestName =(params)=>{
    setupdatetetestName(params)
 }
 const amountReceived = (params)=>{
   setamountTyped(params)
    let x = TotalAmount - parseInt(params) ;
    setamountReceived(x)
    
 }
 const otherCharge =(params)=>{
    setTypedOthercharge(params)
 }
const discounttypedValue =(params)=>{
    setDiscountTyped(params)
}
const discountCalculate =(params) =>{
    setTotalAmount(params)
}

const onOptionChangeHandler = (event) => {

    setCashtype(event.target.value)
}

const updategrouptests = (params)=>{

    // console.log(params);
    // labtestsName.push(params);
     setlabtests(params)
    
}
// const totalCalculate =(params)=>{
//     setDiscountTyped(params)
//     console.log(params );
//     if(params== 0){
//         console.log("hi");
//         let discounted_price =T - parseInt(TotalAmount * 0/ 100)
//         console.log(discounted_price,"discounted_price");
//     }
//    let discounted_price =TotalAmount - parseInt(TotalAmount * params / 100)

//     setTotalAmount(discounted_price)
//      console.log(discounted_price);

// }
// const otherCharge =(params)=>{
    
//     // setTypedOthercharge(params)

// // console.log(typeof(TotalAmount),"find the total amount");

// console.log(params,"params");


// let sample = [TotalAmount,params];
// console.log(sample,"sample");
//     //let x =parseInt(TotalAmount) + parseInt(params) ;
//     // setTotalAmount(x)
//     let total = sample.reduce((previousvalue,currentvalue)=>previousvalue + Number(currentvalue));
//     setTotalAmount(total)

// }



 const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(individualTests.map((data) => data._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
   let selectCount = isCheck.length;


  const handleClick = (e) => {
    const { id, checked } = e.target;
    
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };


const selectAllDelete = async()=>{

console.log(isCheck);
//  axios.all(isCheck.map((id) => axios.delete(`http://localhost:3001/api/patients/delete-patient/${id}`,{
//   headers:{"token": localStorage.getItem("token")  }
//     }))).then(  (data) => console.log(data));

}


const selectedtestName = async (params)=>{
    
    // setBillamount(params.rate)
    setBillamount(billAmount=>[...billAmount,  params.rate])
     
    //let totalBill = billAmount.reduce((previousvalue, currentValue)=>previousvalue,currentValue,0);
    

   if(params.testName){
    // console.log("test name printed");
    setTestname(params.testName)
    setTestCode(params.testCode)
   }else{
    settestGroupname(params.testGroupName)
    setgroupCode(params.groupCode)
   }




// console.log(params.testGroupName,"selectetestName");
   
    setSelectedtestName(selectetestName=>[...selectetestName,  params])

    setTotalAmount(TotalAmount + parseInt(params.rate));    
    
} 

const cancelCourse = (id)=>{ 
    Navigate("/patient")
    //  document.getElementById(id).reset();
  }


    let LabtestData={

        testName: testName,
        testCode: testcode,
        units: units,
        rate: rate,
        testGroup: testGroup,
        departmentName: departmentName,
        methodology: methodology,
        resultDuration: resultDuration,
        sampleCutoff: cutOff,
        resultFormat: resultFormat,
        displayOrder: displayOrder,
        printRemarkTestResult: printResult,
        printMethodologyTestResult: printMethodology,
        formula: formula,
        condition:condition,
        remarks: remark,
        defaultValue:defaultValue,
        rangeType: "Age",
        rangeDescription: rangeDescription,
        range: rangeAge,
        rangeMode: "years",
        min: minimum,
        max: maximum,
        description: " hi how are you"
        };

const labtestName = (e) => {
    e.preventDefault();
        axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests/add-labtest`,LabtestData )
       
        .then((res) => {
            console.log(res.data);
            
            // window.location.reload()
 
        })
        .catch((err) => {
            console.log(err);
        })
}


const deletethearray = async (item)=>{
  
    // selectetestName.splice(item,1)
    // item.preventDefault();
     let remove = selectetestName.filter((_, i) => i !== item);
    // let remove = selectetestName.splice(item,1);
    // selectedtestName(selectetestName)
    // selectedtestName(remove)
    // setTotalAmount(TotalAmount + parseInt(params.rate)); 
    const prices = remove.map(val=>parseInt(val.rate));
    // const pricesInt = parseInt(val.rate)
    console.log(prices, "prices");  
   let totaly = prices.reduce(function(previousvalue, currentvalue){
        return Number(previousvalue) + Number(currentvalue);
    },0);
    setTotalAmount(totaly)
    setSelectedtestName(remove)
    
}


    return(
        <LabTestContext.Provider
        value={{
            updateTestCode,testcode,groupCode,
            updateTestName,testName,testGroupname,
            updateUnits,units,
            updateRate,rate,
            updateTestGroup,testGroup,
            updateDepartmentName,departmentName,
            updateMethodology,methodology,
            updateResultDuration,resultDuration,
            updateCutOff,cutOff,
            updateResultFormat,resultFormat,
            updateDisplayOrder,displayOrder,
            updatePrintResult,printResult,
            updatePrintMethodology,printMethodology,
            updateFormula,formula,
            updateCondition,condition,
            updateRemark,remark,
            updateDefaultValue,defaultValue,
            updateRange,ranges,
            updateRangeDescription,rangeDescription,
            updateRangeAge,rangeAge,
            updateMinimum,minimum,
            updateMaximum,maximum,
            labtestName,individualTests,
            updateIndividualTests,
            isCheckAll,isCheck,
            handleSelectAll,handleClick,
            selectCount,selectAllDelete,
            updateLabtests,labtestsName,
            updatetedtestName,updatetestName,
            selectetestName, selectedtestName,
            amountReceive,amountReceived,
            amountType/*totalCalculate*/,TotalAmount,updateTotalAmount,
             otherCharge,otherCharges,
            Discount,billAmount,
            testname,cancelCourse,
            deletethearray,
            discounttypedValue,discountCalculate,
            cashtype,onOptionChangeHandler,
            updategrouptests
           
        }}>{children}</LabTestContext.Provider>
    )
}

