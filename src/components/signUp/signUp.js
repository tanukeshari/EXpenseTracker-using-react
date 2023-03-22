    
    import { useState, useRef, Fragment,useContext} from 'react';

    import { NavLink ,useNavigate} from 'react-router-dom';
    import classes from './SignUp.module.css';
    //import AuthContext from '../../store/Auth-Context';
    import { useDispatch } from 'react-redux';
    import { authActions } from '../../store/AuthSlicer';
    
    
    
    const Signup = () => {
      //const authCtx = useContext(AuthContext);
      const dispatch = useDispatch();
      const emailInputRef = useRef();
      const passwordInputRef = useRef();
      const confirmPasswordInputRef = useRef();
      const history = useNavigate();
    
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
            return alert('Check Login details')
          };  
        }
        // console.log(enteredPassword, enteredConfirmPassword)
    
        localStorage.setItem("userEmail", enteredEmail);
    
    
     setLoading(true);
     let url;
    if (isLogin) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7YQFYYb38RQ3WyQeXcvIF48ZpxoEJKK8'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7YQFYYb38RQ3WyQeXcvIF48ZpxoEJKK8'
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
            return alert(errorMessage);
            // throw new Error(errorMessage);
            })
          }
        })
        .then((data) => {   
          if(data){
          console.log('successful',data)
          history('/verifyemail')
          localStorage.setItem("token" , data.idToken);
          dispatch(authActions.login(data.idToken))  //dispatching action
          //authCtx.setToken(data.idToken);
          return  alert('Success');
          }                   
        })
        .catch((err) => {
            alert(err.message)
        
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
            <NavLink to ='/forgotpassword' className={classes.forgot}>Forgot Password</NavLink>
            <div className={classes.actions}>
              {loading && <p>Sending request...</p> }
              {!loading && <button id='btn'>{isLogin ? "Login" : "Create Account"}</button>}
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