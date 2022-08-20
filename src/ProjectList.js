// swatter 
import SwatterLogo from './projectImages/SwatterLogo.png';
import Swatter1 from './projectImages/Swatter1.png';
import Swatter2 from './projectImages/Swatter2.png';
import Swatter3 from './projectImages/Swatter3.png';
import Swatter4 from './projectImages/Swatter4.png';
import Swatter5 from './projectImages/Swatter5.png';
import Swatter6 from './projectImages/Swatter6.png';

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

// Tech Blog
import TB1 from './projectImages/tb.png';

export const ProjectList = [
    {
        id: "5",
        title:"Tech Blog - Full Stack App",
        linkTitle:"Tech-Blog",
        thumbnail: TB1,
        images: [TB1],
        paragraph: "Tech Blog is a full stack application created to allow users to make articles for technology languages and more. This web app uses a custom login system for creators to make articles and post them to the website by sending them to a database. Each article and creator has a dedicated page that is generated dynamically. The creators page acts as a profile for the creator, displaying their social media and public information as well as articles written by them.",
        websiteLink: "https://dainty-trifle-b85068.netlify.app/",
        githubLink:"https://github.com/GibbyBreaksTech/MERN-Tech-Blog",
        build:"CSS, JavaScript, React, Redux, MongoDB, Express and Node",
        npm: "Styled Components, Axios and React-Router-Dom",
    },
    {
        id: "2",
        title:"Swatter - Project Management - Full Stack App",
        linkTitle:"Swatter-Bug-Tracker",
        thumbnail: SwatterLogo,
        images: [ Swatter1, Swatter2, Swatter3, Swatter4, Swatter5, Swatter6 ],
        paragraph: "Swatter is a project management and workflow web app I created using the MERN Stack (Mongodb, Express, React, Node). This web app is designed to organize projects with their bugs onto a webpage and allow you to create, read, update and delete them as you wish. Swatter allows users to organize bugs into a sprint or workflow to help achieve goals.  Along with bugs and sprints you can communicate with collaborators using a comment section for each project and bug. All of this is wrapped up with a custom login system to prevent mishandling of projects and bugs.",
        websiteLink: "https://hardcore-bardeen-da4ef7.netlify.app/LoginPage",
        githubLink: "https://github.com/DevGibby/Swatter-Client",
        build: "JavaScript, React, MongoDB, Express, CSS and Node",
        npm: "Styled Components, Axios, React-Router-Dom, Bcrypt, Mongoose, React-Slick, Heroku and JWT",
    },
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
]