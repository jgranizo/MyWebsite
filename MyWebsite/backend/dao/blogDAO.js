import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let blogs 
export default class BlogDAO{
    static async  injectDB(conn){
        if(blogs){return}

    
    try{
        blogs=await conn.db(process.env.MYBLOG_NS).collection('notes')

    }
    catch(e){
        console.error(`unable to establish connection handle in BlogDao${e}`)
    }

}



static async addBlog(blogId,content,title,topic,date){
    try{
        const blogDoc = {
            blogID:blogId,
            content,
            title,
            topic,
            CurrentDate:date
    }
    return await blogs.insertOne(blogDoc)
}
catch(e){
    console.error(`unable to post blog: ${e}`)
    return {error:e}
}

}
}