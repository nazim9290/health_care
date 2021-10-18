import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { default as React, useState } from 'react';
import { useForm } from "react-hook-form";
import InitializeFirebase from './../../firebaseConfig/InitializeFirebase';
import useAuth from './../../hooks/useAuth';
InitializeFirebase()
const Login = () => {
    const {  user,loginwithpopup,googleprovider, githubprovider}=useAuth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (data) =>{
        setEmail((data.email));
        setPassword((data.password));
        loginWithemailpass()
    }

    const auth = getAuth();
    const loginWithemailpass=()=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
    // Signed in 
         const user = userCredential.user;
    // ...
         })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    return (
        <div>
            <h1>Login</h1>
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
            <button onClick={()=>loginwithpopup(googleprovider)}>google</button>
            <button onClick={()=>loginwithpopup(githubprovider)}>github</button>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Login;