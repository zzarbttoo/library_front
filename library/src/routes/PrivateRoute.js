import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useCookies} from 'react-cookie';


function PrivateRoute({path , children, redirect}){

    const [cookies, setCookie] = useCookies(['email']);
    console.log(cookies);

    return (<Route path = {path}>
        
        {cookies.email ? children : <Redirect to = {redirect}></Redirect>}

        </Route>)
}

export default PrivateRoute;