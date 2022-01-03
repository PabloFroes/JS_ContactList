import React, { Fragment, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import UserService from "../../../services/users";
import "../../../styles/form.css"
import EditPassword from "./edit_password";

function EditUser (props) {
    
    const [user, setUser] = useState( JSON.parse(localStorage.getItem('user')))
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState("")

    const fetchUser = async () => {
        setName(user.name)
        console.log(user)
        setEmail(user.email)
        console.log(email)
        setPassword(user.password)
    }

    useEffect(() => {
        fetchUser();
      }, []);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try{
           await UserService.update({name:name,email:email})
           window.alert("User updated")
            setRedirect(true)
        }catch (error){
            setError({error})
        }
    }

    const DeleteContact = async () => {

        try {
            if(window.confirm("Are you sure wish to delete this account?")){await UserService.delete() 
            setRedirect(true)}
        } catch (error) {
            setError(error)
        }
    }


    if(redirect){
        return <Navigate to='/auth/login'/>
    }

    return(
        <Fragment>
            <div className="register-feed contact">
                <form onSubmit={HandleSubmit} className="register-form">
                    <label>Nome:</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <br/>
                    <button type="submit">Editar Usuário</button>
                </form>
                {error && <div className="error">{error}</div>}
                <button onClick={DeleteContact} className="deleteButton">Deletar Usuário</button>
            </div>
        </Fragment>
    )

}

export default EditUser