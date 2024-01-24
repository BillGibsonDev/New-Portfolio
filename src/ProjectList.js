import SwatterLogo from './projectImages/SwatterLogo.png';
import FootballLogo from './projectImages/4cast4football.png';

export const ProjectList = [
    {
        id: "1",
        title:"Swatter - Project Management",
        linkTitle:"Swatter-Bug-Tracker",
        thumbnail: SwatterLogo,
        paragraph: "Swatter is a project management and workflow web app I created using the MERN Stack (Mongodb, Express, React, Node). This web app is designed to organize projects with their bugs onto a webpage and allow you to create, read, update and delete them as you wish. Swatter allows users to organize bugs into a sprint or workflow to help achieve goals.  Along with bugs and sprints you can communicate with collaborators using a comment section for each project and bug. All of this is wrapped up with a custom login system to prevent mishandling of projects and bugs.",
        websiteLink: "https://hardcore-bardeen-da4ef7.netlify.app/login",
        githubLink: "https://github.com/billgibsondev/Swatter-Client",
        build: "CSS, JavaScript, React, MongoDB, Express and Node.",
        npm: "Styled Components, Axios, React-Router-Dom, Bcrypt, Redux, Redux-Thunk, Mongoose and React-Slick.",
    },
    {
        id: "2",
        title:"4Cast4Football",
        linkTitle: "4Cast4Football",
        thumbnail: FootballLogo,
        paragraph: "4Cast4Football is a full stack web application as well as a Twitter Bot. I built this project to provide weather forecasts for NFL football games. It has three parts, a Twitter/X Bot, an Express server connected to a MongoDB database an a React front end. I wanted to create something useful for my favorite sport. Knowing the weather before the game can help fans prepare for the game. Also could be very useful for bettors, knowing the weather conditions could help understand how the game will be played for bets to be placed.",
        websiteLink: "https://4cast4football.com",
        githubLink: "https://github.com/BillGibsonDev/Football-Weather-Site",
        build: "CSS, JavaScript, React, MongoDB, Express and Node.",
        npm: "Styled Components, Axios, Redux, Redux-Thunk, React-Helment, React-Router-Dom, CORS, Cron, Twitter API v2 and Mongoose.",
    }
]