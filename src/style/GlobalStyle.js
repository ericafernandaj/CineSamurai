import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    font-family: 'Work Sans', sans-serif;
}
body,#root{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    margin: 0;
    background-color: #101728;
}

h2{
    color:rgb(247,247,247);
}

`
