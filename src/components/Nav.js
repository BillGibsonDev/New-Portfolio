
// styled
import styled from "styled-components";

// images
import Home from '../images/homeYaleBlue.png';
import About from '../images/profileYaleBlue.png';
import Projects from '../images/projectYaleBlue.png';
import Skills from '../images/noteYaleBlue.png';
import Contact from '../images/emailYaleBlue.png';
import Hamburger from '../images/hamburgerYaleBlue.png';

// router
import { HashLink as Link } from 'react-router-hash-link';


export default function Nav() {

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

    return (
        <StyledNav>
            <nav>
                <Link to="/#home"><img src={Home} alt="" /><span>Home</span></Link>
                <Link to="/#about"><img src={About} alt="" /><span>About</span></Link>
                <Link to="/#skills"><img src={Skills} alt="" /><span>Skills</span></Link>
                <Link to="/#projects"><img src={Projects} alt="" /><span>Projects</span></Link>
                <Link to="/#contact"><img src={Contact} alt="" /><span>Contact</span></Link>
            </nav>
            <div id="myNav" className="overlay">
                <button onClick={closeNav}>&times;</button>
                <div className="overlayContent" onClick={closeNav}>
                    <Link to="/#home">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#skills">Skills</Link>
                    <Link to="/#projects">Projects</Link>
                    <Link to="/#contact">Contact</Link>
                </div>
            </div>
            <img id='hamburger' src={Hamburger} onClick={openNav} alt="hamburger menu"/>
        </StyledNav>
    )
}

const StyledNav = styled.div`
display: flex;
flex-direction: column;
position: fixed;
left: 5%;
top: 35%;
z-index: 99;
    @media (max-width: 1250px){
        left: 0;
    }
    @media (max-width: 1050px){
        top: 0;
        left: 0;
        width: 100%;
        height: 10vh;
    }
    nav {
        display: flex;
        flex-direction: column;
        width: 40%;
        a {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding: 10px 10px;
            border-radius: 50px;
            img{
                width: 30px;
                &:hover + span{
                    display: block;
                }
            }
            span {
                font-size: 20px;
                margin-left: 10px;
                color: white;
                display: none;
            }
        }
        @media (max-width: 1050px){
            display: none;
        }
    }
        .overlay {
            height: 100%;
            width: 0;
            position: fixed; 
            left: 0;
            top: 0;
            background-color: rgb(0,0,0); 
            overflow-x: hidden; 
            transition: 0.5s;
            z-index: 99; 
                button {
                    position: absolute;
                    top: 20px;
                    right: 45px;
                    font-size: 60px;
                    color: #818181;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    &:hover, &:focus {
                        transition: 0.3s;
                        transform: scale(1.1);
                    }
                }
                .overlayContent {
                    position: relative;
                    top: 10%; 
                    width: 50%;
                    margin: auto;
                    margin-top: 30px;
                    z-index: 99;
                    a {
                        display: flex;
                        justify-content: center;
                        font-size: 2em;
                        color: white;
                        margin: 2em 0;
                        transition: 0.3s;
                        font-size: 3em; 
                            &:hover, &:focus {
                            color: #f1f1f1;
                            transition: 0.3s;
                            transform: scale(1.1);
                        }
                    }
                } 
            }
            #hamburger {
                cursor: pointer;
                display: none;
                width: 50px;
                position: absolute;
                top: 15%;
                right: 3%;
                &:hover, &:focus {
                    transition: 0.3s;
                    transform: rotateZ(30deg);
                }
                @media (max-width: 1050px){
                    display: block;
                }
                @media (max-width: 750px){
                    width: 35px;
                }
            }
`;