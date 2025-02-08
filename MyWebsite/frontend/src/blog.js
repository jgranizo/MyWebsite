import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogsList from './components/blogs-list';

ReactDOM.render(
  <React.StrictMode>
    <BlogsList />
  </React.StrictMode>,
  document.getElementById('blog')  // Mounts to #blog-root in blog.html
);