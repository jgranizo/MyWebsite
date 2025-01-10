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
static async updateBlog(blogId,updatedContent,updatedTitle,updatedTopic,date){
    try{const updateResponse = await blogs.updateOne(
        {blogID:blogId},
{$set:{content:updatedContent,title:updatedTitle,topic:updatedTopic,CurrentDate:date}}
    )
    return updateResponse
}
catch(e){
    console.error(`unable to update review: ${e}`)
    return {error:e}
}
}

static async deleteBlog(blogId){
    try{
        const deleteResponse = await blogs.deleteOne({
            blogID:blogId
        })
        return deleteResponse
    }
    catch(e){
        console.error(`unable to delete blog post: ${e}`)
        return {error: e}
    }
}

}
