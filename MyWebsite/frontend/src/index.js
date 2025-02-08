import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom';
import BlogsList from './components/blogs-list';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />  {/* Default homepage */}
      <Route path="/blog" element={<BlogsList />} />  {/* Route for Blog */}
    </Routes>
  </Router>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
