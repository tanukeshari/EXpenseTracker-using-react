import { useState, useRef, Fragment} from 'react';
import Alert from 'react-bootstrap/Alert';
import classes from './signUp.module.css';



const Signup = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [loading , setLoading] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    var enteredPassword = passwordInputRef.current.value;

    var enteredConfirmPassword;
    if(isLogin){
    } 
    else {    
      enteredConfirmPassword = confirmPasswordInputRef.current.value;
      if(enteredPassword !== enteredConfirmPassword){
        return <Alert key='danger' variant='danger'>'Check Login details'</Alert>
      };  
    }
    // console.log(enteredPassword, enteredConfirmPassword)

    localStorage.setItem("userEmail", enteredEmail);


 setLoading(true);
 let url;
    if (isLogin) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3JzmW6cI5PsZRKnHiTn2nd3g4YIbjn2g'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3JzmW6cI5PsZRKnHiTn2nd3g4YIbjn2g'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken : true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
         setLoading(false);

      if (res.ok) {
        return res.json();
      } else {
        res.json().then(data => {   // Json also return promises mi,
          let errorMessage = 'Authentication failed'
          if(data && data.error && data.error.message) {
          errorMessage = data.error.message
          }
        return alert(data.error.message);
        // throw new Error(errorMessage);
        })
      }
    })
    .then((data) => {   
      if(data){
      console.log('sign up successful')
      return alert('Success');
      }                   
    })
    .catch((err) => {
        alert(err.message)
    //   return <Alert variant='danger'>{err.message}</Alert>;
    })
  }

return (
  <Fragment>
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"

            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            minLength='7'

            required
          />
        </div>
        {isLogin ? null : <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input
            ref={confirmPasswordInputRef}
            type="password"
            id="password"
            minLength='7'
            required
          />
        </div>}
        <div className={classes.actions}>
          {loading && <p>Sending request...</p> }
          {!loading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          <button
            type="button"
            className={classes.toggle} onClick={()=> (setIsLogin(!isLogin))}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>

    </Fragment>
  );
};

export default Signup;