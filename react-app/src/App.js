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
import TestComp from "./components/TestComp"
import MyForms from "./components/MyForms"
import FormBrowser from "./components/FormBrowser"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
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
      </NavBar>

      <Switch>
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
      </Switch>


      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <div className="main-page">
            <DndProvider backend={HTML5Backend}>
              <SideBar />
              <FormBuilder />
            </DndProvider>
          </div>
        </ProtectedRoute>
        <ProtectedRoute path="/test">
          <TestComp />
        </ProtectedRoute>
        <ProtectedRoute path="/my-forms">
          <MyForms />
        </ProtectedRoute>
        <ProtectedRoute path="/form-browser">
          <FormBrowser />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
