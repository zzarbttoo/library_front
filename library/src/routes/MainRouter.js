
import LoginPage from "../pages/LoginPage"

const { Switch, Redirect, Route } = require("react-router-dom");

function MainRouter(){
    return (
      <Switch>
        <Route path = "/">
          <LoginPage/>
        </Route>
        

        
      </Switch>
    );
}

export default MainRouter;