import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="header">
            <img className="w-10" src="https://i.ibb.co/Dz7DhVc/screenshot-hatchful-shopify-com-2021-10-18-13-53-34.png" alt="" />
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