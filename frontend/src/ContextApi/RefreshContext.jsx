import React, { createContext, useState } from 'react'

export const refreshContextApi = createContext()

function RefreshContext({children}) {
    const [refresh,setRefresh] = useState('')
  return (
    <div>
        <refreshContextApi.Provider value={{refresh,setRefresh}}>
            {children}
        </refreshContextApi.Provider>
    </div>
  )
}

export default RefreshContext