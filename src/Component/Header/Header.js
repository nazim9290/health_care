import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/terms">Terms & policy</Link>

          {user.name&&  <button>{user.name}</button>}
            {user.name ?
                <button onClick={logOut}>Log out</button>
                :
            <Link to="/login">Login</Link>}
            <Link to="/registration">Registration</Link>

            <Link to="/appointment">APPOINTMENT</Link>
        </div>
    );
};

export default Header;