import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InitializeFirebase from './../../firebaseConfig/InitializeFirebase';
import "./Registration.css";

InitializeFirebase()

const Registration = () => {

    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (data) =>{
        setEmail((data.email));
        setPassword((data.password));
        singinWithemailpassword(email,password);
    }
    const auth = getAuth();
    const singinWithemailpassword=(email,password)=>{
        
        console.log(email,password);
createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
   console.log(result.user);
  })
  .catch((error) => {
   console.log(error.message);
    // ..
  });
    }

  
  
    return (
        <div className="container">
            <h1>Registration</h1>
            <div className="row">
                <div className="col-md-6 col-lg-8">
                <div className="registration-form">
          <form onSubmit={handleSubmit(onSubmit)}>
      <input className="my-2" {...register("email",{ required: true })} placeholder="Your Email" />
      {errors.email && <span className="error">This field is required</span>}
      
      <input className="my-2" {...register("password",{ required: true , minLength : 6})} placeholder="Your Password" />
      {errors.password && <span className="error">password must be 6 cracter more</span>}
      <input className="my-2"  type="submit" />
      <p>{email}</p>
      <p>{password}</p>
    </form>
        </div>
                </div>
            </div>
        
        </div>
    );
};

export default Registration;