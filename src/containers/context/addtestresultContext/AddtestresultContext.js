import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { GlobalVariable } from "../../../common/baseUrl/baseUrl";
import { Navigate } from "react-router-dom";

export const AddtestresultContext = createContext({})

export const AddtestresultContextProvider = ({ children }) => {
    const [ordersList, setordersList] = useState([])
   const[testResult, settestResult] =useState(ordersList)
   const [isCheckAll, setIsCheckAll] = useState(false);
   const [isCheck, setIsCheck] = useState([]);
   const [orderdGroupName, setorderGroupName] = useState()
  

   console.log(ordersList,"ordersList");
   console.log(orderdGroupName,"group name in cntext udate");
   

   
//    useEffect(() => {

//     (async () => {
//       await  setordersList(JSON.parse(window.localStorage.getItem('addtestresult')));
      
//     })();
   

//    }, []);

// useEffect(() => {

  
  
//   }, [ordersList]);


      
   const updatedetestResult= (e, index, name)=>{

    // console.log(e, index );


    const newState = [...testResult];
    newState[index] = {
      ...newState[index],
      [name ]: e 
    };


  

    settestResult(newState);

    console.log(newState);
    //settestResult(params)
   }
   const orderslist = async (params)=>{

   setordersList(params)

  

  
      window.localStorage.setItem("addtestresult",JSON.stringify(params));
    


  
    setordersList(JSON.parse(window.localStorage.getItem('addtestresult')));
    
 
    
   }

   const orderGroupName = (params)=>{
        setorderGroupName(params[0])
     
   }

const saveTestresult = (SinglePatients) => {

    let testResultData={

        OrderCode: SinglePatients.orderCode,
        PatientCode: SinglePatients.patientCode,
        patientName: SinglePatients.patientName,
        patientAge: SinglePatients.patientAge,
        billAmount: SinglePatients.billAmount,
        totalAmount: SinglePatients.totalAmount,
        paidAmount: SinglePatients.paidAmount,
        testName: SinglePatients.testName,
        testCode: SinglePatients.testCode,
        testResult:testResult

        
        };

        let testResultstatusData ={
        
            find: {
                "orderCode": SinglePatients.orderCode,
            },
            update: {
                "status": true
            }
        };
    
        axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/testresult/add-testresult`,testResultData, )
       
        .then((res) => {
            console.log(res.data);
            
            // window.location.reload()
            // Navigate("/order")
        })
        .catch((err) => {
            console.log(err);
        })


        axios.put(`${GlobalVariable.MIDDLEWARE_API_URL}/orders/update-status`,
        testResultstatusData )
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
}
   



    
 const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    //setIsCheck(SinglePatients.map((data) => data._id));
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
    
 



    return (
        <AddtestresultContext.Provider
            value={{
                saveTestresult,
                updatedetestResult,testResult,
                handleSelectAll,isCheckAll,handleClick,
                ordersList, orderslist,
                orderGroupName,orderdGroupName
            }}
            >{children}</AddtestresultContext.Provider>
    )
}