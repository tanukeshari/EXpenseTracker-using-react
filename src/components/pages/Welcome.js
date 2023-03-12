import React from 'react';
import { NavLink } from 'react-router-dom';


function Welcome(props) {
    return (
        <div>
           <h1>Welcome to Expense Tracker APP</h1> 
           <div style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)',
  'padding': '20px'}}>Your profile is incomplete...
            <NavLink to='/completeprofile'>CompleteProfile Now</NavLink>
           </div>
        </div>   
    );
}

export default Welcome;