import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

 
export const LoginContext = createContext({})

export const LoginContextProvider = ({children}) => {
   
    const [user, setUser]= useState();
    const [password, setPassword]= useState();
    const [login, setLogin]=useState(false)
    
    const updateUser = (params) => {
        console.log("Enter user name",params);
        setUser(params)
    }
    const updatePassword = (params) => {
        setPassword(params)
    }
    const handleSubmit =(e)=>{
        
// set configurations
    const configuration = {
        method: "post",
        url: "http://localhost:3001/api/users/login",
        data: {
            username:user,
          password:password,
        },
      };
        

    // make the API call
    axios(configuration)
    .then((result) => {
        setLogin(true);
        
        console.log(result);
    })
    .catch((error) => {console.log(error);})
    }
    return(
        <LoginContext.Provider 
        value={{
            user,updateUser,
            password,updatePassword,handleSubmit
        }}
        >{children}</LoginContext.Provider>
    )
}