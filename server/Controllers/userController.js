const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')

exports.userRegister=async(req,res)=>{
    console.log(req.body);
    const {username,email,password}=req.body
    const hashedPassword = bcrypt.hashSync(password,10)
    try {
        const existingUser = await users.findOne({email})
        if (existingUser) {
            res.status(406).json('user already exist')
        } else {
            const newUser = new users({
                username,password:hashedPassword,email
            })
            await newUser.save()
            res.status(200).json("Registered Successfully")
        }
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

exports.userLogin = async(req,res)=>{
    const {email,password} =req.body
    try {
        const existingUser=await users.findOne({email})
        if (existingUser) {
            const comparePassword = bcrypt.compareSync(password,existingUser.password)
            if (!comparePassword) {
                res.status(406).json("incorrect password")
            } else {  
                const token = jwt.sign({userId:existingUser._id},process.env.secretkey)
                res.status(200).json({token,existingUser})
            }
        } else {
            res.status(406).json('incorrect email or password')
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

