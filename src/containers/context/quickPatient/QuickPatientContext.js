import { createContext } from "react";
import { useState } from "react";
import {GlobalVariable} from '../../../common/baseUrl/baseUrl'
import axios  from "axios";

export const QuickPatientContext = createContext({})

export const QuickPatientContextProvider = ({children}) => {
    const [patientName, setPatientName] = useState();
    const [age,setAge] = useState();
    const [gender, setGender] = useState();
    const [refferdby, setRefferdBy] = useState();
    const [phone,setPhone] = useState();
    

    const updatePatientName = (params) => {
        setPatientName(params)
    }
    const updateAge = (params) => {
        setAge(params)
    }
    const updateGender = (params) => {
        setGender(params)
    }
    const updateRefferdBy = (params) => {
        setRefferdBy(params)
    }
    const updatePhone = (params) => {
        setPhone(params)
    }

    let patientData={
      
           
            patientName : patientName,
            patientAge : age,
            patientGender : gender,
            patientMobile :phone,
            referredBy : refferdby,
            patientDoB: "null",
            patientMartialStatus: "null",
            identityCard: "null",
            remarks: "null",
            patientWeight: 0,
            patientEmail: "null",
            occupation: "null",
            station: "null",
            pinCode: "null",
            address: "null",
            printTestResult: false
            };
    
    const savePatients = (e) => {
        e.preventDefault();
            axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/patients/add-patient`,patientData, )
            
            .then((res) => {
                console.log(res.data);
                setPatientName("")
                setAge("")
                setGender("")
                setRefferdBy("")
                setPhone("")

               
            })
            .catch((err) => {
                console.log(err);
            })
    }



  
    return(
        <QuickPatientContext.Provider
         value={{
            patientName,updatePatientName,
            age,updateAge,
            gender,updateGender,
            refferdby,updateRefferdBy,
            phone,updatePhone,
            savePatients,
           
         }}>{children}</QuickPatientContext.Provider>
    )
}