
const jwt=require('jsonwebtoken')

const Peraon=require('../Skima/Peraon')

const authmidelw=async(req,res,next)=>{
const token=req.header("Authorization")

if(!token){
  return res.status(401).json({msg:"not massage token"})
}
console.log("token form middleware",token)

const jwtToken=token.replace("Bearer","").trim()
console.log("toke form",jwtToken)


try {

  const isveryfy=jwt.verify(jwtToken,process.env.JWT_SECRECT_KEY) 
  const userData= await Peraon.findOne({email:isveryfy.email}).select({password:0})

  console.log(isveryfy)
 

  req.user=userData
  req.token=token
  req.userID=userData._id
 
   next()
} catch (error) {
 console.log(error)
}



}

module.exports={authmidelw}



// const jwt=require('jsonwebtoken')

// const Peraon=require('../Skima/Peraon')

// const authmidelw=async(req,res,next)=>{
// const token=req.header("Authorization")

// if(!token){
//   return res.status(401).json({msg:"not massage"})
// }

// const jwtToken=token.replace("Bearer","").trim()
// console.log("toke form",jwtToken)

// try {

//   const isveryfy=jwt.verify(jwtToken,process.env.JWT_SECRECT_KEY) 
//   const userData= await Peraon.findOne({email:isveryfy.email}).select({password:0})
//   console.log(isveryfy)

//   req.userID=userData.id

//   next()
// } catch (error) {
//  console.log(error)
// }



// }

// module.exports={authmidelw}


