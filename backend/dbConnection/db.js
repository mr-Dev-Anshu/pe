import mongoose from "mongoose"
const dbConnection  = async () => {
   try{
    await mongoose.connect(process.env.MONGO_URI , {
          dbName:"my"
     })
     console.log ("DataBase got Connect ")
   }
   catch(e){
        console.log ("there is some problem in connection of data Base " , e) 
   }
}

export default dbConnection ;