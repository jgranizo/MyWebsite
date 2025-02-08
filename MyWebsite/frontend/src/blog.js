import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogsList from './components/blogs-list';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('blog'); // Get the element with id 'blog'
console.log('waiting')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<BlogsList />); // Render the Blog component inside the div with id 'blog'
  console.log('waiting')
}
else{
    console.log("failed")
}