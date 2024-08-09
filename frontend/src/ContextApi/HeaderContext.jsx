import React, { createContext, useContext, useEffect, useState } from 'react'
import { loginContextApi } from './LoginContext'

export const headerContextApi = createContext()
function HeaderContext({children}) {
    const [header,setHeader]= useState('')
    const {logStatus}=useContext(loginContextApi)
    useEffect(()=>{
        const head={
            "authorization":`bearer ${sessionStorage.getItem('token')}`,
            "content-type":"application/json"
        }
        setHeader(head)
    },[logStatus])
  return (
    <>
       <headerContextApi.Provider value={{header}}>
        {children}
        </headerContextApi.Provider> 
    </>
  )
}

export default HeaderContext