import react, { Fragment } from "react";
import EditContact from "../../../components/contact_list/contact/edit";
import HeaderLogged from "../../../components/header_logged";
import {useParams} from "react-router-dom"

function EditContactScreen (props){

    return (
        <Fragment>
            <HeaderLogged/>
            <EditContact contact={useParams()}/>
        </Fragment>
    )

}

export default EditContactScreen