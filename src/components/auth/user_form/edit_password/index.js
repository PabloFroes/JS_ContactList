import react, { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import UsersService from "../../../../services/users";
import "../../../../styles/form.css"

function EditPassword() {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [status, setStatus] = useState("")

    
    const ChangePassword = async (evt) => {
        evt.preventDefault()
        if(password === confirmPassword){
            try {
                await UsersService.updatePassword(password)
                setStatus("Success")
            }catch (error) {
                setStatus("error")
        }
    }else {
        setStatus("error_confirmation_password")
    }
}

    return (
        <Fragment>
                <form onSubmit={ChangePassword} className="register-form">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e =>  setPassword(e.target.value)} required name="password"></input>
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={e =>  setConfirmPassword(e.target.value)} required name="confirmPassword"></input>
                    <button type="submit">Alterar Senha</button>
                </form>
                {status === "error" &&
                    <label className="error">Problem in password update</label>
                }
                {status === "error_confirmation_password" &&
                    <label className="error">Password don't match</label>
                }
                {status === "success" &&
                    <label className="error">Updated with success</label>
                }
        </Fragment>
    )

}

export default EditPassword