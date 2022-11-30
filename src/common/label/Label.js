import React from 'react'

const Label = ({label,className}) => {
  return (
    <div>
        <label className={className} >{label}</label>
    </div>
  )
}

export default Label