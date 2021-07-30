import {Suspense, React} from 'react';
import GlobalStyle from './style/GlobalStyle';
import MainRouter from './routes/MainRouter';
import {BrowserRouter, Link} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import theme from './style/theme';
import LoadingPage from './pages/LoadingPage';


function App(){

  return (
    <div className = "App">
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
        <GlobalStyle/>
        <Suspense fallback = {<div>suspense</div>}>
        <MainRouter/>
        </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );

}
export default App;

