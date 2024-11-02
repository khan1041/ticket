
const User=require('../Skima/Peraon')
const Candidate=require('../Skima2/ticketscema')
const jwt=require('jsonwebtoken')
//const { generateToken } = require('../mideleware/Auth-midelware')
const { response } = require('express')
const router = require('../router/auth-router')
const { trusted } = require('mongoose')
const { count } = require('../constralers/control-auth')



//----ticket handel//--


const tickethandel=async(req,res)=>{
    try {
    //admin chak and candidate add 
     const data=req.body
      const newCandidate=new Candidate(data)
     const responsevie=await newCandidate.save()
   console.log("save data")
      res.status(200).json({msg:"done now",responsevie})
 
 
    } catch (error) {
      console.log(error)
      
    }
  } 





//---ticket Management//

const tiketmanage=async(req,res)=>{
    ticketId=req.params.ticketId
    userId=req.user.id

try {

const ticket=await Candidate.findById(ticketId)

  if(!ticket){
    return res.status(400).json({msg:"sorry id not found "})
    
  }
const userbok=await User.findById(userId)

if(!userbok){
  return res.status(404).json({msg:"user not found"})
  }

if(userbok.isticket){

  return res.status(400).json({msg:"You bought the ticket",})
  
}
userbok.isticket=true

ticket.ticket.push({user:userId})
ticket.ticketcount--
if(ticket.ticketcount<0){

   return res.status(200).json({msg:"Tickets are now sold out"})
}

await  userbok.save()
await ticket.save()
res.status(200).json({msg:"sccessfully"})
} catch (error) {
    console.log(error)
    
}}
   




//----cheak ticket 

const cheaktecket=async(req,res)=>{
try {
  const ticketchak=await Candidate.find().sort({ticketcount:"desc"})
  const maping=ticketchak.map((item)=>{
  return{
    counter:item.coise,
    count:item.ticketcount}
  })
  return res.status(200).json({msg:maping})
} catch (error) {
  console.log(error)
}}
 
module.exports={tickethandel,tiketmanage,cheaktecket}

