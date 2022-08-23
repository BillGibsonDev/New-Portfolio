import { useForm, ValidationError } from '@formspree/react';

// styled
import styled from 'styled-components';
import * as pallette from '../styled/ThemeVariables.js';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgerlvjy");

  if (state.succeeded) {
      return <p style={{color: "white", fontSize: '20px', margin: "20px auto"}}>Thanks for your message!</p>;
  }
  
  return (
      <StyledForm>
            <h5>Send me a message!</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Someone@company.com'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Hey Bill, I have an amazing job to offer you!'
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
    width: 40%;
    display: flex;
    flex-direction: column;
    background: #353535;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: auto;
    @media (max-width: 1000px){
        width: 100%;
        margin-bottom: 20px;
    }
    h5 {
        font-size: 20px;
        color: white;
        font-weight: 400;
        border-bottom: 2px solid ${pallette.accentColor};
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
            font-size: 20px;
            margin: auto;
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
            width: 50%;
            height: 30px;
            margin: 0 auto;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 1px;
            background: ${pallette.accentColor};
            color: white;
            transition: 0.2s;
            &:hover {
                cursor: pointer;
                background: black;
                color: ${pallette.accentColor};
            }
        }
    }
`;