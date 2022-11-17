import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    margin: auto;
    scroll-behavior: smooth;
    width: 60%;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background-color: #000000;
    @media (max-width: 1250px){
        width: 70%;
    }
    @media (max-width: 1050px){
        width: 90%;
        font-size: 70%;
    }
}

button, label, textarea, input{
    font-family: 'Poppins', sans-serif;
}

ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyles;