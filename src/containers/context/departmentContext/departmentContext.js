import { createContext, useState } from "react";
import axios from "axios";
import { GlobalVariable } from "../../../common/baseUrl/baseUrl";
import { Navigate } from "react-router-dom";

export const DepartmentContext = createContext({})

export const DepartmentContextProvider = ({ children }) => {

    const [departmentCode,setDepartmentCode]= useState();
    const [departmentName,setDepartmentName]=useState();
    const [remarks,setremarks]= useState();
    const[TestResult,setTestResult]=useState(false)
     const [Departments, setDepartment] = useState([]);
     const [isCheckAll, setIsCheckAll] = useState(false);
     const [isCheck, setIsCheck] = useState([]);

     const [input, setinput] = useState([]);
     const [filterData, setFilterData] = useState([]);



    const  updateDepartment = (params) => {
             setDepartment(params)
             }
        const cancelCourse = (id) => { 
          Navigate("/department")
         document.getElementById(id).reset();
             }


             const handleSelectAll = (e) => {
                setIsCheckAll(!isCheckAll);
                setIsCheck(Departments.map((data) => data._id));
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

   

const updatedepartmentCode =(params)=>{
  setDepartmentCode(params)
}

    const updatedepartmentName = (params) => {
      setDepartmentName(params)
    }
    const updateremarks = (params) => {
      setremarks(params)
    }
    const updateprintTestResult = () => {
      setTestResult(!TestResult)
    }
    const updateInput = (params) => {
      setinput(params)
    }
  const updateFilterData = (params) => {
      setFilterData(params)
    }
    const selectAllDelete = async()=>{
       
         console.log(isCheck);
        //  axios.all(isCheck.map((id) => axios.delete(`http://localhost:3001/api/patients/delete-patient/${id}`,{
        //   headers:{"token": localStorage.getItem("token")  }
        //     }))).then(  (data) => console.log(data));
    
    }
    
    let DepartmentData={
      
        departmentCode: departmentCode,
        departmentName: departmentName,
        remarks: remarks,
        printTestResult: TestResult
      };
      const departmentAdded = (e) => {

        e.preventDefault();
            axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/department/add-Department`,DepartmentData,{headers:{token:localStorage.getItem("token")}} )
           
            .then((res) => {
                console.log(res.data);
                
                  window.location.reload()
                  
            })
            .catch((err) => {
                console.log(err);
            })
      }



    return (
        <DepartmentContext.Provider
            value={{
              departmentCode,updatedepartmentCode,
              departmentName, updatedepartmentName,
              remarks, updateremarks,
              TestResult,   updateprintTestResult,
              Departments, updateDepartment,
              handleSelectAll,
              handleClick,selectCount,    
              isCheck,isCheckAll,
              selectAllDelete,
              departmentAdded,
              // cancelDepartement
              cancelCourse,
              input,updateFilterData,filterData,updateInput

            }}
            >{children}</DepartmentContext.Provider>
    )
}