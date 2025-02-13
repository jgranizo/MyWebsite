import {useState,useEffect} from "react";
import BlogDataService from "../services/blogs"
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogsList = ()=>{
    const [blogs, setBlogs] = useState([]);
   // const [searchTopic, setSearchTopic] = useState("");


    useEffect(()=>{
        retrieveBlogs();
    },[])

    const retrieveBlogs = () =>{
        BlogDataService.getAll().then((response)=>{
            console.log(response.data);
            setBlogs(response.data.notes)
        })
        .catch((e)=>{
            console.log(e);
        });
    };

   /**  const find = (query, by) =>{
        BlogDataService.find(query, by)
        .then(response => {console.log(response.data)
            setBlogs(response.data.notes)
        })
        .catch(e =>{
            console.log(e)
        })}
        const findByTopic = () =>{
           find(searchTopic,"topic")
        }
        const onChangeSearchTopic = (e) => {
            const searchTopic = e.target.value
            setSearchTopic(searchTopic);
        }; */
        return (
           
            <div className="App">
                 {console.log("hello")}
                <Container>
                    <Form>
                        <Row>
                            <Col>
                            { /**  <Form.Group>
                             <Form.Control
                                type="text"
                                placeholder="Search by topic"
                                value={searchTopic}
                                onChange={onChangeSearchTopic}
                                />
                                </Form.Group>
                                <Button 
                                variant="primary"
                                type="button"
                                onClick={findByTopic}
                                >Search
                                </Button>*/}
                               
                                </Col>
                        </Row>
                    </Form>
                    <Row>
                        {blogs.map((blog)=>{
                            return (
                                <Card key={blog.blogID}>
      <Card.Header>Topic: {blog.topic}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p><Link to={"/blog/"+blog.blogID}>{blog.title}</Link></p>
          <footer className="blockquote-footer">
            <cite>J Granizo</cite>
            
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }


export default BlogsList;