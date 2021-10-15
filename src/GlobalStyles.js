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
    @media (max-width: 1375px){
       font-size: 90%;
    }
    @media (max-width: 1350px){
        width: 70%;
    }
    @media (max-width: 1250px){
        font-size: 70%;
        width: 80%;
    }  
    @media (max-width: 750px){
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