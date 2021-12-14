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
    width: 80%;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background-color: #000000;
    @media (max-width: 1050px){
        font-size: 70%;
        width: 90%;
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