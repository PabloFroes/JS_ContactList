import React, { Fragment,useState } from "react";
import { Navigate } from "react-router-dom";
import ContactService from "../../../../services/contacts";
import "../../../../styles/form.css"
import img from "../../../../assets/images/Google_Contacts_logo.png"

function CreateContact () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState("")

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            await ContactService.create({name:name,email:email,tel:tel})
            setRedirect(true)
        }catch{
            setError(error)
        }
        
    }

    if(redirect){
        return <Navigate to='/contacts'/>
    }

    return(
        <Fragment>
            <div className="register-feed contact">
                <img alt="Contact img" src={img}></img>
                <form onSubmit={HandleSubmit} className="register-form">
                    <label>Nome:</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <label>Tel:</label>
                    <input type='text' value={tel} onChange={e => setTel(e.target.value)}></input>
                    <br/>
                    <button type="submit">Criar Contato</button>
                </form>
                {error && <div className="error">error</div>}
            </div>
        </Fragment>
    )

}

export default CreateContact