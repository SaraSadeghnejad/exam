import DataResponse from "./DataResponse";
import AuthAxios from "./AuthAxios";

const ForceToProfile = async () => {
    let request = await AuthAxios('/users/auth/me');
    let response = await DataResponse(request)[0];
    (response.has_success_payment & response.status != 'completed') ? window.location.href = "/profile" : null;
}
export default ForceToProfile;

