import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from 'styled-reset'


const GlobalStyle = createGlobalStyle`
    ${reset} 
    * {
      box-sizing : border-box;
      color : ${theme.color.black};
      background: ${theme.color.background_blue};  
      background: -webkit-linear-gradient(to right, ${theme.color.background_pink}, ${theme.color.background_blue});  
      background: linear-gradient(to right, ${theme.color.backgournd_pink}, ${theme.color.background_blue}); 

    };

`
export default GlobalStyle;