import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SideBar from "./components/SideBar";
import FormBuilder from "./components/FormBuilder"
import MyForms from "./components/MyForms"
import FormBrowser from "./components/FormBrowser"
import Splash from './components/Splash'

// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";


function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    (async () => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>

      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>

      </Switch>


      <Switch>
        <ProtectedRoute path="/home" exact={true}>
          <NavBar>
          </NavBar>

          <div className="main-page">

            <SideBar />
            <FormBuilder />

          </div>
        </ProtectedRoute>
        <ProtectedRoute path="/my-forms">
          <NavBar>
          </NavBar>

          <MyForms />
        </ProtectedRoute>
        <ProtectedRoute path="/form-browser">
          <NavBar>
          </NavBar>

          <FormBrowser />
        </ProtectedRoute>
        <Route exact path="/">
          <Splash />
        </Route>
      </Switch>

    </BrowserRouter >
  );
}

export default App;
