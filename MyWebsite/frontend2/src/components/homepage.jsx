import profilepicture from "../assets/profilepic.jpg"
import ml from "../assets/ml.jpg"
import basketball from '../assets/basketball.jpg'
import gym from "../assets/gym.jpg"
import {  useState } from "react"
import {
  Button,
  HStack,
  useDisclosure,
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody, 
  ModalCloseButton
} from "@chakra-ui/react";


//todo: Implement Modal from chakra!
//todo:Implement selected data
function HomePage(){
  const [selectedProject, setSelectedProject] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const projects = [
    {"index":"ml","title":"Sentimental Analysis Project","description":"Collaborated on training a BERT-uncased model on 1.6 million tweets to classify sentiment (Negative, Neutral, Positive).Collaborated on training a BERT-uncased model on 1.6 million tweets to classify sentiment (Negative, Neutral, Positive). ","features":["Developed a Streamlit application to analyze sentiment trends from Reddit's API, evaluating top companies like Tesla, Microsoft, Meta, and Apple. To enhance efficiency, implemented a Python script to store fetched sentiment data, enabling faster retrieval and smoother visualization in the app.","75% accuracy on Neutral class using only 30K samples","90 F1-score across all classes (Neutral, Negative, Positive) on unseen test data","88% accuracy on Positive & Negative classes with 800K samples each"]},
    {"index":"basketball","title":"Basketball Teams REST API","description":"Built a RESTful API using Express.js & MongoDB, enabling seamless CRUD operations. The backend fetches and serves data efficiently, while the React frontend dynamically displays the information in a user-friendly format.","features":["Features: RESTful API, Database Fetching, Dynamic UI","Tech Stack: MongoDB | Express.js | React | Node.js","Focus: Backend-to-Frontend Data Flow & API Integration"]},
    {"index":"gym","title":"Gym Recommendation tracking Application","description":"This web application is designed to help users track and optimize their workout routines. Built using SQL, Apache, and PHP, the app allows users to easily record their workouts and receive personalized recommendations.",
      "features":["After a user records an exercise, the app provides personalized recommendations for their next workout session. Based on the previous lifts, the app suggests the number of reps, weight, and sets that are optimal for their progression, ensuring they challenge themselves while avoiding injury.",
        "Once users select an exercise, they can log the number of sets, repetitions, and weight used during their workout. This information is stored in a database for future reference.",
        "After a user records an exercise, the app provides personalized recommendations for their next workout session. Based on the previous lifts, the app suggests the number of reps, weight, and sets that are optimal for their progression, ensuring they challenge themselves while avoiding injury."
      ]}
  ]
  

const handleSelection= (key)=>{
    projects.forEach(element => {
      if(element["index"]===key){
        setSelectedProject(element);
      }
    });
}


   
    return(
        <div>           
    <section id="home" className="main">
      <div className="home">
        <img src={profilepicture} alt="Jeremy Granizo" className="my-photo" loading="lazy"/>
        <div className="about-me-text">
          <h1>Hi, I am Jeremy Granizo</h1>
          <h4>Software engineer Crafting Innovative Solutions: </h4>
            <h4> Leveraging Cloud, Machine Learning, and Data to Solve Real-World Problems</h4>
        </div>
      </div>
    </section>


    <section id="experience-section">

      <div className="experience-grid">
      <h2>Experience</h2>

        <div className="experience-column">
          <h3>Web Developer for Facepainting company</h3>
          <div className="experience-description">
            <p>Developed a responsive, user-friendly webpage to enhance client interaction and increase business opportunities.</p>
        
          </div>

        </div>
        <div className="experience-column">
          <h3>Fullfilment Associate for Amazon</h3>
          <div className="experience-description">
           <p>Managed a wide range of tasks in the fulfillment process, ensuring smooth operations and efficient handling of packages.</p>
         
          </div>

        </div>
        <div className="experience-column">
          <h3>Backwaiter for Tabor Road Tavern</h3>
          <div className="experience-description">
            <p>Contribute to providing exceptional service in a fast-paced, customer-focused environment while supporting the kitchen team and enhancing communication across departments.</p>
           
          </div>

        </div>
      </div>
    </section>
    <section id="blog-section">
    <div id="blogs"></div>
  </section>
  <section id="projects-section">
    <h2>My Projects</h2>
    <ul>
      <li className="logos2">
    <a href="https://linkedin.com/in/jeremygranizo" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/**<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}<path  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
    <a href="https://github.com/jgranizo" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/**<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->}*/}<path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg></a>
    </li>
    </ul>
    <ul>
      <HStack>
      <li> <Button onClick={()=>{onOpen(),handleSelection("ml")}}><img src={ml} alt="ML Project" className="project-icon rectangle-icon"/></Button></li>
      <li> <Button onClick={()=>{onOpen(),handleSelection("basketball")}}><img src={basketball} alt="Basketball API" className="project-icon circle-icon"/></Button></li>
      <li> <Button onClick={()=>{onOpen(),handleSelection("gym")}}><img src={gym} alt="3rd project showcasing" className="project-icon" id='triangle-icon'/></Button></li>
      </HStack>
    </ul>
  </section>
  
  <Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay/>
<ModalContent>
  <ModalHeader>{selectedProject.title}</ModalHeader>
  <ModalCloseButton/>
  <ModalBody pb={6}>
    {selectedProject.description}
    {console.log(selectedProject.features)}
    <ul>
      {selectedProject?.features?.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
  
    </ul>

  </ModalBody>
    <ModalFooter>
      <Button onClick={onClose}>
        Exit
      </Button>
    </ModalFooter>
 
</ModalContent>
  </Modal>

  
  
  
        </div>
  
    )
}
export default HomePage