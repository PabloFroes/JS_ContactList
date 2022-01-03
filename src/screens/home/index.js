import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import '../../styles/style.css'
import '../../styles/home.css'
import ContactImg from "../../assets/images/Google_Contacts_logo.png"

const HomeScreen = () => (
    <Fragment>
        <Header/>
        <div className="default-background">
            <section className="welcome">
                <img className="welcome-img" alt="" src={ContactImg}/>
                <div className="tittle">
                    <h1>Welcome</h1>
                </div>
                <div className="text">
                    <p></p>
                </div>
                <hr/>
                <div className="links">
                    <Link to="/auth/register" className="link register">
                            <span>Register Now</span>
                    </Link>
                    <Link to="/auth/login" className="link login">
                            <span>Login</span>
                    </Link>
                </div>
            </section>
        </div>
    </Fragment>
)

export default HomeScreen