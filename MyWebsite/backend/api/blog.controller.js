import BlogDAO from '../dao/blogDAO.js'
export default class BlogController{
    static async apiPostBlog(req,res,next){
        try{
            const  blogId = req.body.blog_id
            const content=req.body.content
            const title=req.body.title;
            const topic = req.body.title;
                
            
            const date = new Date()
            const BlogResponse = await BlogDAO.addBlog(
                blogId,
                content,
                title,
                topic,
                date
            )
            res.json({status:"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    
    }

    static async apiUpdateBlog(req,res,next){
        try{
            const blogId= req.body.blog_id;
            const content= req.body.content;
            const date = new Date();
            const topic = req.body.topic;
            const BlogResponse = await BlogDAO.UpdateBlog(
                blogId,
                content,
                topic,
                date
            )
            var {error} = BlogResponse
            if(error){
                res.status.json({error})
            }
            if(BlogResponse.modifiedCount===0){
                throw new Error ("unable to update Blog")
            }
            res.json({status:"success"})

        }catch(e){res.status(500).json({error:e.message})
    }
}


static async apiDeleteBlog(req,res,next){
    try{
        const blogId=req.body.blog_id
        const reviewResponse = await BlogDAO.deleteBlog(
            blogId
        )
        res.json({status:"success"})
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}
}