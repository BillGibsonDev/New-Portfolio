
import styled from "styled-components";

export const StyledBlog = styled.div`
    min-height: 70vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media(max-width: 1400px){
        width: 80%;
    }
    @media(max-width: 1100px){
        width: 90%;
    }
`;
