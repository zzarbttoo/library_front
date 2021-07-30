import React from 'react';
import {Route} from 'react-router-dom';


function PrivateRoute({path , children}){
    return <Route path = {path}>{children}</Route>
}

export default PrivateRoute;