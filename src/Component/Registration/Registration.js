import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import InitializeFirebase from './../../firebaseConfig/InitializeFirebase';
import "./Registration.css";

InitializeFirebase()

const Registration = () => {
    const {handleUserRegister,
        handleUserLogin,googleLogin,githubLogin}=useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmail = (e) =>{
       const email=e.target.value;
       setEmail(email)
    }
    const handlePassword = (e) =>{
        const password= e.target.value;
        setPassword(password)
    }
    console.log(email)
    console.log(password);

    const onRegister=(e)=>{
        e.preventDefault()
        if(email && password){
            handleUserRegister(email,password);
        }else{
            alert("email and password is required")
        }
      

    }
  
  
    return (
        <div className="login-section container mx-auto">
        <div class="login">
         <div class="login-container">
              <h1>Registration</h1>
              <form onSubmit={onRegister}>
              <input onBlur={handleEmail} type="email" name="email" placeholder="Email" />
              <input onBlur={handlePassword} type="password" name="password" placeholder="Password" /><br />
              <input type="checkbox" /><span>Remember me</span>
              <br />
              <br />
              <input className="btn btn-primary px-5" type="submit" value="Sign Up"/>
              </form>
              <hr /><p>Or Connect With</p><hr />
              <ul>
                  <li onClick={googleLogin}><i class="fab fa-google fa-2x"></i></li>
                  {/* <li><i class="fab fa-twitter fa-2x"></i></li> */}
                  <li onClick={githubLogin}><i class="fab fa-github fa-2x"></i></li>
                  {/* <li><i class="fab fa-linkedin-in fa-2x"></i></li> */}
              </ul>
         </div>
      </div>
      </div>
    );
};

export default Registration;