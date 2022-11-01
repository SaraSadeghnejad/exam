import AuthAxios from "./AuthAxios";

const UserPermissionHandler = async () => {
    const user_permissions = await AuthAxios('/users/permissions');
    localStorage.setItem('permissions', JSON.stringify(user_permissions.data.data.data[0]));
}

export default UserPermissionHandler;
