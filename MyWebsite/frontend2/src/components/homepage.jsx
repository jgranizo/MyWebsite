import profilepicture from "../assets/profilepic.jpg"
import ml from "../assets/ml.jpg"
import basketball from '../assets/basketball.jpg'
function HomePage(){

   
    return(
        <div>           
    <section id="home" className="main">
      <div className="intro-container">
        <img src={profilepicture} alt="Jeremy Granizo" className="my-photo" loading="lazy"/>
        <div className="about-me-text">
          <h1>Hi, I am Jeremy Granizo</h1>
          <h4>Software engineer with a passion in helping others reach their goal</h4>
            <h4>Machine Learning & Data Mining Enthusiast – Skilled in supervised, unsupervised learning</h4>
        </div>
      </div>
    </section>


    <section id="experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        <div className="experience-column">
          <h3>Web Developer for Facepainting company</h3>
          <div className="experience-description">
            <h4>Developed a responsive, user-friendly webpage to enhance client interaction and increase business opportunities.</h4>
        <ul>
            <li> Technologies used: React, Google Sheets API, Netlify</li> 
           <li> Designed and implemented a Contact Me form that allows users to send inquiries and directly stores details in a Google Sheet.</li> 
            <li>Integrated an email notification system to alert the client when a new inquiry is received</li> 
            <li>The launch of the website resulted in a 30% increase in client acquisition due to improved online presence and accessibility.</li> 
          </ul>
          </div>

        </div>
        <div className="experience-column">
          <h3>Fullfilment Associate for Amazon</h3>
          <div className="experience-description">
           <h4>Managed a wide range of tasks in the fulfillment process, ensuring smooth operations and efficient handling of packages.</h4>
           <ul>
            <li>Moved packages from trucks to conveyor belts and transitioned them through the process until they were ready for scanning and shipping.</li>
              <li>Utilized Amazon’s services to close and open containers, ensuring accurate scanning and loading into trucks for delivery.</li>
              <li>Coordinated and handed out tasks to the Returns Team, providing support by ensuring they had the necessary tools and assisting with computer systems for efficient returns processing.</li>
              <li>Fostered a collaborative work environment by offering guidance and ensuring seamless communication across departments.</li>
           </ul>
          </div>

        </div>
        <div className="experience-column">
          <h3>Backwaiter for Tabor Road Tavern</h3>
          <div className="experience-description">
            <h4>Contribut to providing exceptional service in a fast-paced, customer-focused environment while supporting the kitchen team and enhancing communication across departments.</h4>
            <ul>
              <li>Developed outstanding communication skills by coordinating between customers, servers, and the kitchen to ensure seamless service.</li>
              <li>Demonstrate strong teamwork abilities by assisting colleagues in various tasks, ensuring smooth operations during high-volume periods.</li>
              <li>Deliver top-tier customer service, addressing customer needs and providing a positive dining experience, leading to increased customer satisfaction.</li>
              <li>Gainingleadership experience by taking on responsibilities in the kitchen, ensuring timely food preparation and order accuracy.</li>
              <li>Assist in maintaining kitchen organization and cleanliness, supporting the kitchen team to improve overall efficiency.</li>
            </ul>
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
      <li> <img src={ml} alt="ML Project" className="project-icon rectangle-icon"/></li>
      <li> <img src={basketball} alt="Basketball API" className="project-icon circle-icon"/></li>
      <li> <img src="images/" alt="3rd project showcasing" className="project-icon" id='triangle-icon'/></li>
    </ul>
  </section>

  <div id="sentimental-analysis-modal" className="modal">
    <div className="modal-content">
      <span className="close">&times;</span>
      <div className="modal-body">
        <img src={ml} alt="ML project" className="modal-image"/>
        <div className="modal-text">
          <h3>Sentimental Analysis project</h3>
          <p>Collaborated on training a BERT-uncased model on 1.6 million tweets to classify sentiment (Negative, Neutral, Positive).Collaborated on training a BERT-uncased model on 1.6 million tweets to classify sentiment (Negative, Neutral, Positive). Achieved:</p>
            <ul>
              <li>75% accuracy on Neutral class using only 30K samples</li>
              <li>88% accuracy on Positive & Negative classes with 800K samples each</li>
              <li>90 F1-score across all classes (Neutral, Negative, Positive) on unseen test data</li>
            </ul>
            <p>Developed a Streamlit application to analyze sentiment trends from Reddit&apos;s API, evaluating top companies like Tesla, Microsoft, Meta, and Apple. To enhance efficiency, implemented a Python script to store fetched sentiment data, enabling faster retrieval and smoother visualization in the app.</p>
            <ul><li>Tech Stack: Python | BERT | PyTorch | Hugging Face | Streamlit | Reddit API | Pandas</li>
          <li>Focus: NLP Model Training, Sentiment Analysis, Data Storage & Retrieval</li></ul>
        </div>
      </div>
    </div>
  </div>
  <div id="Basketball REST-API" className="modal">
    <div className="modal-content">
      <span className="close" id="api-close">&times;</span>
      <div className="modal-body">
        <img src={basketball} alt="Basketball-REST-API" className="modal-image"/> 
        <div className="modal-text">
          <h3>Basketball Teams REST API</h3>
          <p>Built a RESTful API using Express.js & MongoDB, enabling seamless CRUD operations. The backend fetches and serves data efficiently, while the React frontend dynamically displays the information in a user-friendly format. The key features of this project:</p>
        <ul>
          <li>Features: RESTful API, Database Fetching, Dynamic UI</li>
        <li>Tech Stack: MongoDB | Express.js | React | Node.js</li>
       <li>Focus: Backend-to-Frontend Data Flow & API Integration</li> 
      </ul>
        </div>
      </div>
    </div>
  </div>
  
        </div>
  
    )
}
export default HomePage