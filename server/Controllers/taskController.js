const tasks= require('../Models/taskModel')

exports.createTasks=async(req,res)=>{
    const userId= req.payload
    const {title,description} = req.body
    try {
        const newTask = new tasks({title,description,userId})
        await newTask.save()
        res.status(200).json(newTask)
    } catch (error) {
        
        res.status(404).json(err.message)
    }
}
exports.getTasks=async(req,res)=>{
    try {
        const result = await tasks.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(err.message)
    }
}

exports.getTask=async(req,res)=>{
    try {
        const {id}= req.params
        const result = await tasks.findById({_id:id}).populate('userId')
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(err.message)
    }
}
exports.updateTask=async(req,res)=>{
    try {
        const {id}= req.params
        const {userId} = req.payload
        const {title,description,status}=req.body
        const result = await tasks.findByIdAndUpdate({_id:id},{title,description,status,userId},{new:true})
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(err.message)
    }
}
exports.deleteTask=async(req,res)=>{
    try {
        const {id}= req.params
        const result = await tasks.findByIdAndDelete({_id:id})
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(err.message)
    }
}

exports.searchTask =async(req,res)=>{
    const {search}=req.params
    try {
        const query = {
            title:{$regex:search,$options:"i"}
        }
        const result = await tasks.find(query)
        if (result) {
            res.status(200).json(result)
        } else {
            result.status(401).json("no users")
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}