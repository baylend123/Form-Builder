import React from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { logoutStylesThunk } from '../store/styles'
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className='navbar'>
        <div>
          <NavLink to="/" exact={true} activeClassName="active"
            onClick={() => dispatch(logoutStylesThunk())}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/my-forms" exact={true} activeClassName="active">
            My Forms
          </NavLink>
        </div>
        <div>
          <NavLink to="/form-browser" exact={true} activeClassName="active">
            FormBrowser
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
