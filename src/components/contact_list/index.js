import React, { useEffect, useState } from "react";
import ContactService from "../../services/contacts";
import Contact from "./contact";
import '../../styles/contact.css'

const ContactList = () => {
     const [contacts, setContacts] = useState([])

     async function fetchContacts (){
        const response = await ContactService.index();
        //Sort Array by Contact name
        const responseSorted = await response.data.sort(function (a, b) {
            return a.name > b.name ? 1 : -1 ;
          });
        setContacts (responseSorted)
     }

     useEffect(() => {
        fetchContacts();
      }, []);

      return(
          <div className="contact-list">
              <Contact contacts={contacts}/>
          </div>
      )

}

export default ContactList