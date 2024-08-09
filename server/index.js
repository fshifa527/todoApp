require('dotenv').config()
const express = require('express')
const cors =require('cors')
require('./database/connection')
const router=require('./Router/route')

const port=3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log("server running at port 3000");
    
})