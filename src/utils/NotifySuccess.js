import {toast} from "react-toastify";

const NotifySuccess = (message = 'عملیات با موفقیت انجام شد.') => {

    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default NotifySuccess;