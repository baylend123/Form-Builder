import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { logoutStyles } from "../../store/styles"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(logoutStyles());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
