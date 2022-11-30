import { createContext, useState } from "react";
export const OrderBillingContext = createContext({})


export const OrderBillingContextProvider = ({ children }) => {
    const [alllabtests, setAlllabtests]=useState([])
    const [typedvalue,setTypedvalue]=useState([])
    const [selectetestName,setSelectedtestName]=useState()

    console.log(selectetestName,"selectetestName");



    const updateLabtests =(params)=>{
        setAlllabtests(params)
    }
    const updateTypedtestName =(params)=>{
        setTypedvalue(params)
     }
     const selectedtestName = async (params)=>{
        // setTotalAmount(params.rate);
        setSelectedtestName(params)
    } 


    return (
        <OrderBillingContext.Provider
            value={{
              
                
                typedvalue, updateTypedtestName,
                alllabtests,updateLabtests,
                selectetestName,selectedtestName
            }}
            >{children}</OrderBillingContext.Provider>
    )

}