import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header'


function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='' element={<Dashboard/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
