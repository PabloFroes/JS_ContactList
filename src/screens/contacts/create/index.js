import React, { Fragment } from "react";
import CreateContact from "../../../components/contact_list/contact/create";
import HeaderLogged from "../../../components/header_logged";


function CreateContactScreen () {
    return(
        <Fragment>
            <HeaderLogged/>
            <CreateContact/>
        </Fragment>
    )
}


export default CreateContactScreen