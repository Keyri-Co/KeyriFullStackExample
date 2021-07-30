import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { HomeScreen, SignUpScreen, LoginScreen, TodoScreen } from "./screens";
import { MainContentWrapper } from "./styles";
import { clearAxiosConfig } from "./utils/api";
import { Routes } from "./utils/constants";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(true);

  useEffect(() => {
    return () => clearAxiosConfig();
  }, []);

  const onChoosingScreen = () => setShouldRedirect(false);

  return (
    <Router>
      <MainContentWrapper>
        <Switch>
          <Route exact path={Routes.Home}>
            <HomeScreen onChoosingScreen={onChoosingScreen} />
          </Route>
          <Route path={Routes.SignUp}>
            <SignUpScreen
              setIsLoggedIn={setIsAuth}
              shoulRedirect={shouldRedirect}
            />
          </Route>
          <Route path={Routes.Login}>
            <LoginScreen
              setIsLoggedIn={setIsAuth}
              shoulRedirect={shouldRedirect}
            />
          </Route>
          {isAuth && (
            <Route path={Routes.Todo}>
              <TodoScreen />
            </Route>
          )}
          <Redirect from="*" to="/" />
        </Switch>
      </MainContentWrapper>
    </Router>
  );
}

export default App;
