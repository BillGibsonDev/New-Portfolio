// styled
import styled from "styled-components";
import * as pallette from '../styled/ThemeVariables.js';

// skills images
import Github from '../images/skills-icons/githubWhiteIcon.png';
import ReactIcon from '../images/skills-icons/reactIcon.png';
import HTML from '../images/skills-icons/html-5.png';
import CSS from '../images/skills-icons/css.png';
import JS from '../images/skills-icons/jsIcon.png';
import SASS from '../images/skills-icons/sassIcon.png';

export default function Skills() {
    return (
        <StyledSkills id="skills">
            <h2>Skills</h2>
            <div className="icon-container">
                <div className="icon-wrapper">
                    <img src={HTML} alt="" />
                    <h6>HTML</h6>
                </div>
                <div className="icon-wrapper">
                    <img src={CSS} alt="" />
                    <h6>CSS</h6>
                </div>
                <div className="icon-wrapper">
                    <img src={SASS} alt="" />
                    <h6>SASS / SCSS</h6>
                </div>
                <div className="icon-wrapper">
                    <img src={JS} alt="" />
                    <h6>JavaScript</h6>
                </div>
                <div className="icon-wrapper">
                    <img src={ReactIcon} alt="" />
                    <h6>React</h6>
                </div>
                <div className="icon-wrapper">
                    <img src={Github} alt="" />
                    <h6>Github</h6>
                </div>
            </div>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 25%;
    h2 {
        font-size: ${pallette.sectionTitleSize};
        color: ${pallette.accentColor};
        width: 60%;
        border-bottom: 2px solid ${pallette.accentColor};
        margin-bottom: 20px;
    }
    .icon-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        @media (max-width: 1250px){
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 850px){
            grid-template-columns: 1fr 1fr;
        }
        .icon-wrapper {
        background: #353535;
        width: 100%;
        display: flex;
        align-items: center;
        margin: 5px auto;
        padding: 6px 4px;
        border-radius: 10px;
            img {
                width: 50px;
            }
            h6 {
                color: white;
                font-size: 1.5em;
                margin-left: 10px;
            }
        }
    }
`;