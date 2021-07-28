import {React, Suspense} from 'react';
import GlobalStyle from './style/GlobalStyle';
import MainRouter from './routes/MainRouter';
import {BrowserRouter, Link} from 'react-router-dom';


function App(){

  return (
    <div className = "App">
      <BrowserRouter>
        <MainRouter/>
      </BrowserRouter>
    </div>

  );

}
export default App;


const PrivateRoute = (component) =>{

  
}