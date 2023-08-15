// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';

export default function About() {
    return (
        <StyledAbout id="about">
            <h2>About Me</h2>
            <p>Welcome to my portfolio! My name is Bill and I am a Self-Taught Frontend Web Developer. Currently I am a Volunteer Software Engineer at <a href="https://lait911.com" target="_blank" rel="noreferrer">LAIT911 Fire Corp</a>. At LAIT911 I helped the developer team finish and launch their first mobile application that is available for download on the Apple and Google Play Stores. </p>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2em auto;
    h2 {
        font-size: ${palette.sectionTitleSize};
        color: ${palette.accentColor};
        width: 60%;
        border-bottom: 2px solid ${palette.accentColor};
        margin-bottom: 20px;
    }
    p {
        color: white;
        font-size: 1em;
        line-height: 2;
        letter-spacing: 1px;
        a {
            color:  ${palette.accentColor};
            cursor: pointer;
        }
    }
`;
