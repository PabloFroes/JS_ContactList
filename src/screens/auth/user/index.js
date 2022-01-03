import react, { Fragment } from "react";  
import EditUser from "../../../components/auth/user_form";
import HeaderLogged from "../../../components/header_logged";

function UserScreen () {

    return (
        <Fragment>
            <HeaderLogged/>
            <EditUser/>
        </Fragment>
    )

}


export default UserScreen