import React ,{ Fragment, useRef } from 'react';
import axios from "axios";
import classes from "./CompleteProfile.module.css";

function CompleteProfile(props) {
   
    const fullName = useRef();
    const photourl = useRef();

    const profileSubmitHandler = async (e) => {
        e.preventDefault();

        const enteredFullName = fullName.current.value;
        const enteredphotourl = photourl.current.value;
        

        let token = localStorage.getItem('token')

        try {
            const res = await axios.post(
       "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB7YQFYYb38RQ3WyQeXcvIF48ZpxoEJKK8",
       {
         idToken: token,
         displayName: enteredFullName,
         photoUrl : enteredphotourl,
       }
     );
         alert('Updated successfully')
         console.log(res);
        
     } catch (e) {
           alert(e.response.data.error.message);
     }
    }

     return (
     <Fragment>
        <div className={classes.container}>
            <div className={classes.header1}>
                <div className={classes.quote}> Winners never quit, Quitters never win.</div>
                <div className={classes.profile}> Your profile is 64% completed. A completed profile has a higher chances of landing a job. </div>
            </div>
             <form className={classes.form}>
                <div className={classes.contactDetail1}>
                    <div className={classes.main}>
                    <div className={classes.header}>
                        <div className={classes.ContactDetail}> Contact Details </div>
                        <button className={classes.cancel}>Cancel</button>
                </div>

                <div className={classes.input}>
                    <div className={classes.left}>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='name'/>
                        <div className={classes.fullName}>Full Name : </div>
                        <input type="text" ref={fullName} required/>
                    </div>
                    <div className={classes.right}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2301/2301129.png" alt='profile url'/>
                        <div className={classes.photourl}>Profile Photo url : </div>
                        <input type="text" ref={photourl} required/>
                    </div>
                </div>
                    <button onClick={profileSubmitHandler} className={classes.update} type="submit">
                        Update
                    </button>
                </div>
             </div>
            </form>
        </div>
     </Fragment>
    );
}


export default CompleteProfile;