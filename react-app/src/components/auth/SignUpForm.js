import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%'
      }}
    >
      <div id='form-div'
        style={{
          "backgroundColor": "rgb(143, 148, 150)",
          "boxShadow": "black 10px 14px 23px",
          "width": "500px",
          "height": "auto",
          "border": "2px dashed black",
          "fontFamily": "\"Source Code Pro\"",
          marginBottom: '10px'
        }}>
        <form id='form'
          onSubmit={onSignUp}
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
              "color": "rgb(49, 169, 252)",
              "fontFamily": "\"Source Code Pro\""
            }} key='0'>
            Sign up and start building
    </h1>
          <div draggable='true'
            id='elementId' key='1'>
            <input type='text'
              onChange={updateUsername}
              id='input-text'
              placeholder='Username'
              style={{
                "marginTop": "20px",
                "border": "2px solid black",
                "width": "156px",
                "boxShadow": "rgb(0, 0, 0) 5px 4px 6px",
                "borderRadius": "3px",
                "backgroundColor": "rgb(49, 169, 252)"
              }} />
          </div>
          <div draggable='true'
            id='elementId' key='2'>
            <input type='email'
              onChange={updateEmail}
              placeholder='Email'
              style={{
                "marginTop": "20px",
                "border": "2px solid black",
                "width": "156px",
                "boxShadow": "rgb(0, 0, 0) 5px 4px 6px",
                "borderRadius": "3px",
                "backgroundColor": "rgb(49, 169, 252)"
              }} />
          </div>
          <div draggable='true'
            id='elementId' key='3'>
            <input type='text'
              placeholder='Password'
              onChange={updatePassword}
              style={{
                "WebkitTextSecurity": "disc",
                "marginTop": "20px",
                "borderRadius": "3px",
                "backgroundColor": "rgb(49, 169, 252)",
                "border": "2px solid black",
                "width": "156px",
                "boxShadow": "rgb(0, 0, 0) 5px 4px 6px"
              }} />
          </div>
          <div draggable='true'
            id='elementId' key='4'>
            <input type='text'
              onChange={updateRepeatPassword}
              placeholder='Repeat Password'
              style={{
                "WebkitTextSecurity": "disc",
                "marginTop": "20px",
                "borderRadius": "3px",
                "backgroundColor": "rgb(49, 169, 252)",
                "border": "2px solid black",
                "width": "156px",
                "boxShadow": "rgb(0, 0, 0) 5px 4px 6px"
              }} />
          </div>
          <button type='submit'
            id='submit'
            draggable='true'
            style={{
              "marginTop": "10px",
              "fontFamily": "\"Source Code Pro\"",
              "border": "2px solid",
              "boxShadow": "black 5px 3px 5px",

              "borderRadius": "2px",
              "width": "96px"
            }} key='5'>
            Sign Up
    </button>
          <button
            onClick={() => history.push('/login')}
            id='submit'
            draggable='true'
            style={{
              "marginTop": "10px",
              "fontFamily": "\"Source Code Pro\"",
              "border": "2px solid",
              "boxShadow": "black 5px 3px 5px",

              "borderRadius": "2px",
              "width": "96px"
            }} key='5'>
            Login
    </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
