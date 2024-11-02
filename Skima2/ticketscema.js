




const maongse=require('mongoose')
const ens=require('dotenv').config()

const bceypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const { default: mongoose } = require('mongoose')


//skima
const candite= new maongse.Schema({

   name:{         
      type:String,
      required:true,
      },
      coise:{
       type:String,
       required:true
      },

        ticket:[{
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    },
    ticketAt:{
    
      type:Date,
      defult:Date.now()

    }  ,
     }
        ]
        ,

   ticketcount:{
      type:Number,
      default:10

   }

})

const Peraon1=maongse.model('candidate1',candite);
module.exports=Peraon1




















