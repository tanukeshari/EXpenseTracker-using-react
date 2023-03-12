import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container } from 'react-bootstrap';


function VerifyEmail(props) {
    //const[notification,setNotification] = useState('Please Verify your email to proceed')
    const emailConfirmationHandler= async()=>{
        try{
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB7YQFYYb38RQ3WyQeXcvIF48ZpxoEJKK8'
            ,{
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("token"),
            }
        );
        
        alert('Please Check your Inbox and Verify email adress')
        }
        catch(e){
            alert(e.response.data.error.message)
        }
    }
    return (
        <Container className=''>
           <h2>EMAIL CONFIRMATION</h2> 
           <Button className="me-2" variant='info' onClick={emailConfirmationHandler}>Verify</Button>
           
        </Container>
    );
}

export default VerifyEmail;