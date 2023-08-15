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
                    <a href="#about" id='about-btn'>About</a>
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
        }
        h3 {
            color: white;
            font-size: ${palette.sectionTitleSize};
            font-size: 1.5em;
            font-weight: 400;
        }
        .button-container {
            display: flex;
            margin-top: 20px;  
                a {
                    background: ${palette.accentColor};
                    font-size: 1.2em;
                    color: white;
                    padding: 8px 24px;
                    border-radius: 8px;
                    transition: .2s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:hover {
                        color: ${palette.accentColor};
                        background: white;
                    }
                    @media (max-width: 750px){
                        padding: 10px 30px;
                    }
                }
                #about-btn {
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
