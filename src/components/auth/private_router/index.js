import react from "react";
import { Navigate } from "react-router-dom";

function PrivateRouter ( param ) {
    if(localStorage.getItem("user")){
        return(param)
    }else{
        return(<Navigate to= '/auth/login'/>)
    }
}

export default PrivateRouter