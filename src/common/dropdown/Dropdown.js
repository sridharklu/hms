import React from 'react'
import "../../assets/css/index.css"

const Dropdown = ({className,placeholder,value,icon}) => {
  console.log("value",value);
  
  return (
    <div>
      {/* <p className={className} placeholder={placeholder} icon={icon}>{value}</p> */}
  <select className={className} placeholder={placeholder} icon={icon}>
  <option value= "logout"> {value}</option>
  <option value= "logout"> logout</option>
  {/* {value.map((data,index) => ( 
    <option value={data.value}>{data.value}</option>
    ))} */}
  </select>
        </div>
  )
}

export default Dropdown