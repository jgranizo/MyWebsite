import React ,{ Component,useState, useCallback } from 'react';
import HomePage from './components/homepage';
import Blog from './components/blog';
import BlogsList from './components/blogs-list';
import Resume from './components/resume'
import github from './components/images/github-mark.ico'
import linkedin from './components/images/linkedin.ico'
import './components/styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App(){
 


  return(
   
<div>
  <div>
<div className='navbar'>
  <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">JGranizo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/blogs"}>Blog</Nav.Link>
          <Nav.Link as={NavLink} to={"/resume"}>Resume</Nav.Link>

       </Nav>

    </Navbar>
    <div className='logos'>
    <a href="https://www.linkedin.com/in/jeremygranizo/"target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin icon' style={{height:"50px" ,width:"50px"}}></img></a>
    <a href="https://www.github.com/jgranizo/"target="_blank" rel="noopener noreferrer"><img src={github} alt='github icon' style={{height:"45px" ,width:"45px"}}></img></a>
    </div>
    </div>
    <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/resume' element={<Resume/>}/>
      
        </Routes>
  </div>
  
  </div>

  )
}


export default App;