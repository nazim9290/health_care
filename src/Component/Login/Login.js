import React from 'react';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const {  user,loginwithpopup,googleprovider, githubprovider}=useAuth()
    return (
        <div>
            <button onClick={()=>loginwithpopup(googleprovider)}>google</button>
            <button onClick={()=>loginwithpopup(githubprovider)}>github</button>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Login;