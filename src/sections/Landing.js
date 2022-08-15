// styles
import styled from "styled-components";
import * as pallette from '../styled/ThemeVariables.js';

// images
import Git from '../images/icons/github1774dd.png';
import Twitter from '../images/icons/twitter1774dd.png';
import Linkedin from '../images/icons/linkedin1774dd.png';
import Upwork from '../images/icons/upwork1774dd.png';
import Fiverr from '../images/icons/fiverr1774dd.png';

export default function Landing() {
    return (
        <StyledLanding id="home">
            <div className="title-container">
                <h3>Hello, I am</h3>
                <h1>Bill Gibson</h1>
                <h3>and I am a Frontend Web Developer.</h3>
                <div className="icon-container">
                    <a href="https://github.com/GibbyBreaksTech" target="_blank" rel="noreferrer"><img src={Git} alt="" /></a>
                    <a href="https://twitter.com/GibbyBreaksTech" target="_blank" rel="noreferrer"><img src={Twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" /></a>
                    <a href="https://www.fiverr.com/gibby_designs?up_rollout=true" target="_blank" rel="noreferrer"><img src={Fiverr} alt="" /></a>
                    <a href="https://www.upwork.com/freelancers/~01c291154f7c452996" target="_blank" rel="noreferrer"><img src={Upwork} alt="" /></a>
                </div>
            </div>
        </StyledLanding>
    )
}

const StyledLanding = styled.section`
    height: 90vh;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    @media (max-width: 750px){
        height: 70vh;
    }
    .background {
        opacity: .1;
        height: 100%;
        width: 100%;
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.3s;
        img {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .title-container {
        h1 {
            font-size: 6em;
            color: ${pallette.accentColor};
            @media (max-width: 750px){
               font-size: 4em;
            }
        }
        h3 {
            color: white;
            font-size: 2em;
            @media (max-width: 750px){
               font-size: 1.5em;
            }
        }
        .icon-container {
            margin-top: 20px;  
                a {
                    margin-right: 30px;
                    z-index: 1;
                    position: relative;
                        img {
                            width: 40px;
                            z-index: 1;
                            position: relative;
                            @media (max-width: 750px){
                                width: 35px;
                            }
                        }
                }
            }
    }
`;
