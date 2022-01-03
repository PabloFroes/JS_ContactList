import React,{ Fragment }from "react";
import HeaderLogged from "../../components/header_logged";
import ContactList from "../../components/contact_list";

const ContactsScreen =() => {
    return(
    <Fragment>
        <HeaderLogged/>
        <ContactList/>
    </Fragment>
    )
}

export default ContactsScreen