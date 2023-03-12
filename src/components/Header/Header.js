import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';


const MainNavigation = () => {
  const history = useNavigate();
  const loginHandler = ()=>{
    //setLogin(true)
    history('/')
  }
  return (
    <React.Fragment>
    <header className={classes.header}>
    <NavLink to='/'>
        <h2 className={classes.title}>Expense Tracker</h2>
      </NavLink>
      <nav>
        <ul>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink to ='/welcome'>Expenses</NavLink></li>
          <li><NavLink>About US</NavLink></li>
          
          <li>
            <button onClick={loginHandler}>Login</button>
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