// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables';

// form
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <StyledContact id="contact">
            <h2>Contact</h2>
            <div className="contact-wrapper">
                <ContactForm />
            </div>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    min-height: 90vh;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
        h2 {
            font-size: ${palette.sectionTitleSize};
            color: ${palette.accentColor};
            width: 60%;
            border-bottom: 2px solid ${palette.accentColor};
            margin-bottom: 20px;
        }
        .contact-wrapper{
            display: flex;
            align-items: center;
            @media (max-width: 1000px){
                flex-direction: column;
                align-items: flex-start;
            }
        }
`;