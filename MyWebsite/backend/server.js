import express from 'express'
import cors from 'cors'
import notes from './api/notes.route.js'
import dotenv from "dotenv";
dotenv.config()
const app = express()
dotenv.config()
app.use(cors( {origin:["https://jeremygranizo.vercel.app","https://jeremygranizo.tech","https://www.jeremygranizo.tech"],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))
/**enables JSON parsing middleware to enable the server to read and accept JSON in a request's
 * body
 * middle ware helps data retrieval tremendously
 */ 
app.use(express.json()) 

app.use("/",notes)
/**For non routes, return 404 error */
app.use('*',(req,res)=>{
    res.status(404).json({error:"not found"})
})
 
export default app;