import { useForm, ValidationError } from '@formspree/react';

// styled
import styled from 'styled-components';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgerlvjy");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
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
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
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
margin: 5% 0;
margin-right: 10%;
    @media (max-width: 1275px){
        width: 100%;
    }
h5 {
    font-size: 1.5em;
    color: white;
    font-weight: 400;
}
form {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    margin: 1em auto;
    label {
        color: white;
        font-size: 1.5em;
    }
    input {
        height: 30px;
    }
    textarea{
        height: 70%;
        margin: 10px 0;
    }
    button {
        width: 50%;
        height: 30px;
        margin: 0 auto;
        border: none;
        border-radius: 6px;
        font-size: 1.5em;
        font-weight: 700;
        letter-spacing: 1px;
        background: #0f4d92;
        color: white;
        transition: 0.2s;
        &:hover {
            cursor: pointer;
            background: black;
            color: #0f4d92;
        }
    }
}
`;