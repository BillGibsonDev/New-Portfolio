
// styled
import styled from "styled-components";

// images
import Github from '../images/githubIcon.png';
import ReactIcon from '../images/reactIcon.png';
import HTML from '../images/html-5.png';
import CSS from '../images/css.png';
import JS from '../images/jsIcon.png';
import SASS from '../images/sassIcon.png';
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
                    <img src={Figma} alt="" />
                    <h6>Figma</h6>
                </div>
                <div className="icon-wrapper">
                    <img src={PS} alt="" />
                    <h6>Photoshop</h6>
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
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
margin: 20% auto;
    h2{
        font-size: 3em;
        color: #0f4d92;
        width: 50%;
        border-bottom: 2px solid #0f4d92;
        margin-bottom: 10px;
    }
    .icon-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
            @media (max-width: 750px){
                grid-template-columns: 1fr 1fr;
            }
        .icon-wrapper{
            background: lightgray;
            width: 170px;
            display: flex;
            align-items: center;
            margin: 5px 0;
            padding: 6px 4px;
            border-radius: 10px;
                img {
                    width: 50px;
                }
                h6 {
                    font-size: 1em;
                    margin-left: 10px;
                }
        }
    }
    @keyframes mymove {
        from {top: 0px;}
        to {top: 200px;}
}
`;