import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import {GlobalVariable} from '../../../common/baseUrl/baseUrl'
import { Navigate } from "react-router-dom";

export const LabTestGroupContext = createContext({})

export const LabTestGroupContextProvider = ({children}) => {
    const [groupCode,setGroupCode]= useState();
    const [groupName, setGroupName] = useState();
    const [parentName, setParant]= useState();
    const [departmentName,setDepartmentName]= useState();
    const [rate,setRate]= useState();
    const [order,setOrder]= useState();
    const [testDepartment, setTestDepartment]= useState(false);
    const [print,setPrint]= useState(false);
    const [printDetails, setPrintDetails]= useState(false);
    const [displayTop, setDisplayTop]= useState(false);
    const [skipName, setSkipName]= useState(false);
    const [groupCondition, setGroupCondotion]= useState('');
    const [groupTests,setGroupTests] = useState([])
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [testname, setindividualtestname] = useState([]);
   const [allLabtests, setAllLabtests] = useState([])
   const [SelectedtestName, setSelectedtestName] = useState([])
    const [testCode, setTestCode] = useState([])

    console.log(testCode,"testCode");
    
  console.log('Group code',groupCode);
  console.log('Group Name',groupName);
  console.log('Parent Name',parentName);
  console.log('DepartMent Name',departmentName);
  console.log('Rate',rate);
  console.log('Order',order);
  console.log('Test DepartMent',testDepartment);
  console.log('Print',print);
  console.log('Print Detals',printDetails);
  console.log('Display top',displayTop);
  console.log('Skip Name',skipName);
  console.log('Group Condition',groupCondition);

   
    const updateGroupCode= (params) => {
        setGroupCode(params)
    }
    const updateGroupName= (params) => {
        setGroupName(params)
    }
    const updateParent= (params) => {
        setParant(params)
    }
    const updteDepartmentName= (params) => {
        setDepartmentName(params)
    }
    const updteRate= (params) => {
        setRate(params)
    }
    const updteOrder= (params) => {
        setOrder(params)
    }
    const updateTestDepartment= () => {
        setTestDepartment(!testDepartment)
    }
    const updatePrint= () => {
        setPrint(!print)
    }
    const updtePrintDetails= () => {
        setPrintDetails(!printDetails)
    }
    const updteDisplayTop= () => {
        setDisplayTop(!displayTop)
    }
    const updteSkipName= () => {
         
        setSkipName(!skipName)
    }
    const updteGroupCondition= (params) => {
        setGroupCondotion(params)
    }
    const updateGroupTests =(params) =>{
        setGroupTests(params)
    }
    // const updateTestCode =(params) =>{
    //     setTestCode(params)
    // }
     const updatetestName =(params) =>{
        setindividualtestname(params)
    }
    

    const updateLabtests =(params)=>{
        setAllLabtests(params)
    }
    
 const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(groupTests.map((data) => data._id));
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



let groupLabtestData={

    testGroupName: groupName,
    parentName: parentName,
    departmentName: departmentName,
    rate: rate,
    displayonTop: displayTop,
    groupCondition: groupCondition,
    order: order,
    print: print,
    printDetails: printDetails,
    skipName: skipName,
    testDepartment: testDepartment,
    testCode:testCode
    };

    


const grouplabtestadded = async()=>{
    // console.log(datas);

    // datas.preventDefault();
  
            axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/grouptest/add-labgroup`, groupLabtestData)
           
            .then((res) => {
                console.log(res.data);
                //  navigate("/labtestgroup")
                 window.location.reload()
     
            })
            .catch((err) => {
                console.log(err);
            })
    
           
}

const selectedtestName = async (params)=>{
    
    // setBillamount(params.rate)
    
    // setTestname(params.testName)
       
        setSelectedtestName(selectetestName=>[...selectetestName,  params])
        setTestCode(testCode=>[...testCode, params.testCode])
        //setTotalAmount(TotalAmount + parseInt(params.rate));    
        
    } 





const cancelCourse = (id)=>{
    Navigate("/labtestgroup")
     document.getElementById(id).reset();
  }
    return(
        <LabTestGroupContext.Provider
        value={{
            updateGroupCode,groupCode,
            updateGroupName,groupName,
            updateParent,parentName,
            updteDepartmentName,departmentName,
            updteRate,rate,
            updteOrder,order,
            updateTestDepartment,testDepartment,
            updatePrint,print,
            updtePrintDetails,printDetails,
            updteDisplayTop,displayTop,
            updteSkipName,skipName,
            updteGroupCondition,groupCondition,
            updateGroupTests,groupTests,
            handleSelectAll,
            handleClick,selectCount,
            selectAllDelete,isCheck,isCheckAll,
            grouplabtestadded,cancelCourse,
            testname, 
            updateLabtests,allLabtests,
            updatetestName,
            selectedtestName,SelectedtestName

        }}>{children}</LabTestGroupContext.Provider>
    )
}