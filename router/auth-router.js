


const express=require('express')

const router=express.Router()
//const jwt=require('../mideleware/Auth-midelware')
// const control1=require('../constralers/control-auth')
// const control=require('../constrolar/auth-controlar')
 const {authmidelw}=require("../mideleware/Auth-midelware")
const ticket=require("../newproject/ticket")
const tickethandel=require('../newproject/tickethandel')

router.route("/rege").post(ticket.register)
router.route("/login").post(ticket.login)
router.route("/pro").get(authmidelw,ticket.myprofile)
router.route('/coun').post(tickethandel.tickethandel)
router.route('/manage/:ticketId').post( authmidelw,tickethandel.tiketmanage)
router.route('/ceak').get(tickethandel.cheaktecket)
 //user crate
module.exports=router
