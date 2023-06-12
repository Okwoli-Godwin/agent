import express, { Application, Response, Request } from "express";
import mongodb from "mongodb"

import create from "../src/router/router"
import mongoose , {ConnectOptions} from "mongoose"
import Cors from "cors"
import dotenv from 'dotenv';
 const port:any = process.env.PORT || 3033;
 dotenv.config();
 const dbHost:any = process.env.MONGO_URL
// const url = "mongodb+srv://agentform:agentform@cluster0.crjcqgg.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(dbHost);
  
      console.log("Connected to the database.")
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  connectDB()


const app: Application = express();
app.use(express.json())
app.use(Cors())
app.use("/api/agents",create )
app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      message: "API READY FOR DIRTY ONLINE PROJECT",
    });
  });``


app.listen(port, ()=>{
    console.log("server started")
})