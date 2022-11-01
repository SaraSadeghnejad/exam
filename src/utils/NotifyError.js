import {toast} from "react-toastify";

const NotifyError = err => {
    let errors = err.response.data.message ? err.response.data.message: "خطا!"
    toast.error(errors, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default NotifyError