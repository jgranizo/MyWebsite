import app from'./server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"

async function main(){
    console.log("Starting main function...");
    dotenv.config();
    console.log("Environment variables loaded:", process.env.MYBLOG_DB_URI);
    
    const client = new mongodb.MongoClient(
        process.env.MYBLOG_DB_URI
    )
    const port = process.env.PORT || 8000
    try{
        //connect to MongoDB cluster
        console.log("Attempting to connect to MongoDB...");
await client.connect();
console.log("Connected to MongoDB");

        
        app.listen(port, ()=>{
            console.log('server is running on port:' + port);
        })
}
catch(e){
    console.error(e);
    process.exit(1)
}}
main().catch(console.error);