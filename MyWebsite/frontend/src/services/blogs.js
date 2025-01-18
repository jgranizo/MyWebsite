import axios from "axios";

class BlogDataService{
    getAll(page=0){
        return axios.get(`http://localhost:5000/api/v1/blogs?page=${page}`)
    }


    get(id){
        return axios.get(`http://localhost:5000/api/v1/blogs/id/${id}`)
    }
    find(query,by = "topic", page = 0){
        return axios.get(
            `http://localhost:5000/api/v1/blogs?${by}=${query}&page=${page}`
        )
    }

    createBlog(data){
        return axios.post(`http://localhost:5000/api/v1/blogs/update`, data)

    }
    updateBlog(data){
        return axios.put(`http://localhost:5000/api/v1/blogs/update`,data)

    }

    deleteBlog(id){
        return axios.delete(
            `http://localhost:5000/api/v1/blogs/update`,
            {data:{blogId:id}}
        )
    }

    getTopic(){
        return axios.get("http://localhost:5000/api/v1/blogs/topic")
    }

}

export default new BlogDataService();
