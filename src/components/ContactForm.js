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
height: 70%;
width: 40%;
display: flex;
flex-direction: column;
background: lightgray;
justify-content: center;
align-items: center;
border-radius: 12px;
margin: 5% auto;
    @media (max-width: 750px){
        width: 100%;
    }
h5{
    font-size: 1.5em;
    color: black;
    font-weight: 400;
}
form {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 50%;
    margin: 1em auto;
    input{
        height: 30px;
    }
    textarea{
        height: 100px;
        margin: 10px 0;
    }
    button{
        width: 50%;
        height: 30px;
        margin: 0 auto;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 700;
        letter-spacing: 1px;
        background: #0f4d92;
        color: white;
        &:hover{
            cursor: pointer;
            background: black;
            color: white;
        }
    }
}
`;