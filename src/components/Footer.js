
// styled
import styled from "styled-components"

// images
import Git from '../images/githubYaleBlue.png';
import Twitter from '../images/twitterYaleBlue.png';
import Linkedin from '../images/linkedinYaleBlue.png';

export default function Footer() {
    return (
        <StyledFooter>
            <h2>Bill Gibson</h2>
            <div className="icon-container">
                    <a href="https://github.com/DevGibby"><img src={Git} alt="" /></a>
                    <a href="https://twitter.com/DevGibby"><img src={Twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/"><img src={Linkedin} alt="" /></a>
                </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    height: 100%;
    border-top: 3px solid #0f4d92;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 100%;
    h2{
        font-size: 3em;
        color: #0f4d92;
    }
    .icon-container{
        margin-top: 20px;
            a {
                margin-right: 10px;
                img {
                    width: 50px;
                    opacity: .7;
                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }
`;
