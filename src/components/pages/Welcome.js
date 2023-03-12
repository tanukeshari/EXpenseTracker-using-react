import React from 'react';
import { NavLink } from 'react-router-dom';


function Welcome(props) {
    return (
        <div>
           <h1>Welcome to Expense Tracker APP</h1> 
           <div >Your profile is incomplete
            <NavLink to='/completeprofile'>completeprofile</NavLink>
           </div>
        </div>   
    );
}

export default Welcome;