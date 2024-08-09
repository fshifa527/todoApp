const mongoose = require('mongoose')
// const connectionString = process.env.connectionString

mongoose.connect("mongodb+srv://fathimashifam27:1234@cluster0.xvdrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected successfull")
}).catch(err=>{console.log(err)})