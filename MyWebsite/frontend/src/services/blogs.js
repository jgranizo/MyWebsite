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

    createReview(data){
        return axios.post(`http://localhost:5000/api/v1/blogs/update`, data)

    }
    updateReview(data){
        return axios.put(`http://localhost:5000/api/v1/blogs/update`,data)

    }

    deleteReview(id){
        return axios.delete(
            `http://localhost:5000/api/v1/blogs/update`,
            {data:{blogID:id}}
        )
    }

    getTopic(){
        return axios.get("http://localhost:5000/api/v1/blogs/topic")
    }

}

export default new BlogDataService();
