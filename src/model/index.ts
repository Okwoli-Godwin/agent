import mongoose, {Schema, model, connect} from "mongoose"

interface iData{
    firstname:string
    lastname:string
    email:string
    phone:string
    address:string
}

const agentsSchema = new Schema<iData>({
    firstname:{
        type:String,
        require:true
    }, 
    lastname:{
        type:String,
        require:true
    }, 
    email:{
        type:String, 
        require:true
    },
    phone:{
        type:String,
        require:true
    }, 
    address:{
        type:String,
        require:true
    }
})

 const agents = model<iData>("agentform", agentsSchema)

 export default agents