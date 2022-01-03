import React,{Fragment} from "react";
import Header from "../../../components/header";
import '../../../styles/style.css'
import '../../../styles/form.css'
import RegisterForm from "../../../components/auth/register_form";

const RegisterScreen = () => (
    <Fragment> 
        <Header/>
        <div className="default-background register">
            <div className="register-feed">
                <RegisterForm/>
            </div>
        </div>
    </Fragment>
)

export default RegisterScreen