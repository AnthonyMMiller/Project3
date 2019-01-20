import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Print from "./pages/Print";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from './components/auth/Login';

function onAuthRequired({ history }) {
  history.push('/login');
}
function App() {
  return (
    <Router>
      <Security
          issuer= {"https://dev-254707.oktapreview.com/oauth2/default"}
          client_id= "0oaio6v9b84q31sUA0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
      <div>
  
        <Switch>
        <Route exact path="/" component={Detail} />
          <SecureRoute path="/books" exact={true} component={Books} />
          <Route
                path="/login"
                render={() => (
                  <Login baseUrl= 'https://dev-254707.oktapreview.com' />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route exact path="/menu" component={Detail} />
            <Route exact path="/menuprint" component={Print} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Security>
    </Router>
  );
}

export default App;
