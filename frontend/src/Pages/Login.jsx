import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { userLogin } from '../services/allApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { loginContextApi } from '../ContextApi/LoginContext'

function Login() {
    const [data,setData]=useState({email:"",password:""})
    const {setLogState,setLogStatus}= useContext(loginContextApi)
    const navigate = useNavigate()
    useEffect(()=>{
      setLogState(true)
    },[])
  
  const handleSubmit=async()=>{
    const {email,password}= data
    if (!email || !password) {
      toast.error("all fields required");
    } else {
      const result = await userLogin(data)
    console.log(result.data);
    
      if (result.status==200) {
        toast.success("login successfully")
        setData({email:"",password:""})
        setLogState(false)
        setLogStatus(true)
        sessionStorage.setItem("token",result.data.token)
        sessionStorage.setItem("User",JSON.stringify(result.data.existingUser))
        navigate('/')
      } else {
        toast.error(result.response.data)
      }  
    }
  }
    return (
        <>
            <div className='container-login'>
                <div className='row-login'>
                    <div className='col-login'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" className='login-img' alt="" />
                    </div>
                    <div className='col-login'>
                        <div className='col-form'>
                            <h2>Login</h2>
                            <h4>Sign into your Account</h4>
                            <div className="form-floating mb-3">
                                <input type="email" className=" form-control" id="floatingInput" placeholder="email" onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                                    <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{setData({...data,password:e.target.value})}}/>
                                    <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className='btn btn-info text-white mb-3' onClick={handleSubmit}>Login</button>
                            <h6>Don't have an account?<Link to={'/register'} className='register-label'>Register</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login