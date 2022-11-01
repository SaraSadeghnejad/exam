const UserCanAccess = _permission => {
    const permissions = localStorage.getItem('permissions') ? JSON.parse(localStorage.getItem('permissions')) : [];
    let access = false;

    Object.keys(permissions).forEach(permission => {
        if (permission == _permission)
             return access = true;
    });
    return access;
}

export default UserCanAccess;
