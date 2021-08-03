import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from 'styled-reset'


const GlobalStyle = createGlobalStyle`
    ${reset} 
    * {
      box-sizing : border-box;
      color : ${theme.color.black};

    };

    .a11yHidden {
      overflow: hidden;
      position: absolute;
      clip: rect(0, 0, 0, 0);
      clip-path: circle(0);
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;     
    }

`
export default GlobalStyle;