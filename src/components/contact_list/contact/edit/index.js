import React, { Fragment, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import ContactService from "../../../../services/contacts";
import "../../../../styles/form.css"
import img from "../../../../assets/images/Google_Contacts_logo.png"

function EditContact (props) {
    
    const [contact, setContact] = useState({})
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState("")

    const fetchContact = async () => {
        const contact = await ContactService.get(props.contact.id)
        setContact(contact.data)
        setName(contact.data.name)
        setEmail(contact.data.email)
        setTel(contact.data.tel)
    }

    useEffect(() => {
        fetchContact();
      }, []);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try{
           await ContactService.update(contact._id,{name:name,email:email,tel:tel})
            setRedirect(true)
        }catch (error){
            setError(error)
        }
    }

    const DeleteContact = async () => {

        try {
            await ContactService.delete(contact._id) 
            setRedirect(true)
        } catch (error) {
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
                    <button type="submit">Editar Contato</button>
                </form>
                    <button onClick={DeleteContact} className="deleteButton">Deletar Contato</button>
                {error && <div className="error">error</div>}
            </div>
        </Fragment>
    )

}

export default EditContact