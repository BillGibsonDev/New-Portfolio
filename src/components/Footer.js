
// styled
import styled from "styled-components"
import * as pallette from '../styled/ThemeVariables.js';

// images
import Git from '../images/icons/github1774dd.png';
import Twitter from '../images/icons/twitter1774dd.png';
import Linkedin from '../images/icons/linkedin1774dd.png';
import Upwork from '../images/icons/upwork1774dd.png';
import Fiverr from '../images/icons/fiverr1774dd.png';

export default function Footer() {
    return (
        <StyledFooter>
            <h2>Bill Gibson</h2>
            <div className="icon-container">
                    <a href="https://github.com/GibbyBreaksTech" target="_blank" rel="noreferrer"><img src={Git} alt="" /></a>
                    <a href="https://twitter.com/GibbyBreaksTech" target="_blank" rel="noreferrer"><img src={Twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" /></a>
                    <a href="https://www.fiverr.com/gibby_designs" target="_blank" rel="noreferrer"><img src={Fiverr} alt="" /></a>
                    <a href="https://www.upwork.com/freelancers/~01c291154f7c452996" target="_blank" rel="noreferrer"><img src={Upwork} alt="" /></a>
                </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
height: 100%;
border-top: 3px solid ${pallette.accentColor};
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
width: 100%;
    h2 {
        font-size: 36px;
        color: ${pallette.accentColor};
    }
    .icon-container {
        display: flex;
        width: 30%;
        justify-content: space-between;
        margin: 20px auto;
        @media (max-width: 750px){
            width: 90%;
        }
        a {
            margin-right: 10px;
            img {
                width: 40px;
                @media (max-width: 750px){
                    width: 35px;
                }
            }
        }
    }
`;
