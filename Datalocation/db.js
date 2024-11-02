


const mongoose=require('mongoose')


const uri="mongodb+srv://skkhan:TJrdQKLuUAbb3tsF@cluster1.dbbql.mongodb.net/world3 "

const conectedDb=async ()=>{

    try {
        await mongoose.connect(uri)
        console.log("conceted done to db")
    } catch (error) {
        console.error("database connected faill")
        process.exit(0)
    }

}

 module.exports=conectedDb
