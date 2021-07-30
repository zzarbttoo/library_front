import React from 'react';
import {Route} from 'react-router-dom';


function PublicRoute({path, children}){
    return <Route path = {path}>{children}</Route>
}

export default PublicRoute;