import {useEffect, useState} from "react";
import {IsAuthenticated} from "../api/authentication/index";
import {Redirect} from "react-router-dom";
import React from "react";

const RedirectIfNotAuthenticate = ({children}) => {

    const [authState, setAuthState] = useState(true);

    useEffect(() => {
        IsAuthenticated().then()
            .catch(error => {
                setAuthState(false)
            });
    }, []);

    return (!authState ? <Redirect to='/'/> : children);

}

export default RedirectIfNotAuthenticate;