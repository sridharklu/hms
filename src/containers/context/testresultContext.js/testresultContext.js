import { createContext, useState } from "react";
import axios from "axios";

export const TestresultContext = createContext({})

export const TestresultContextProvider = ({ children }) => {
    const [testresult, setTestresult] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
   


    const updatetestresult = (params) => {
        setTestresult(params)
    }

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(testresult.map((data) => data._id));
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
    


  
  

    return (
        <TestresultContext.Provider
            value={{
                testresult,  updatetestresult,
                isCheckAll,handleSelectAll,
                isCheck,handleClick,
                selectAllDelete,
                selectCount
               

            }}
            >{children}</TestresultContext.Provider>
    )
}