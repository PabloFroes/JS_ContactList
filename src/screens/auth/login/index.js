import React,{Fragment} from "react";
import Header from "../../../components/header";
import '../../../styles/style.css'
import '../../../styles/form.css'
import LoginForm from "../../../components/auth/login_form";

const LoginScreen = () => (
    <Fragment> 
        <Header/>
        <div className="default-background">
            <div className="register-feed">
               <LoginForm/>
            </div>
        </div>
    </Fragment>
)

export default LoginScreen