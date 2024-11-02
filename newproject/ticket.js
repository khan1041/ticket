

const bceypt=require('bcryptjs')
const User=require('../Skima/Peraon')
const jwt=require('jsonwebtoken')
const { response } = require('express')
const productfind=require('../product.json')


//----regisister

const register=async(req,res)=>{

    try {
        const {username,password,email,ticket}=req.body

        const dataidntify=await User.findOne({email})
        
        if(dataidntify){
        
         return res.status(200).json({msg:"User exits"})
        }
        
        const user=await User.create({
         
          username,password,email,ticket
        
        })
        
        res.status(201).json({msg:user, token:await user.generateToken(), userId:user._id.toString})
    

        
    } catch (error) {
        console.log(error)
        
    }
}


//---login


const login=async(req,res)=>{

    try {
      const{email,password}=req.body
    
      const loginuser=await User.findOne({email})
      if(!loginuser){
        return res.status(400).json({msg:"login failed"})
       }
       const user=await bceypt.compare(password,loginuser.password)
    if(user){
     
  
      return res.status(200).json({msg:"success",token:await loginuser.generateToken()})
    }
     
      else{
   
      res.status(400).json({msg:"sory"})
    }
   
      }
      catch (error) {
    
  console.log(error)
  
    }
  }
  






//---user profile

const myprofile=async(req,res)=>{
    try {
        const userp=req.user
        console.log(userp)

        res.status(200).json({msg:userp})
    } catch (error) {
        
    }
}


module.exports={register,login, myprofile}












