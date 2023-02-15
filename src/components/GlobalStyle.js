import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html {
      scrollbar-width: .5rem;
      scrollbar-color: #4fb090 #aba0a0;

      &::-webkit-scrollbar {
         width: .5rem;
      }
      &::-webkit-scrollbar-track {
         background: #f8f8f8;
      }

      &::-webkit-scrollbar-thumb {
         background-color: #4fb090;
         border-radius: 5px;
         border: 1px solid #ffffff;
      }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
         font-weight: bold;
         font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyled;
