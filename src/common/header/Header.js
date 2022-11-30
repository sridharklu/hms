import  { React, useEffect, useRef}from "react";
import "../../assets/css/header.css"
import { Nav, NavDropdown } from 'react-bootstrap'
import Dropdown from "../dropdown/Dropdown";
import Input from "../input/Input";
import {MdOutlinePerson, MdPlusOne} from "react-icons/md"
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {GlobalVariable} from '../../common/baseUrl/baseUrl'
axios.defaults.withCredentials = true


const Header = () => {

  const navigate = useNavigate();
  const logoutTimerIdRef = useRef(null);
  // const logoutUser =()=>{
  //   localStorage.clear();

  //     navigate("/")
  // }
  // useEffect(() => {
  //   const autoLogout = () => {
  //     if (document.visibilityState === 'hidden') {
  //       const timeOutId = window.setTimeout(logoutUser,/*12 * 60 *60 * 1000*/3000000);
  //       logoutTimerIdRef.current = timeOutId;
  //     } else {
  //       window.clearTimeout(logoutTimerIdRef.current);
  //     }
  //   }
  //   document.addEventListener('visibilitychange', autoLogout);
  //   return () => {
  //     document.removeEventListener('visibilitychange', autoLogout);
  //   };
  // }, []);
 
  // function logout(){
  //   localStorage.clear();


  // }

  const logoutUser =(e)=>{
    
    e.preventDefault();
            axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/users/logout`)
            .then((res) => {
                 console.log(res.data);
            
            })
            .catch((err) => {
                if ( err ) {
                    // console.log(err.response.data);
                   console.log(err.response.data.message);
                  
                }
            })
  }

  const UserName = localStorage.getItem('userName')
 
  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <div className="inputContainer">
        <Button className="add-icon" icon={<MdPlusOne/>}/>
          <Input className="search" placeholder=" Search Patients..." type="text" />
        </div>
      </div>
      <div className="flex-item-right">
    <MdOutlinePerson size={20} />
    <Nav>
      <NavDropdown title={UserName} >
        <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        {/* <Dropdown className="input-general" placeholder="SMS" value={UserName} /> */}
      </div>
    </div>
  );
};

export default Header;
