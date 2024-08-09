import { commonApi } from "./commonApi"
import { base_url } from "./server_url"

export const userRegister=async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data)
}
export const userLogin=async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data)
}
export const addTask=async(data,header)=>{
    return await commonApi("POST",`${base_url}/api/tasks`,data,header)
}
export const getTasks=async()=>{
    return await commonApi("GET",`${base_url}/api/tasks`,"")
}
export const getTask=async(id,header)=>{
    return await commonApi("GET",`${base_url}/api/tasks/${id}`,"",header)
}
export const deleteTask=async(id,header)=>{
    return await commonApi("DELETE",`${base_url}/api/tasks/${id}`,{},header)
}
export const searchTask=async(search)=>{
    return await commonApi("GET",`${base_url}/api/tasks_search/${search}`,"")
}
export const updateTask=async(data,id,header)=>{
    return await commonApi("PUT",`${base_url}/api/tasks/${id}`,data,header)
}