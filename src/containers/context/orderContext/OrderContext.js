import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const OrderContext = createContext({})

export const OrderContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [SinglePatients, setSingletestResultPatients] = useState([])
   
    


    // useEffect(() => {

    //   (async () => {
    //     await  setSingletestResultPatients(JSON.parse(window.localStorage.getItem('testorderpatients')));
        
    //   })();
     
  
    //  }, []);
  
  // useEffect(() => {
  
  //     (async () => {
  //         await  window.localStorage.setItem("testorderpatients",JSON.stringify(SinglePatients));
          
  //       })();
    
  //   }, [SinglePatients]);
   

    const updateOrders = (params) => {
        setOrders(params)
    }

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(orders.map((data) => data._id));
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
   const updateSinglePatient = async (params)=>{
    setSingletestResultPatients(params)

   }
   const updateSingleOrder = async (params)=>{
    setSingletestResultPatients(params)
   }
    
   const cancelButton = async (id) =>{
   
    Navigate("/order")
 
    document.getElementById(id).reset();

   }


  
  

    return (
        <OrderContext.Provider
            value={{
                orders,  updateOrders,
                isCheckAll,handleSelectAll,
                isCheck,handleClick,
                selectAllDelete,
                selectCount,updateSinglePatient,
                SinglePatients,updateSingleOrder,
                cancelButton
                
               

            }}
            >{children}</OrderContext.Provider>
    )
}