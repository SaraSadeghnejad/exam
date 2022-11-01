const UserInfo = () => localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) :{}

export default UserInfo;