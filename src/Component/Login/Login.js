import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router';
import { Link } from "react-router-dom";
import InitializeFirebase from './../../firebaseConfig/InitializeFirebase';
import useAuth from './../../hooks/useAuth';
import "./login.css";

InitializeFirebase()
const Login = () => {
    const auth = getAuth();
    const {
        handleUserLogin, googleLogin,
        githubLogin,user,setUser,setIsLoading,googleprovider,
        githubprovider,error}=useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location=useLocation()
    const history =useHistory()
     
    let redirect_url=location.state?.from || '/home';
    console.log(location.state?.from);
    //google redirect
    const googleRedirect=(provider)=>{
        googleLogin(provider)
        .then(result=>{
          history.push(redirect_url)
        })
    }
    

const handleRegister=()=>{
    history.push("/registration")
}
const handleEmail = (e) =>{
    const email=e.target.value;
    setEmail(email)
 }
 const handlePassword = (e) =>{
     const password= e.target.value;
     setPassword(password)
 }

 const onRegister=()=>{
     if(email && password){
        handleUserLogin(email,password)
     }else{
         alert("email and password is required")
     }
 }
 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
           history.push(redirect_url)
        }
    });
}, [])

    return (

        <div className="login-section">
           <div class="container">
               <div className="row">
      <div class="login ">
         <div class="login-container">
              <h1>Log in</h1>
              <input onBlur={handleEmail} type="email" placeholder="Email" required />
              <input onBlur={handlePassword} type="password" placeholder="Password" required/><br />
              <input type="checkbox" /><span>Remember me</span>
              <Link to="#">Forgot password?</Link>
              <button onClick={onRegister}>log in</button>
              <h4 className="text-danger">{error}</h4>
              <hr /><p>Or Connect With</p><hr />
              <ul>
                  <li onClick={()=>{googleRedirect(googleprovider)}}><i class="fab fa-google fa-2x"></i></li>
                  {/* <li><i class="fab fa-twitter fa-2x"></i></li> */}
                  <li onClick={()=>{googleRedirect(githubprovider)}}><i class="fab fa-github fa-2x"></i></li>
                  {/* <li><i class="fab fa-linkedin-in fa-2x"></i></li> */}
              </ul>
              <div class="clearfix"></div>
              <span class="copyright">&copy;2021</span>  
         </div>
      </div>
      <div class="register">
          <div class="container">
              <i class="fas fa-user-plus fa-5x"></i>
              <h2>Hello !</h2>
              <p>Enter your personal details and connect with us</p>
              <button onClick={handleRegister}>Register <i class="fas fa-arrow-circle-right"></i></button>
          </div>
      </div>  
      </div>
    </div>
            {/* <button onClick={googleLogin}>google</button>
            <button onClick={githubLogin}>github</button> */}
        </div>
    );
};

export default Login;