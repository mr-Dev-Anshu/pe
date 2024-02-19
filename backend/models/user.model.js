import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt" ;
  const userSchema = new Schema ({
      email : {
         type:String,
         required:true ,
         unique : true 
      } ,
      password: {
          type:String ,
          required:true ,
          unique : true 
      }
  })

    userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) return next() ;
        try{
             this.password =  await  bcrypt.hash(this.password , 10 ) ;
             console.log ("password  has been hashed  ");
        }
        catch (error) {
             console.log ( " password din't get hashed " , error )
        }
    })

 export    const User = mongoose.model("User" , userSchema) ; 

     