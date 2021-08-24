import {Suspense, React} from 'react';
import GlobalStyle from './style/GlobalStyle';
import MainRouter from './routes/MainRouter';
import {BrowserRouter, Link} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {CookiesProvider} from 'react-cookie';

import theme from './style/theme';
import LoadingPage from './pages/LoadingPage';


function App(){

  return (
    <div className = "App">
      <BrowserRouter>
        <CookiesProvider>
        <ThemeProvider theme = {theme}>
        <GlobalStyle/>
        <Suspense fallback = {<div>suspense</div>}>
        <MainRouter/>
        </Suspense>
        </ThemeProvider>
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );

}
export default App;

