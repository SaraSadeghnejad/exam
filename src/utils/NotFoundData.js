import {Alert} from "reactstrap";
import React from "react";

const NotFoundData = ({message}) => {
    return (
        <Alert color="danger" className='text-center p-2 w-100'>
            اطلاعات مورد نظر یافت نشد.
        </Alert>
    )
}

export default NotFoundData;