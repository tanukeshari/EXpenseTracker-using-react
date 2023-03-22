import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
//import AuthContext from '../../store/Auth-Context';
import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../store/AuthSlicer';
import { themeActions } from "../../store/ThemeSlicer";


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
          <li><NavLink to='/about'>About US</NavLink></li>
          
          <li>
            {!idToken?(<button onClick={loginHandler}>Login</button>):<button onClick={()=>{
              dispatch(authActions.logout());
            }}>Logout</button>}
          </li>
          <div
              style={{ height: "25px" }}
              className="form-check mt-2 ml-3 form-switch"
            >
              <input
                onChange={() => dispatch(themeActions.changeTheme())}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="text-white">Night mode</label>
            </div>
        </ul>
      </nav>
      <div></div>
    </header>
    <Outlet/>
    </React.Fragment>
  );
};

export default MainNavigation;