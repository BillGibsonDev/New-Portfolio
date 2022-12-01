// styled
import styled from "styled-components"
import * as palette from '../styled/ThemeVariables.js';

// images
import Git from '../images/icons/github1774dd.png';
import Twitter from '../images/icons/twitter1774dd.png';
import Linkedin from '../images/icons/linkedin1774dd.png';

export default function Footer() {
    return (
        <StyledFooter>
            <h2>Bill Gibson</h2>
            <h3>Frontend Web Developer</h3>
            <div className="icon-container">
                <a href="https://github.com/BillGibsonDev" target="_blank" rel="noreferrer"><img src={Git} alt="" /></a>
                <a href="https://twitter.com/BillGibsonDev" target="_blank" rel="noreferrer"><img src={Twitter} alt="" /></a>
                <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" /></a>
             </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
height: 100%;
border-top: 3px solid ${palette.accentColor};
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
width: 100%;
    h2 {
        font-size: 2em;
        color: ${palette.accentColor};
    }
    h3 {
        font-size: 1.2em;
        color: #fff;
    }
    .icon-container {
        display: flex;
        width: 20%;
        justify-content: space-between;
        margin: 20px auto;
        @media (max-width: 750px){
            width: 50%;
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
