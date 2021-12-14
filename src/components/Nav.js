
// styled
import styled from "styled-components";

// images
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
            <h3 id="logo">Bill Gibson</h3>
            <nav>
                <Link to="/#home">Home</Link>
                <Link to="/#about">About</Link>
                <Link to="/#skills">Skills</Link>
                <Link to="/#projects">Projects</Link>
                <Link to="/#contact">Contact</Link>
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
justify-content: space-between;
align-items: center;
height: 10vh;
width: 100%;
#logo {
    color: white;
    font-size: 3em;
    width: 100%;
    @media (max-width: 400px){
        font-size: 2.5em;
    }
}
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        a {
            font-size: 20px;
            color: white;
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
                width: 40px;
                height: 30px;
                &:hover, &:focus {
                    transition: 0.3s;
                    transform: rotateZ(20deg);
                }
                @media (max-width: 1050px){
                    display: block;
                }
                @media (max-width: 750px){
                    width: 30px;
                }
            }
`;