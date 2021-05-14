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
        <div  >
          <NavLink to="/" exact={true} className='nav-link' activeClassName='nav-link-active'
            onClick={() => dispatch(logoutStylesThunk())}
          >
            Home
          </NavLink>
        </div>
        <div  >
          <NavLink to="/my-forms" exact={true} className='nav-link' activeClassName='nav-link-active'>
            My Forms
          </NavLink>
        </div>
        <div className='nav-link'>
          <NavLink to="/form-browser" exact={true} className='nav-link' activeClassName="nav-link-active">
            FormBrowser
          </NavLink>
        </div>
        <div  >
          <LogoutButton className='nav-link' activeClassName='nav-link-active' />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
