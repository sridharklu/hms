import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/index.css"
import Image from "../../assets/Image/test.jpg"
import { LoginContext } from "../context/loginContext/LoginContext";
import {GlobalVariable} from '../../common/baseUrl/baseUrl'
import axios  from "axios";
import Button from "../../common/button/Button";
import Cookies from "universal-cookie";
axios.defaults.withCredentials = true


const LoginScreen = () => {
    const {user,updateUser,password,updatePassword,handleSubmit} = useContext(LoginContext)
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({
        username: "",
        password: ""
    })

    const [loginErrMsg, setLoginErrMsg]=useState("")
    console.log("loginErrMsg",loginErrMsg);

    useEffect(()=>{
        localStorage.clear()
    },[])

    const loginBtn = (e) => {
        
        e.preventDefault();

    

        axios.defaults = Object.assign(axios.defaults, {

            withCredentials: true,
        
            baseURL: GlobalVariable.MIDDLEWARE_API_URL,
        
          });
            axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/users/login`,loginData)
            .then((res) => {
                // console.log(res.data);
            
                 // localStorage.setItem("token", res.data.data.accessToken)
                
       
                navigate("/dashboard")
            })
            .catch((err) => {
                if ( err ) {
                    // console.log(err.response.data);
                    // console.log(err.response.data.message);
                    setLoginErrMsg(err.response.data.message);
                }
            })
    }
    
    return (
        
        <div className="loginContainer">

            <div className="signinCard">
                <p>Sign In</p>
            </div>
            {/* ---------- */}
            <div className="loginCard">
                <img src={Image} alt="Logo" />

                <div className="login">
                    <div className="loginLable">
                        <p>Login to AloLab</p>
                        <hr></hr>
                    </div>

                    <div className="userBar">
                        <input
                       // onChange={(e)=>{updateUser(e.target.value)}}

                        onChange={(e) => { 
                            setloginData({ ...loginData, username: e.target.value })
                            localStorage.setItem('userName', e.target.value)
                        }}
                        // value={user}
                         placeholder={"Enter your Username"} />
                    </div>

                    <div className="passwordBar">
                        <input
                       // onChange={(e)=>{updatePassword(e.target.value)}}
                        onChange={(e) => { setloginData({ ...loginData, password: e.target.value }) }}
                        //value={password}

                        placeholder={"****"} />
                    </div>

                    <div className="checkBar">
                        <input type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <div className="msg">
                    {loginErrMsg}
                        
                    </div>

                    {/* <div className="loginBox">
                        <button type="submit" onClick={(e)=>
                            handleSubmit(e) 
                               
                            }>Login</button>
                    </div> */}

                    
                    <button className="loginBox" onClick={loginBtn}>Login</button>
                       

                  
                </div>


            </div>




        </div>
    )
}
export default LoginScreen