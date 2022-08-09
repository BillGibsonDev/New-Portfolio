// styled
import styled from "styled-components";
import * as pallette from '../styled/ThemeVariables.js';

export default function About() {
    return (
        <StyledAbout id="about">
            <h2>About Me</h2>
            <p>Welcome to my portfolio! My name is Bill and I am a Frontend Web Developer. 
                I started my journey into Web Design in August of 2020 and have not looked back.  I have always had a fascination with
                technology since the glory of the original Nintendo days. I left my job in summer of 2021 to fulfill my dream of 
                becoming a Web Developer full time.</p>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
height: 60vh;
display: flex;
justify-content: center;
flex-direction: column;
margin: 5em auto;
    @media (max-width: 1050px){
        height: 60vh;
    }
    h2 {
        font-size: 36px;
        color: ${pallette.accentColor};
        width: 50%;
        border-bottom: 2px solid ${pallette.accentColor};
        margin-bottom: 20px;
    }
    p {
        color: white;
        font-size: 18px;
        line-height: 2;
        letter-spacing: 1px;
    }
`;
