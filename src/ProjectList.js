
// real deal fit
import RDF from './projectImages/RDF.jpg'
import RDF1 from './projectImages/rdf.png'

// swatter 
import SwatterLogo from './projectImages/SwatterLogo.png';
import Swatter1 from './projectImages/swatterBugTracker.png';
import Swatter2 from './projectImages/swatterLogin.png';
import Swatter3 from './projectImages/swatterProject.png';

// free the games
import Free from './projectImages/FTG.png';
import Free1 from './projectImages/FTG1.png';
import Free2 from './projectImages/FTG2.png';
import Free3 from './projectImages/FTG3.png';
import Free4 from './projectImages/FTG4.png';

export const ProjectList = [
    {
        id: "6",
        title:"Free The Games",
        linkTitle:"Free-The-Games",
        thumbnail: Free,
        images: [Free4, Free1, Free3, Free2],
        paragraph: "Free The Games is a website built with React. This website was made with Free to Game API. I included a few animations with the Framer Motion Library. Each game gets its own dynamically produced page to see more infomation about them.",
        websiteLink: "https://unruffled-torvalds-0f1306.netlify.app/",
        githubLink:"https://github.com/DevGibby/React-Free-Games-Api",
        build:"CSS, JavaScript and React",
        npm: "Axios, Styled Components, React-Slick, React-Router-Dom and Framer Motion",
    },
    {
        id: "7",
        title:"The Real Deal Fitness",
        linkTitle:"The-Real-Deal-Fitness",
        thumbnail: RDF,
        images: [RDF1],
        paragraph: "The Real Deal Fitness project started out as an example website I was using to learn the Shopify platform and evolved into an entire ecosystem. I have always been involved in sports and fitness. This is where I began to build the Real Deal Fitness brand. I developed a standalone blog website using React, MongoDb, Express and Node.js. This is a live website to help build my brand using fitness articles, news and more.",
        websiteLink: "https://www.trdfit.com/",
        githubLink:"https://github.com/DevGibby/New-Fit-Blog",
        build:"JavaScript, React, Redux, MongoDB, Express, Node and Shopify",
        npm: "Styled Components, Axios and React-Router-Dom",
    }, 
    {
        id: "8",
        title:"Swatter - Bug Tracker",
        linkTitle:"Swatter-Bug-Tracker",
        thumbnail: SwatterLogo,
        images: [Swatter1, Swatter2, Swatter3],
        paragraph: "Swatter is a bug tracking and workflow web app I created using the MERN Stack (Mongodb, Express, React, Node). This web app is designed to organize projects with their bugs on to a webpage and allow you to create, read, update and delete them as you wish. Along with bugs you can communicate with collaberators using a comment section for each project. All of this is wrapped up with a custom login system to prevent mishandling of projects and bugs.",
        websiteLink: "https://hardcore-bardeen-da4ef7.netlify.app/LoginPage",
        githubLink: "https://github.com/DevGibby/Swatter-Client",
        build: "JavaScript, React, MongoDB, Express, CSS and Node",
        npm: "Styled Components, Axios, React-Router-Dom, Bcrypt, Mongoose, React-Slick, Heroku and JWT",
    },
]