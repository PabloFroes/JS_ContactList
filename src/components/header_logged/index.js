import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/images/Contacts_logo.png"
import '../../styles/header.css'
import LogoutButton from "../auth/logout_button";

const HeaderLogged = () => {
    if(!localStorage.getItem('user')){
        return(<Navigate to= '/auth/login'/>)
    }else{
        return (
            <div className="header-background">
                <section id="logo">
                    <Link to="/contacts"><img src={logo} alt="Contact List Logo" ></img></Link>
                </section>
                <section id="header-buttons">
                    <LogoutButton/>
                    <Link to="/auth/edit">
                        <button id="login-button">User</button>
                    </Link>
                </section>
            </div>
        )
    }
}

export default HeaderLogged