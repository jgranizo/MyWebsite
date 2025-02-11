import axios from "axios";

class BlogDataService{
    getAll(page=0){
        return axios.get(`https://deploy-mern-api-vert.vercel.app/?page=${page}`)
    }


    get(id){
        return axios.get(`https://deploy-mern-api-vert.vercel.app/id/${id}`)
    }
    find(query,by = "topic", page = 0){
        return axios.get(
            `https://deploy-mern-api-vert.vercel.app/?${by}=${query}&page=${page}`
        )
    }

    createBlog(data){
        return axios.post(`https://deploy-mern-api-vert.vercel.app/update`, data)

    }
    updateBlog(data){
        return axios.put(`https://deploy-mern-api-vert.vercel.app/update`,data)

    }

    deleteBlog(id){
        return axios.delete(
            `https://deploy-mern-api-vert.vercel.app/update`,
            {data:{blogId:id}}
        )
    }

    getTopic(){
        return axios.get("https://deploy-mern-api-vert.vercel.app/topic")
    }

}

export default new BlogDataService();
