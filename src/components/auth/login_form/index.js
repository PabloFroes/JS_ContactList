import React, {Fragment, useState} from "react"
import '../../../styles/form.css'
import { Link, Navigate } from "react-router-dom"
import UsersService from "../../../services/users"

const LoginForm = (e) => { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToContacts, setRedirectToContacts] = useState(false)
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await UsersService.login({email:email,password:password})
            setRedirectToContacts(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToContacts){
        return <Navigate to="/contacts"/>
    }

    return (
    <Fragment> 
        <form onSubmit={HandleSubmit}>
            <div className="register-form">
                <label>Email:</label>
                <input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <div className="form-button">
                <button type="submit">Login</button>
                <label>or</label>
                <Link to={"/auth/register"}><button >Register</button></Link>
                </div>
            </div>
        </form>
        {error && <div className="error" >Email or Password Invalid</div>}
    </Fragment>
    )
}

export default LoginForm