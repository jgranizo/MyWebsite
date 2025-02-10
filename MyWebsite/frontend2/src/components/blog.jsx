import  {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import BlogDataService from '../services/blogs'
import Card from 'react-bootstrap/Card';



const Blog = () => {
    const [blog,setBlog] = useState({
        blogID:null,
        title:"",
        content:"",
        topic:"",
        CurrentDate:""
    })

let {id} = useParams();
console.log(id)
const getBlog = id=>{
    BlogDataService.get(id).then(response => {
        const options = {
            weekday: 'long', // Optional: to get the full weekday name
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'America/New_York', // Eastern Time Zone
            hour12: true // Use 12-hour format (AM/PM)
          };
          
        const dateObj = new Date(response.data.CurrentDate);
        const formattedDateTimeET = new Intl.DateTimeFormat('en-US', options).format(dateObj);
        setBlog({blogID:response.data.blogID,
            title:response.data.title,
            content:response.data.content,
            topic:response.data.topic,
            CurrentDate:formattedDateTimeET
        })
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


return (
    <div>
        <Card
          bg={"light"}
          key={"light"}
          text={ 'dark'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Topic: {blog.topic}</Card.Header>
          <Card.Body>
            <Card.Title>{blog.title} </Card.Title>
            <Card.Text>
              {blog.content}
            </Card.Text>
            <Card.Footer>Created on: {blog.CurrentDate}</Card.Footer>
          </Card.Body>
        </Card>
    </div>
)
}
export default Blog
