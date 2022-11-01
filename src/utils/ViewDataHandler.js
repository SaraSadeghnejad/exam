import NotFoundData from "./NotFoundData";
import React from "react";
import Loading from "./Loading";

const ViewDataHandler = ({children, data, NotFoundComponent = null}) => {

    return (
        !data.loading ?
            data.notFound ? NotFoundComponent == null ? <NotFoundData/> : NotFoundComponent :
                children : <Loading/>
    )
}

export default ViewDataHandler;