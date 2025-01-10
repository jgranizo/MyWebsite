import React ,{ Component,useState, useCallback } from 'react';
import HomePage from './components/homepage';
import Blog from './components/blog';
import BlogsList from './components/blogs-list';
import AddBlog from './components/add-blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App(){
  const[
    selectedChart,
    setSelectedChart,
  ] = useState("");
  const [data,setSelectedData] = useState([])
  const handleRadioChange = (
    value
  ) => {setSelectedChart(value);};
 




  return(
   
<div>
  <BrowserRouter>
  <div>

  <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">JGranizo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/blog"}>Blog</Nav.Link>
            <Nav.Link as={NavLink} to={"/Resume"}>Resume</Nav.Link>
            <Nav.Link as={NavLink} to={"/Projects"}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
        </Routes>
  </div>
  {/**<input type='radio'
  id="option1"
  value=""
  checked={selectedChart===""} onChange={()=>handleRadioChange("")}></input>
  
  **/} 
  </BrowserRouter>
</div>

  )
}


export default App;