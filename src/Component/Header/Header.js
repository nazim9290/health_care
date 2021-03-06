import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="header">
           
                <div className="mx-auto">
                    <img src="https://i.ibb.co/Dz7DhVc/screenshot-hatchful-shopify-com-2021-10-18-13-53-34.png" alt="" width="300" height="50%" />
                </div>
                <div className="row">
                <div className="col-md-12 navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid p-2">
                <Link to="/home">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/doctors">Doctors</Link>
            <Link to="/appointment">APPOINTMENT</Link>
            <div  class="">
            {user.displayName || user.email ?
                <button onClick={logOut}>Log out</button>
                :
            <Link to="/login">Login</Link>
            }
            <span> {user.displayName || user.email}</span>
            </div>
            </div>
                </div>
            </div>

        </div>
    );
};

export default Header;