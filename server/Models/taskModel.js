const mongoose = require('mongoose')

const taskScheme= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Not Completed"
    }
})

const tasks = mongoose.model('tasks',taskScheme)

module.exports = tasks