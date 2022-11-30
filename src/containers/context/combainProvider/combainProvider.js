import React from 'react'

export const combaineComponents = (...components) => {
  return components.reduce((AccumulatedComponents, CurrentComponents) => {
    return ({children})=>{
      return(
        <AccumulatedComponents>
          <CurrentComponents>{children}</CurrentComponents>
        </AccumulatedComponents>
      )
    }
  },({children}) =><>{children}</>)
}