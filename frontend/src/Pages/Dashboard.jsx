import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import Add from '../Components/Add'
import ViewTask from '../Components/ViewTask'
import { getTasks } from '../services/allApi'
import { refreshContextApi } from '../ContextApi/RefreshContext'
// import { searchTask } from '../../../server/Controllers/taskController'
import { searchTask } from '../services/allApi'

function Dashboard() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const {refresh} = useContext(refreshContextApi)
  useEffect(() => {
    getData()
  }, [refresh])
  useEffect(() => {
    getSearch()
  }, [search])

  const getData = async () => {
    const result = await getTasks()
    if (result.status == 200) {
      setData(result.data)
    } else {
      console.log(result.response.data);
    }
  }

  const getSearch=async()=>{
    if (search) {
      const result=await searchTask (search)
      setData(result.data)
      
    } else {
      getData()
      
    }
   
    
  }
  return (
    <>
      <div className='container-main mt-5'>
        <div className='row-container'>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}} />
          <div className='add-button'>

            <Add />
          </div>
        </div>
        <div className='row m-2'>
          {
            data?.length > 0 ?
              data.map(item => (
                <div className="card" key={item._id}>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.status}</p>
                    <div className='button-group'>
                      <ViewTask id={item._id} />
                    </div>

                  </div>
                </div>
              ))
              :
              <p>No tasks</p>
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard