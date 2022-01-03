import React, { Fragment} from "react";
import img from '../../../assets/images/Google_Contacts_logo.png'
import '../../../styles/contact.css'
import createImg from '../../../assets/images/plus.png'
import { Link } from "react-router-dom";

const Contact = (props) => {


    return (
        <Fragment>
            <Link to = '/contacts/create'>
                <div className="contact-card create-button">
                    <img alt='Create Button' src={createImg}></img>
                </div>
            </Link>
            {props.contacts.map((item,key) => 
            <Link to={`/contacts/${item.name}`}>
                <div className="contact-card" key={key} >
                    <img alt='Contact' src={img}></img>
                    <div className="contact-data">
                        <p className="label">Nome:</p> 
                            <p className="data"> {item.name}</p>
                        <p className="label">Email:</p>
                            <p className="data">{item.email}</p>
                        <p className="label">Tel:</p>
                            <p className="data">{item.tel}</p>
                    </div>
                </div>
            </Link>  
            )}
        </Fragment>
    )

}


export default Contact;