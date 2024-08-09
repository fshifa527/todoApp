import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginContextApi } from '../ContextApi/LoginContext'

function Header() {
  const { logState, setLogStatus, logStatus } = useContext(loginContextApi)
  const [username,setUsername]= useState('')

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setLogStatus(true)
      setUsername(JSON.parse(sessionStorage.getItem('User')))
    }
  }, [logStatus])
  const logout=()=>{
    setLogStatus(false)
    sessionStorage.clear()
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" ><b>To-Do-Lists </b></Link>
          {
            logState ?
              <></> :
              <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="d-flex ms-auto my-3" role="search">
                    
                    {
                      logStatus?
                      <div className='w-100 mx-3'>
                        <i className='fa fa-user'></i>
                       <span>{username.username}</span>
                        <button  className="btn btn-outline-success ms-3" onClick={logout}><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
                      </div>:
                      <Link to={'/login'} className="btn btn-outline-success" type="submit">Login</Link>
                    }
                  </div>
                </div>
              </div>
          }

        </div>
      </nav>
    </div>
  )
}

export default Header