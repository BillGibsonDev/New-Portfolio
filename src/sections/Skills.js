
// styled
import styled from "styled-components";

// skills images
import Github from '../images/githubWhiteIcon.png';
import ReactIcon from '../images/reactIcon.png';
import HTML from '../images/html-5.png';
import CSS from '../images/css.png';
import JS from '../images/jsIcon.png';
import SASS from '../images/sassIcon.png';
import API from '../images/api-icon.png'

// familiar images
import Shopify from "../images/shopifyIcon.png";
import MongoDB from "../images/mongodb.png";
import Redux from "../images/redux-logo.png";
import NodeIcon from "../images/node-js.png";
import UIUX from '../images/ui-ux.png';
import Figma from '../images/figmaIcon.png';
import PS from '../images/psIcon.png';

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

const StyledSkills = styled.div`
min-height: 50vh;
display: flex;
justify-content: center;
flex-direction: column;
margin-bottom: 25%;
    h2 {
        font-size: 3em;
        color: #0f4d92;
        width: 50%;
        border-bottom: 2px solid #0f4d92;
        margin-bottom: 10px;
    }
    #familiar {
        margin-top: 2em;
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