import React, {useState, useEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import BlogDataService from "../services/blogs";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
//TODO
const AddBlog = (props) => {
    const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("")
  const [submitted, setSubmitted] = useState(false)
  
  

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeTopic = (e) => setTopic(e.target.value);
    const onChangeContent = (e) => setContent(e.target.value);


    const saveBlog = () => {
        var data = {
            title,
            content,
            topic
        }
        BlogDataService.createBlog(data).then(response=>{
            setSubmitted(true)
        }).catch(e =>{})
    }
   
    return(
        <div>
            {submitted ? (
                <div>
                    <h5>Blog submitted successfully</h5>
                    #TODO: Add correct id for new blog posted
                    <Link to={"/blogs/:id"}>Check new blog</Link>
                </div>
            )
            :
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"  required
        value={title} onChange={onChangeTitle}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>topic</Form.Label>
          <Form.Control type="text"
          required
        value={topic} onChange={onChangeTopic} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} required
        value={content} onChange={onChangeContent} />
        </Form.Group>
        <Button variant="primary" onClick={saveBlog} >
          Submit
        </Button>
      </Form>}
      </div>
      )
}
export default AddBlog;
