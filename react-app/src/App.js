import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SideBar from "./components/SideBar";
import FormBuilder from "./components/FormBuilder"
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
      <NavBar>
        <>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} >
            <User />
          </ProtectedRoute>
        </>
      </NavBar>

      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <div className="main-page">
            <SideBar />
            <FormBuilder />
          </div>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
