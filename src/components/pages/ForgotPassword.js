import React, {useState,useRef}from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import classes from './ForgotPassword.module.css';

function ForgotPassword(props) {
    const emailInputRef=useRef();
    const history= useNavigate('');

    const [sendingLink, setSendingLink] = useState(false);
    const passwordResetHandler=async()=>{
        setSendingLink(true);
        const email = emailInputRef.current.value;

        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDdFFH3PYqzMJ8Frau8Bcz5lS2GLl8LH-Q'
            ,{
                requestType: 'PASSWORD_RESET',
                email: email,
            });
            alert('Link send successfully');
            alert('Check your email inbox and reset password');
            history('/');
        } catch(e) {
            alert(e.response.data.error.message);
           }
           setSendingLink(false);
    };

    

    return (
        <div>
            <div className={classes.main}>

            <div className={classes.form}>
                <label>Enter the email with which you have registerd</label>
                <input type='email' ref={emailInputRef} />
            {!sendingLink && <Button variant='info' type='submit' onClick={passwordResetHandler}>Send link</Button>}
            {sendingLink && <p>Sending request...</p>}
                <NavLink to="/">Login Page</NavLink>
            </div>

</div>
            {/* <NavLink to="/">Login Page</NavLink> */}
        </div>
    );
}

export default ForgotPassword;