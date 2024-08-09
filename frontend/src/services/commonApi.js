import axios from "axios";

export const commonApi=async(reqMethod,reqUrl,reqData,reqHeaders)=>{
    const config={
        method:reqMethod,
        url:reqUrl,
        data:reqData,
        headers:reqHeaders?reqHeaders:{'content-type':"application/json"}
    }
    return await axios(config).then(res=>{return res}).catch(err=>{return err})
}