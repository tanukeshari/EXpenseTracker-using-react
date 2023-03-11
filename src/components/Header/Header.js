import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classes from './Header.module.css';


const MainNavigation = () => {

  return (
    <React.Fragment>
    <header className={classes.header}>
    <NavLink to='/'>
        <h2 className={classes.logo}>Expense Tracker</h2>
      </NavLink>
      <nav>
        <ul>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink>Expenses</NavLink></li>
          <li><NavLink>About US</NavLink></li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
    <Outlet/>
    </React.Fragment>
  );
};

export default MainNavigation;