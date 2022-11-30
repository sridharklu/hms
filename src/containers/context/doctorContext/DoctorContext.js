import { createContext, useState } from "react";
import axios from "axios";
import { GlobalVariable } from "../../../common/baseUrl/baseUrl";

export const DoctorContext = createContext({})

export const DoctorContextProvider = ({ children }) => {


     const [doctorName, setDoctorName] = useState()
    const [DoctorCode,setDoctorCode] = useState()
    const [DoctorType,setDoctorType] =useState()
    const [DoctorSpecialist,setDoctorSpecialist]= useState()
    const [DoctorQualification,setDoctorQualification]= useState()
    const [DoctorPhone,setDoctorPhone]= useState()
    const [DoctorAppointment,setDoctorAppointment]= useState()
    const [DoctorEmail,setDoctorEmail]= useState()
    const [DoctorAmount,setDoctorAmount] = useState()
    const [DoctorSchedular,setDoctorSchedular]= useState()
    const [DoctorAddress,setDoctorAddress]= useState()
    const [DoctorUsername,setDoctorUsername]= useState()

     const [Doctors, setDoctors] = useState([]);
     const [isCheckAll, setIsCheckAll] = useState(false);
     const [isCheck, setIsCheck] = useState([]);
     const [input, setinput] = useState([]);
     const [filterData, setFilterData] = useState([]);


     const  updateDoctorName = (params) => {
      setDoctorName(params)
      }
      const updateDoctorCode =(params) =>{
        setDoctorCode(params)
      }
      const updateDoctorType =(params)=>{
        setDoctorType(params)
      } 

      const updateDoctorSpecialist =(params)=>{
        setDoctorSpecialist(params)
      } 
     
      const updateDoctorQualification =(params)=>{
        setDoctorQualification(params)
      } 
      const updateDoctorPhone =(params)=>{
        setDoctorPhone(params)
      } 
      
      const updateDoctorAppointment =(params)=>{
        setDoctorAppointment(params)
      }
      const updateDoctorAmount =(params)=>{
        setDoctorAmount(params)
      }
     const updateDoctorEmail =(params)=>{
      setDoctorEmail(params)
     }

     const updateDoctorUsername =(params)=>{
      setDoctorUsername(params)
     }
     const updateDoctorAddress =(params)=>{
      setDoctorAddress(params)
     }
     const updateDoctorSchedular =(params)=>{
      setDoctorSchedular(params)
     }
      
    const updateDoctors = (params) => {
             setDoctors(params)
      }

             
    const updateInput = (params) => {
      setinput(params)
    }
  const updateFilterData = (params) => {
      setFilterData(params)
    }

   
             const handleSelectAll = (e) => {
                setIsCheckAll(!isCheckAll);
                setIsCheck(Doctors.map((data) => data._id));
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
    
    let DoctorData={
      doctorName: doctorName,
      //DoctorCode:DoctorCode,
      doctorSpecialist: DoctorSpecialist,
       doctorDepartment: DoctorType,
      doctorQualification: DoctorQualification,
      doctorPhone: DoctorPhone,
      doctorTimeforeachAppointment: DoctorAppointment,
      doctorAmountforEachAppointment: DoctorAmount,
      doctorEmail: DoctorEmail,
      doctorSchedularDays: DoctorSchedular,
      doctorUserName: DoctorUsername,
      doctorAddress: DoctorAddress
  
      };

      
const DoctorRegister = (e) => {

  e.preventDefault();
      axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/doctors/add-Doctor`,DoctorData,{headers:{token:localStorage.getItem("token")}} )
     
      .then((res) => {
          console.log(res.data);
          
           window.location.reload()
         

         
      })
      .catch((err) => {
          console.log(err);
      })
}

    return (
        <DoctorContext.Provider
            value={{
         
             isCheck,isCheckAll,
            updateDoctors,Doctors,
            selectAllDelete,selectCount,
            handleSelectAll,
            handleClick,
            doctorName,updateDoctorName,
            DoctorCode, updateDoctorCode,
            DoctorType, updateDoctorType,
            DoctorSpecialist, updateDoctorSpecialist,
            DoctorQualification, updateDoctorQualification,
            DoctorPhone,updateDoctorPhone,
            DoctorAmount, updateDoctorAppointment,
            DoctorAppointment,updateDoctorAmount,
            DoctorEmail,updateDoctorEmail,
            DoctorUsername,updateDoctorUsername,
            DoctorAddress,updateDoctorAddress,
            DoctorSchedular, updateDoctorSchedular,
            DoctorRegister,
            input, updateInput,
            filterData, updateFilterData
            }}
            >{children}</DoctorContext.Provider>
    )
}