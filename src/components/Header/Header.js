import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/Auth-Context';
import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../store/AuthSlicer';


const MainNavigation = () => {
  //const authCtx = useContext(AuthContext);
  //const isLoggedIn= authCtx.isLoggedIn;
  const dispatch = useDispatch();
  const idToken = useSelector(state => state.auth.idToken); 
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
            {!idToken?(<button onClick={loginHandler}>Login</button>):<button onClick={()=>{
              dispatch(authActions.logout());
            }}>Logout</button>}
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