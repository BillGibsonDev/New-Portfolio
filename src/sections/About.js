// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';

export default function About() {
    return (
        <StyledAbout id="about">
            <h2>About Me</h2>
            <p>Welcome to my portfolio! My name is Bill and I am a Self-Taught Frontend Web Developer. 
                I started my journey into Web Design in August of 2020 and have not looked back. I have always had a fascination with
                technology since the glory of the original Nintendo days. I currently looking for opportunities fulfill my dream of 
                becoming a Web Developer full time.</p>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2em auto;
    @media (max-width: 1050px){
        height: 60vh;
    }
    h2 {
        font-size: ${palette.sectionTitleSize};
        color: ${palette.accentColor};
        width: 60%;
        border-bottom: 2px solid ${palette.accentColor};
        margin-bottom: 20px;
    }
    p {
        color: white;
        font-size: 16px;
        line-height: 2;
        letter-spacing: 1px;
    }
`;
