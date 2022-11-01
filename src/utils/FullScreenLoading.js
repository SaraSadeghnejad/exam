import React from "react";
import "./FullScreenLoading.css"

const FullScreenLoading = ({children}) => <>

    <div className="loading">
        <p>{children}</p>
    </div>
</>;

export default FullScreenLoading;