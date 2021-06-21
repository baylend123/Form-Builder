import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()
  const onLogin = async (e) => {

    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault()
    await dispatch(login('demo@aa.io', 'password'));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: '10%',
    }}>
      <div id='form-div'
        style={{
          "backgroundColor": "rgb(143, 148, 150)",
          "boxShadow": "black 12px 12px 24px",
          "width": "500px",
          "height": "auto",
          "border": "3px dashed rgb(0, 0, 0)",
          "fontFamily": "\"Source Code Pro\"",
          "borderRadius": "19px",
          marginBottom: '10px'
        }}>
        <form id='form'

          style={{
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "width": "500px",
            "height": "auto",
            "fontFamily": "\"Source Code Pro\"",
            marginBottom: '10px'
          }}>

          <h1 id='form-header'
            style={{
              "top": "10px",
              "color": "rgb(71, 175, 255)",
              "fontFamily": "\"Source Code Pro\""
            }} key='0'>
            React Form Builder
    </h1>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div draggable='true'
            id='elementId' key='1'>
            <input
              onChange={updateEmail}
              value={email}
              type='text'
              id='input-text'
              placeholder='Email'
              style={{
                "fontFamily": "\"Source Code Pro\"",
                "marginTop": "20px",
                "border": "2px solid black",
                "width": "149px",
                "boxShadow": "rgb(71, 175, 255) 5px 5px 7px",
                "borderRadius": "3px",
                "backgroundColor": "rgb(71, 175, 255)"
              }} />
          </div>
          <div draggable='true'
            id='elementId' key='2'>
            <input
              onChange={updatePassword}
              value={password}
              type='text'
              placeholder='Password'
              style={{
                "fontFamily": "\"Source Code Pro\"",
                "WebkitTextSecurity": "disc",
                "marginTop": "20px",
                "borderRadius": "3px",
                "backgroundColor": "rgb(71, 175, 255)",
                "border": "2px solid black",
                "width": "149px",
                "boxShadow": "rgb(71, 175, 255) 5px 5px 7px"
              }} />
          </div>
          <button type='submit'
            id='submit'
            draggable='true'
            style={{
              "marginTop": "10px",
              "fontFamily": "\"Source Code Pro\"",
              "border": "2px solid",
              "boxShadow": "black 7px 6px 12px",
              "borderRadius": "3px",
              "width": "117px"
            }} key='3'
            onClick={onLogin}
          >
            Login
    </button>
          <button
            type='submit'
            onClick={() => history.push('/sign-up')}
            id='normal-button'
            draggable='true'
            style={{
              "marginTop": "10px",
              "fontFamily": "\"Source Code Pro\"",
              "border": "2px solid",
              "boxShadow": "black 7px 6px 12px",
              "borderRadius": "3px",
              "width": "117px"
            }} key='4'>
            Sign Up
    </button>
          <button id='normal-button'
            onClick={demoLogin}
            draggable='true'
            style={{
              "marginTop": "10px",
              "fontFamily": "\"Source Code Pro\"",
              "border": "2px solid",
              "boxShadow": "black 7px 6px 12px",
              "borderRadius": "3px",
              "width": "117px"
            }} key='5'>
            Demo User
    </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
