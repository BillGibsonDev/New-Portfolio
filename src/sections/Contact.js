// styled
import styled from "styled-components";
import * as pallette from '../styled/ThemeVariables';

// form
import ContactForm from "../components/ContactForm";

// images
import Email from '../images/icons/email1774dd.png';
import Git from '../images/icons/github1774dd.png';
import Twitter from '../images/icons/twitter1774dd.png';
import Linkedin from '../images/icons/linkedin1774dd.png';

export default function Contact() {
    return (
        <StyledContact id="contact">
            <h2>Contact</h2>
            <div className="contact-wrapper">
                <ContactForm />
                <div className="contact-container">
                    <article>
                        <img src={Email} alt="" />
                        <h6>BillGibsonDev@outlook.com</h6>
                    </article>
                    <article>
                        <img src={Git} alt="" />
                        <a href="https://github.com/GibbyBreaksTech" target="_blank" rel="noreferrer">GibbyBreaksTech</a>
                    </article>
                    <article>
                        <img src={Twitter} alt="" />
                        <a href="https://twitter.com/GibbyBreaksTech" target="_blank" rel="noreferrer">@GibbyBreaksTech</a>
                    </article>
                    <article>
                        <img src={Linkedin} alt="" />
                        <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer">Bill Gibson</a>
                    </article>
                </div>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled.div`
min-height: 70vh;
margin-top: 10%;
display: flex;
justify-content: center;
position: relative;
margin: 20vh 0;
flex-direction: column;
    h2 {
        font-size: 36xpx;
        color: ${pallette.accentColor};
        width: 50%;
        border-bottom: 2px solid ${pallette.accentColor};
    }
    .contact-wrapper{
        display: flex;
        align-items: center;
        @media (max-width: 1250px){
            flex-direction: column;
            align-items: flex-start;
        }
        .contact-container{
            display: flex;
            width: 50%;
            flex-direction: column;
            article {
                display: flex;
                align-items: center;
                margin: 10px 0;
                img{
                    margin-right: 10px;
                    height: 40px;
                    width: 40px;
                }
                h6, a {
                    color: white;
                    font-size: 20px;
                    font-weight: 700;
                    &:hover{
                        color: ${pallette.accentColor};
                    }
                }
                a {
                    &:hover {
                        text-decoration: underline;
                        text-underline-position: under;
                    }
                }
            }
        }
    }
`;