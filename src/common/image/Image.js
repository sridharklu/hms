import React from 'react'
import "../../assets/css/index.css"

const Image = ({src,className}) => {
  return (
    <div>
        <img src={src} className={className} />
    </div>
  )
}

export default Image