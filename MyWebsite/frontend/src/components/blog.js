import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogDataService from '../services/blogs.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';



const Blog = (props) => {
    const [blog,setBlog] = useState({
        blogID:null,
        title:"",
        content:"",
        topic:"",
        date:""
    })

let {id} = useParams();
console.log(id)
const getBlog = id=>{
    BlogDataService.get(id).then(response => {
        setBlog(response.data)
        console.log(response.data)

    })
    .catch(e=>{
        console.log(e);

    }
    )
}

useEffect(()=>{
    getBlog(id)
},[id])

const deleteBlog = (id)=>{
    BlogDataService.deleteBlog(id)
    .then(response=>setBlog({
        blogId:"None",
        content:"Blog no longer exists",
        title:"",
        topic:"Deleted",
        date:""
    }
    )).catch(e=>console.log(e))
}
return (
    <div>
        <Card
          bg={"light"}
          key={"light"}
          text={ 'dark'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {!props.user && <Button variant="primary" onClick={()=>deleteBlog(blog.blogID)}>Delete</Button>}

          </Card.Body>
        </Card>
    </div>
)
}
export default Blog
