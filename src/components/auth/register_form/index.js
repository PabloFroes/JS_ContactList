import React, {Fragment, useState} from "react"
import '../../../styles/form.css'
import { Link, Navigate } from "react-router-dom"
import UsersService from "../../../services/users"

const RegisterForm = (e) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToLogin, setRedirectToLogin] = useState(false)
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UsersService.register({name:name,email:email,password:password})
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToLogin){
        return <Navigate to="/auth/login"/>
    }

    return (
    <Fragment> 
        <form onSubmit={HandleSubmit}>
            <div className="register-form">
                <label>Name: </label>
                <input type="text" required name="name" value={name} onChange={e => setName(e.target.value)}></input>
                <label>Email:</label>
                <input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <div className="form-button">
                <button type="submit">Register</button>
                <label>or</label>
                <Link to={"/auth/login"}><button >Login</button></Link>
                </div>
            </div>
        </form>
        {error && <div className="error" >Email or Password Invalid</div>}
    </Fragment>
    )
}

export default RegisterForm