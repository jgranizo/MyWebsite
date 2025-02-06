import app from'./server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import NotesDAO from './dao/notesDAO.js';
import BlogDAO from './dao/blogDAO.js';
async function main(){
    console.log("Starting main function...");
    dotenv.config();
    
    const client = new mongodb.MongoClient(
        process.env.MYBLOG_DB_URI
    )
    const port = process.env.PORT || 8000
    try{
        //connect to MongoDB cluster
await client.connect();
await NotesDAO.injectDB(client)

await BlogDAO.injectDB(client)

        
        app.listen(port, ()=>{
            console.log('server is running on port:' + port);
        })
}
catch(e){
    console.error(e);
    process.exit(1)
}}
main().catch(console.error);