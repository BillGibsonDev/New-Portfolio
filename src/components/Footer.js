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
            <div className="icon-container">
                <a href="https://github.com/BillGibsonDev" target="_blank" rel="noreferrer"><img src={Git} alt="Github Link" /></a>
                <a href="https://twitter.com/BillGibsonDev" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter Link" /></a>
                <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin Link" /></a>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    height: 100%;
    border-top: 2px solid ${palette.accentColor};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 100%;
    .icon-container {
        display: flex;
        width: 50%;
        max-width: 120px;
        justify-content: space-between;
        margin: 10px auto;
        a {
            img {
                width: 30px;
            }
        }
    }
`;
