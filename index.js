




const  express=require('express')
const db=require('./Datalocation/db')
const app=express()
const cors=require('cors')
const port=8000
app.use(express.json())
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const scretey=1234

const coursOption={
origin:"*",

credentials:true,
}

const router=require('./router/auth-router')

app.use(cors(coursOption))
app.use("/app/auth",router)
app.use(cookieParser())





db().then(()=>{

  app.listen(port,()=>{

   console.log(`surver is running at port:${port}`)    

  })

})