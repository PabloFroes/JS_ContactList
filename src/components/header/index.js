import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Contacts_logo.png"
import '../../styles/header.css'

const Header = () => (
    <div className="header-background">
        <section id="logo">
            <Link to="/"><img src={logo} alt="Contact List Logo" ></img></Link>
        </section>
        <section id="header-buttons">
            <Link to="/auth/register">
                <button id="register-button">Register</button>
            </Link>
            <Link to="/auth/login">
                <button id="login-button">Login</button>
            </Link>
        </section>
    </div>
)

export default Header