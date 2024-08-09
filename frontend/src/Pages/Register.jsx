import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userRegister } from '../services/allApi'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [data,setData]=useState({username:"",email:"",password:""})
  const navigate= useNavigate()
  
  const handleSubmit=async()=>{
    const {username,email,password}= data
    if (!username || !email || !password) {
      toast.error("all fields required");
    } else {
      const result = await userRegister(data)
    
      if (result.status==200) {
        toast.success(result.data)
        setData({username:"",email:"",password:""})
        navigate('/login')
      } else {
        toast.error(result.response.data)
      }  
    }
  }
  
  return (
    <>
      <div className='container-register'>
                <div className='row-register'>
                    <div className='col-register'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3456/3456388.png" className='register-img' alt="" />
                    </div>
                    <div className='col-register'>
                        <div className='col-form'>
                            <h2>Register</h2>
                            <h4>Sign up to start Account</h4>
                            <div className="form-floating mb-3">
                                <input type="text" className=" form-control" id="floatingInputUser" placeholder="username" onChange={(e)=>{setData({...data,username:e.target.value})}}/>
                                    <label htmlFor="floatingInput">Username</label>
                        
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className=" form-control" id="floatingInput" placeholder="email" onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                                    <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{setData({...data,password:e.target.value})}} autoComplete='on'/>
                                    <label htmlFor="floatingPassword" >Password</label>
                            </div>
                            <button className='btn btn-info text-white mb-3' onClick={handleSubmit}>Register</button>
                            <h6>Already have an account?<Link to={'/login'} className='login-label'>Login</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Register