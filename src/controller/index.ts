import express, {Response, Request, NextFunction} from "express"
import {AsyncHandler} from "../utils/asyncHandler"
import agents from "../model/index"



interface iData{
    firstname:string
    lastname:string
    email:string
    phone:string
    address:string
}

export const registeragent = AsyncHandler(async(req:Request, res:Response)=>{
    // const {firstname,lastname,email,phone,address} = req.body
try {
    const register = await agents.create(req.body)
    res.status(200).json({
        messgae:"craeted",
        data:register
    }) 
} catch (error) {
 console.log(error)   
}
   

})

export const getAll =async(req:Request, res:Response)=>{

    try {
        const agent = await agents.find()

res.status(200).json({
    messgae:"agents",
    data:agent
})
    } catch (error) {
        console.log(error)
    }

}

