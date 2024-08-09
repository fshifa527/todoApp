const jwt = require('jsonwebtoken')
const jwtMiddleware =(req,res,next)=>{
    try {
        const token =req.headers.authorization.split(" ")[1]
        if (token) {
            const result = jwt.verify(token,process.env.secretkey)
            // console.log(result);
            req.payload = result.userId
            next()  
        } else {
           res.status(406).json("please login") 
        }
        
    } catch (error) {
       console.log(error);
       res.status(406).json("plz login first") 
    }
    
}

module.exports = jwtMiddleware