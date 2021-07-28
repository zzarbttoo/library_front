import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from 'styled-reset'


const GlobalStyle = createGlobalStyle`
    ${reset} 

    * {
      box-sizing : border-box;
      color ; ${theme.color.black};
    };

`
export default GlobalStyle;