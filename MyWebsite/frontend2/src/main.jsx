import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { ChakraProvider } from "@chakra-ui/react"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
    
   )
