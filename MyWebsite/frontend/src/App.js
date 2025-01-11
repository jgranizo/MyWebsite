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
  Link,
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './components/login';
function App(){
  const [user,setUser] = React.useState(null)
  async function login(user=null){
    setUser(user)
  }

async function logout(){
  setUser(null)
}

  return(
   
<div>
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
            <Nav.Link>{user ? (<a onClick={logout}>Logout User</a>):
            (<Link to={"/login"}>Login</Link>)}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Routes>


          <Route path='/' element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blogs/:id" element={<Blog user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/blogs/update" element={<AddBlog user={user} />} />
      
        </Routes>
  </div>
  {/**<input type='radio'
  id="option1"
  value=""
  checked={selectedChart===""} onChange={()=>handleRadioChange("")}></input>
  
  **/} 
  </div>

  )
}


export default App;