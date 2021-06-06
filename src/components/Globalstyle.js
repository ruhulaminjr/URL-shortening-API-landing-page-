import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 80vw;
    margin: 0 auto;
    font-size: 18px;
    overflow-x: hidden;
}
*,body,h1,h2,h3,h4,a,li,input{
    font-family: 'Poppins', sans-serif;
}
.container{
    width: 80%;
    margin: 0 auto;
}
  @media (max-width: 1100px){
      img{
          max-width: 100%;
      }
      .container{
          width: 100%;
      }
  }
  @media (max-width: 600px){
      body{
            width: 95vw;
      }
  }
`;

export default GlobalStyle;