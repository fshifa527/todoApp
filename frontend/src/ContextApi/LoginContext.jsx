import React, { createContext, useState } from 'react'

export const loginContextApi=createContext()

function LoginContext({children}) {
    const [logState,setLogState]=useState(false)
    const [logStatus,setLogStatus]=useState(false)
  return (
    <div>
        <loginContextApi.Provider value={{logState,setLogState,logStatus,setLogStatus}}>
            {children}
        </loginContextApi.Provider>
    </div>
  )
}

export default LoginContext