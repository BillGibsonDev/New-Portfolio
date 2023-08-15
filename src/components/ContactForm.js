import { useForm, ValidationError } from '@formspree/react';

// styled
import styled from 'styled-components';
import * as palette from '../styled/ThemeVariables.js';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mgerlvjy");

    if (state.succeeded) {
        return <p style={{color: "white", fontSize: '20px', margin: "20px auto"}}>Thanks for your message!</p>;
    }
  
  return (
      <StyledForm>
            <h5>Send a message!</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Someone@something.com'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Hey Bill, your portfolio is super cool!'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
    </StyledForm>
  );
}

const StyledForm = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #353535;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: auto;
    padding: 8px;
    @media (max-width: 1000px){
        width: 100%;
        margin-bottom: 20px;
    }
    h5 {
        font-size: 20px;
        color: white;
        font-weight: 400;
        border-bottom: 2px solid ${palette.accentColor};
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 80%;
        margin: 0 auto;
        label {
            color: white;
            font-size: 1em;
        }
        input {
            height: 30px;
            padding: 4px;
        }
        textarea{
            height: 70%;
            margin: 10px 0;
            padding: 4px;
        }
        button {
            max-width: 80%;
            width: 200px;
            height: 60px;
            margin: 0 auto;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 1px;
            background: ${palette.accentColor};
            color: white;
            transition: 0.2s;
            &:hover {
                cursor: pointer;
                background: black;
                color: ${palette.accentColor};
            }
        }
    }
`;