import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/Auth-Context';
import classes from './Header.module.css';


const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn= authCtx.isLoggedIn;
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
          <li><NavLink to ='/welcome'>Home</NavLink></li>
          <li><NavLink to ='/expenses'>Expenses</NavLink></li>
          <li><NavLink>About US</NavLink></li>
          
          <li>
            {!isLoggedIn?(<button onClick={loginHandler}>Login</button>):<button onClick={authCtx.logout}>Logout</button>}
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