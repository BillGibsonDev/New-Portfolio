
// styles
import styled from "styled-components";

// images
import Git from '../images/githubYaleBlue.png';
import Twitter from '../images/twitterYaleBlue.png';
import Linkedin from '../images/linkedinYaleBlue.png';
import Background from '../images/background.jpg';

export default function Landing() {
    return (
        <StyledLanding id="home">
            <div className="background"></div>
            <div className="title-container">
                <h1>Bill Gibson</h1>
                <h3 className="typewriter">I am a Frontend Web Developer.</h3>
                <div className="icon-container">
                    <a href="https://github.com/DevGibby"><img src={Git} alt="" /></a>
                    <a href="https://twitter.com/DevGibby"><img src={Twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/"><img src={Linkedin} alt="" /></a>
                </div>
            </div>
        </StyledLanding>
    )
}

const StyledLanding = styled.div`
    height: 100vh;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    .background{
        background: url(${Background}) top no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        opacity: .1;
    }
    .title-container{
        h1 {
            font-size: 6em;
            color: #0f4d92;
        }
        h3 {
            font-size: 2em;
        }
        .icon-container{
            margin-top: 20px;  
                a {
                    margin-right: 10px;
                    z-index: 1;
                    position: relative;
                        img {
                            width: 50px;
                            opacity: .7;
                            z-index: 1;
                            position: relative;
                            &:hover{
                                opacity: 1;
                            }
                        }
                }
            }
    }
`;
