import axios from "axios";

class BlogDataService{
    getAll(page=0){
        return axios.get(`http://localhost:5000/?page=${page}`)
    }


    get(id){
        return axios.get(`http://localhost:5000/id/${id}`)
    }
    find(query,by = "topic", page = 0){
        return axios.get(
            `http://localhost:5000/?${by}=${query}&page=${page}`
        )
    }

    createBlog(data){
        return axios.post(`http://localhost:5000/update`, data)

    }
    updateBlog(data){
        return axios.put(`http://localhost:5000/update`,data)

    }

    deleteBlog(id){
        return axios.delete(
            `http://localhost:5000/update`,
            {data:{blogId:id}}
        )
    }

    getTopic(){
        return axios.get("http://localhost:5000/topic")
    }

}

export default new BlogDataService();
