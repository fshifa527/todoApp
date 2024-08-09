import React, { useContext } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addTask } from '../services/allApi';
import { refreshContextApi } from '../ContextApi/RefreshContext';
import { loginContextApi } from '../ContextApi/LoginContext';

function Add() {
    const {setRefresh} = useContext(refreshContextApi)
    const {logStatus} = useContext(loginContextApi)
    const [show, setShow] = useState(false);
    const [data,setData] = useState({title:"",description:""})
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (logStatus) {
            setShow(true)
        } else {
           toast.warning("plz login....") 
        }
    }
    const handleAdd=async()=>{
        const {title,description}=data
        if (!title || !description) {
            toast.error("All fields required")
        } else {
            
            const header={
                "authorization":`bearer ${sessionStorage.getItem('token')}`,
                "content-type":"application/json"
            }
            const result = await addTask(data,header)
            if (result.status==200) {
                handleClose()
                setData({title:"",description:""})
                setRefresh(result.data)
            } else {
                
            }
            
        }
        
    }
    return (
        <div>
            <button className="btn btn-success w-100" onClick={handleShow} >
                Add a new task
            </button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add a task</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3">
                        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setData({...data,title:e.target.value})}} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="description" className='mb-3'>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            onChange={(e)=>{setData({...data,description:e.target.value})}}
                        />
                    </FloatingLabel>
                    <div className='d-flex justify-content-around'>
                    <button className="btn btn-outline-success" onClick={handleAdd}><i className='fa fa-add'></i> Add</button>
                    <button className="btn btn-outline-danger" onClick={handleClose}><i className='fa fa-cancel'></i> cancel</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Add