// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';

// images
import Hamburger from '../images/icons/menu1774dd.png';
import BG from '../images/BG.png';

// router
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {

    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    }

    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    }

    return (
        <StyledNav>
            <img id="logo" src={BG} alt="logo"/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/#about">About</Link>
                <Link to="/#projects">Projects</Link>
                <Link to="/#skills">Skills</Link>
                {/* <a href="https://tech-blogg.netlify.app/" target="_blank" rel="noreferrer">Blog</a> */}
                <Link id="nav-button" to="/#contact">Contact</Link>
            </nav>
            <div id="myNav" className="overlay">
                <button onClick={closeNav}>&times;</button>
                <div className="overlayContent" onClick={closeNav}>
                    <Link to="/">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#projects">Projects</Link>
                    <Link to="/#skills">Skills</Link>
                    {/* <a href="https://tech-blogg.netlify.app/" target="_blank" rel="noreferrer">Blog</a> */}
                    <Link to="/#contact">Contact</Link>
                </div>
            </div>
            <img id='hamburger' src={Hamburger} onClick={openNav} alt="hamburger menu"/>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    max-height: 10vh;
    margin: 10px 0;
    width: 100%;
    #logo {
        width: 40px;
        height: 40px;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: auto;
        width: 50%;
        max-width: 400px;
        a {
            font-size: 1em;
            color: white;
            transition: 0.2s;
            &:hover {
                text-decoration: underline;
                text-underline-position: under;
                color: ${palette.accentColor};
            }
        }
        @media (max-width: 850px){
            display: none;
        }
    }
    #nav-button {
        padding: 6px 10px;
        background: ${palette.accentColor};
        border: 1px solid ${palette.accentColor};
        color: white;
        border-radius: 8px;
        font-size: 1em;
        transition: 0.2s;
        &:hover {
            background: white;
            color: ${palette.accentColor};
            text-decoration: none;
        }
        @media (max-width: 850px){
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
            right: 15px;
            font-size: 3em;
            color: ${palette.accentColor};
            background: transparent;
            border: none;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            &:hover, &:focus {
                transform: scale(1.05);
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
                margin: 20px;
                transition: 0.2s ease-in-out;
                    &:hover, &:focus {
                    color: #f1f1f1;
                    transform: scale(1.05);
                }
            }
        } 
    }
    #hamburger {
        cursor: pointer;
        display: none;
        width: 30px;
        height: 30px;
        transition: 0.2s ease-in-out;
        margin-left: auto;
        &:hover, &:focus {
            transform: scale(1.05);
        }
        @media (max-width: 850px){
            display: block;
        }
    }
`;