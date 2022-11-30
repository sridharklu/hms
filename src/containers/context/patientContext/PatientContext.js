import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const PatientContext = createContext({})

export const PatientContextProvider = ({ children }) => {
    const [patientCode, setPatientCode] = useState();
    const [patientName, setPatientName] = useState();
    const [gender, setGender] = useState();
    const [dob, setDob] = useState();
    const [age, setAge] = useState();
    const [martialStatus, setMartialStatus] = useState();
    const [weight, setWeight] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [referenceType, setReferenceType] = useState();
    const [referredBy, setRefferdBy] = useState();
    const [occupation, setOccupation] = useState();
    const [station, setStation] = useState();
    const [pinCode, setPinCode] = useState();
    const [address, setAddress] = useState();
    const [idcard, setIdCard] = useState();
    const [registrationDate, setRegistrationDate] = useState();
    const [print, setPrint] = useState(false);
    const [remarks, setRemarks] = useState();
    const [patient, setPatients]=useState([]);
     const [isChecked, setIsChecked]=useState([])
 
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
   
    const [input, setinput] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [SinglePatient,setSinglePatient] = useState([])

 

// useEffect(() => {
//     setSinglePatient(JSON.parse(window.localStorage.getItem('patients')));

//    }, []);

// useEffect(() => {

//     (async () => {
//         await window.localStorage.setItem('patients', JSON.stringify(SinglePatient) );
        
//       })();
  
//   }, [SinglePatient]);
    


const updatePatients =(params)=>{
    setPatients(params)
}

    const updatePatientCode = (params) => {
        setPatientCode(params)
    }
    const updatePatientName = (params) => {
        setPatientName(params)
    }
    const updateGender = (params) => {
        setGender(params)
    }
    const updateDob = (params) => {
        setDob(params)
    }
    const updateAge = (params) => {
        setAge(params)
    }
    const updateMartialStatus = (params) => {
        setMartialStatus(params)
    }
    const updateWeight = (params) => {
        setWeight(params)
    }
    const updatePhone = (params) => {
        setPhone(params)
    }
    const updateEmail = (params) => {
        setEmail(params)
    }
    const updateReferenceType = (params) => {
        setReferenceType(params)
    }
    const updateRefferdBy = (params) => {
        setRefferdBy(params)
    }
    const updateOccupation = (params) => {
        setOccupation(params)
    }
    const updateStation = (params) => {
        setStation(params)
    }
    const updatePinCode = (params) => {
        setPinCode(params)
    }
    const updateAddress = (params) => {
        setAddress(params)
    }
    const updateIdCard = (params) => {
        setIdCard(params)
    }
    const updateRegistrationDate = (params) => {
        setRegistrationDate(params)
    }
    const updatePrint = (params) => {
        setPrint(true)
    }
    const updateRemarks = (params) => {
        setRemarks(params)
    }

    const updateInput = (params) => {
        setinput(params)
    }
    const updateFilterData = (params) => {
        setFilterData(params)
    }

    const updateSinglePatient =(params)=>{
        setSinglePatient(params)
    }

    const alldelete = async()=>{
       
         console.log(isChecked);
         axios.all(isChecked.map((id) => axios.delete(`http://localhost:3001/api/patients/delete-patient/${id}`,{
          headers:{"token": localStorage.getItem("token")  }
            }))).then(  (data) => console.log(data));
    
    }
    


    const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(patient.map((data) => data._id));
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
  
  const cancelCourse = (id)=>{
    Navigate("/patient")
     document.getElementById(id).reset();
  }

    return (
        <PatientContext.Provider
            value={{
                patientCode, updatePatientCode,
                patientName,updatePatientName,
                gender,updateGender,
                dob,updateDob,
                age,updateAge,
                martialStatus,updateMartialStatus,
                weight,updateWeight,
                phone,updatePhone,
                email,updateEmail,
                referenceType,updateReferenceType,
                referredBy,updateRefferdBy,
                occupation,updateOccupation,
                station,updateStation,
                pinCode,updatePinCode,
                address,updateAddress,
                idcard,updateIdCard,
                registrationDate,updateRegistrationDate,
                print,updatePrint,
                remarks,updateRemarks,
               patient,updatePatients,
               alldelete,updateSinglePatient,
               isChecked, setIsChecked,  
               isCheckAll,
               handleClick,
               handleSelectAll,
               isCheck,
               selectCount,
               input, updateFilterData, 
               filterData, updateInput,
               SinglePatient,cancelCourse

            }}
            >{children}</PatientContext.Provider>
    )
}