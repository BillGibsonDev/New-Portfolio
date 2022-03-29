
// real deal fit
import RDF from './projectImages/RDF.jpg'
import RDF1 from './projectImages/RDF1.png'
import RDF2 from './projectImages/RDF2.png'
import RDF3 from './projectImages/RDF3.png'
import RDF4 from './projectImages/RDF4.png'
import RDF5 from './projectImages/RDF5.png'
import RDF6 from './projectImages/RDF6.png'

// swatter 
import SwatterLogo from './projectImages/SwatterLogo.png';
import Swatter1 from './projectImages/Swatter1.png';
import Swatter2 from './projectImages/Swatter2.png';
import Swatter3 from './projectImages/Swatter3.png';
import Swatter4 from './projectImages/Swatter4.png';
import Swatter5 from './projectImages/Swatter5.png';
import Swatter6 from './projectImages/Swatter6.png';
import Swatter7 from './projectImages/Swatter7.png';

// free the games
import Free from './projectImages/FTG.png';
import Free1 from './projectImages/FTG1.png';
import Free2 from './projectImages/FTG2.png';
import Free3 from './projectImages/FTG3.png';
import Free4 from './projectImages/FTG4.png';

// Branded.
import B1 from './projectImages/b1.png';
import B2 from './projectImages/b2.png';
import B3 from './projectImages/b3.png';
import B4 from './projectImages/b4.png';
import B5 from './projectImages/b5.png';
import B6 from './projectImages/b6.png';

// Via.
import V1 from './projectImages/VN1.png';
import V2 from './projectImages/VN2.png';
import V3 from './projectImages/VN3.png';
import V4 from './projectImages/VN4.png';
import V5 from './projectImages/VN5.png';


export const ProjectList = [
    {
        id: "1",
        title:"Via Napoli - React / Redux Website",
        linkTitle:"Via-Napoli",
        thumbnail: V1,
        images: [V1, V2, V3, V4, V5 ],
        paragraph: "The Via Napoli website is built using CSS, React, Redux and a custom database I created for this project. This website allows users to “order” from a pizzeria, add items with specific quantities to the order using Redux and view them on a separate order page.  Each item has its own page dynamically generated for that specific item that gives more information about the item.",
        websiteLink: "https://zealous-northcutt-991377.netlify.app/",
        githubLink: "https://github.com/DevGibby/React-Redux-Menu",
        build: "JavaScript, CSS, React, Redux and a custom database",
        npm: "Styled Components, Axios, React-Router-Dom, React-Redux, Redux-Thunk",
    },
    {
        id: "2",
        title:"Swatter - Bug Tracker - Full Stack",
        linkTitle:"Swatter-Bug-Tracker",
        thumbnail: SwatterLogo,
        images: [Swatter1, Swatter2, Swatter3, Swatter4, Swatter5, Swatter6, Swatter7 ],
        paragraph: "Swatter is a bug tracking and workflow web app I created using the MERN Stack (Mongodb, Express, React, Node). This web app is designed to organize projects with their bugs onto a webpage and allow you to create, read, update and delete them as you wish. Along with bugs you can communicate with collaborators using a comment section for each project. All of this is wrapped up with a custom login system to prevent mishandling of projects and bugs.",
        websiteLink: "https://hardcore-bardeen-da4ef7.netlify.app/LoginPage",
        githubLink: "https://github.com/DevGibby/Swatter-Client",
        build: "JavaScript, React, MongoDB, Express, CSS and Node",
        npm: "Styled Components, Axios, React-Router-Dom, Bcrypt, Mongoose, React-Slick, Heroku and JWT",
    },
    {
        id: "3",
        title:"Branded. - React / Redux Website",
        linkTitle:"Branded-React-Redux-Shopping-Cart",
        thumbnail: B1,
        images: [B1, B2, B3, B4, B5, B6 ],
        paragraph: "Branded is a React Website built with Free Store API, React, Redux, CSS and JavaScript. Shoppers can easily navigate the website, seamlessly add products to their shopping cart (Redux State) and view them on the separate cart page. All pages are linkable for sharing on social media, etc.",
        websiteLink: "https://elastic-roentgen-a4f64d.netlify.app/",
        githubLink: "https://github.com/DevGibby/New-React-Marketplace",
        build: "JavaScript, React, CSS, Free-Store-API and Redux",
        npm: "Styled Components, Axios, React-Router-Dom, React-Redux, Redux-Thunk",
    },
    {
        id: "4",
        title:"Free The Games - React Website",
        linkTitle:"Free-The-Games",
        thumbnail: Free,
        images: [Free4, Free1, Free3, Free2],
        paragraph: "Free The Games is a website built with React using the Free to Game API. I included a few animations with the Framer Motion Library. Each game is created on the page from the API and provides a link to a dynamically added page for that specific game. The dynamically created page will provide users with that game's information and links.",
        websiteLink: "https://unruffled-torvalds-0f1306.netlify.app/",
        githubLink:"https://github.com/DevGibby/React-Free-Games-Api",
        build:"CSS, JavaScript and React",
        npm: "Axios, Styled Components, React-Slick, React-Router-Dom and Framer Motion",
    },
    {
        id: "5",
        title:"Veritable Fitness - Full Stack",
        linkTitle:"Veritable-Fitness",
        thumbnail: RDF,
        images: [RDF1, RDF2, RDF3, RDF4, RDF5, RDF6],
        paragraph: "The Veritable Fitness project started out as an example website I was using to learn the Shopify platform and evolved into an entire ecosystem. I have always been involved in sports and fitness. This is where I began to build the Real Deal Fitness brand. I developed a standalone blog website using React, MongoDb, Express and Node.js. This is a live website to help build my brand using fitness articles, news and more.",
        websiteLink: "https://www.trdfit.com/",
        githubLink:"https://github.com/DevGibby/New-Fit-Blog",
        build:"JavaScript, React, Redux, MongoDB, Express, Node and Shopify",
        npm: "Styled Components, Axios and React-Router-Dom",
    }, 
]