
// styled
import styled from "styled-components";

// form
import ContactForm from "../components/ContactForm";

// images
import Email from '../images/emailYaleBlue.png';
import Git from '../images/githubYaleBlue.png';
import Twitter from '../images/twitterYaleBlue.png';
import Linkedin from '../images/linkedinYaleBlue.png';

export default function Contact() {
    return (
        <StyledContact id="contact">
            <h2>Contact</h2>
            <ContactForm />
            <div className="contact-container">
                <div className="contact-wrapper">
                    <img src={Email} alt="" />
                    <h6>BillGibsonDev@outlook.com</h6>
                </div>
                <div className="contact-wrapper">
                    <img src={Git} alt="" />
                    <a href="https://github.com/DevGibby">DevGibby</a>
                </div>
                <div className="contact-wrapper">
                    <img src={Twitter} alt="" />
                    <a href="https://twitter.com/DevGibby">@DevGibby</a>
                </div>
                <div className="contact-wrapper">
                    <img src={Linkedin} alt="" />
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/">Bill Gibson</a>
                </div>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled.div`
height: 100%;
margin-top: 10%;
display: flex;
justify-content: center;
position: relative;
margin: 10% auto;
    @media (max-width: 750px){
        flex-direction: column;
        align-items: center;
    }
    h2{
        font-size: 3em;
        color: #0f4d92;
        width: 50%;
        border-bottom: 2px solid #0f4d92;
    }
    .contact-container{
        display: flex;
        width: 50%;
        flex-direction: column;
        .contact-wrapper{
            display: flex;
            align-items: center;
            margin: 10px 0;
            img{
                margin-right: 10px;
                height: 50px;
                width: 50px;
            }
            h6, a {
                color: black;
                font-size: 1.5em;
                font-weight: 700;
                &:hover{
                    color: #0f4d92;
                }
            }
        }
    }
`;