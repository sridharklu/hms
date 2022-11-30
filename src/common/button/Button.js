import React from 'react'
import "../../assets/css/index.css"

const Button = ({className, label,icon,onClick, disabled}) => {
  return (
    <div>
          <button className={className} onClick={onClick}>
          <i>{icon} </i> {label} {disabled}
          </button>
    </div>
  )
}

export default Button