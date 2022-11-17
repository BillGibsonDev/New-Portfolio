// styles
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';


export default function Landing() {
    return (
        <StyledLanding id="home">
            <div className="title-container">
                <h3>Hello, I am</h3>
                <h1>Bill Gibson</h1>
                <h3>and I am a Frontend Web Developer.</h3>
                <div className="button-container">
                    <a href="#contact" id='contact-btn'>Contact</a>
                    <a href="#projects">Projects</a>
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
        height: 100vh;
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
            font-size: 4em;
            color: ${palette.accentColor};
            @media (max-width: 750px){
               font-size: 4em;
            }
        }
        h3 {
            color: white;
            font-size: ${palette.sectionTitleSize};
            @media (max-width: 750px){
               font-size: 1.5em;
            }
        }
        .button-container {
            display: flex;
            margin-top: 20px;  
                a {
                    background: ${palette.accentColor};
                    font-size: 1.5em;
                    color: white;
                    padding: 16px 60px;
                    border-radius: 8px;
                    transition: .2s;
                    &:hover {
                        color: ${palette.accentColor};
                        background: white;
                    }
                    @media (max-width: 750px){
                        padding: 10px 30px;
                    }
                }
                #contact-btn {
                    background: none;
                    border: 2px solid ${palette.accentColor};
                    margin-right: 20px;
                    &:hover {
                        background: white;
                    }
                }
            }
    }
`;
