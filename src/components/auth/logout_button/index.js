import react from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import '../../../styles/header.css'

function LogoutButton () {

    const [redirectToHome, setRedirect] = useState(false)

    async function logout ( ){
        await localStorage.removeItem('user')
        await localStorage.removeItem('token')
        setRedirect(true)
    }

    if(redirectToHome){
        return(
            <Navigate to="/"/>
        )
    }


    return(
                <button id="register-button" onClick={logout}>Logout</button>
    )

}

export default LogoutButton