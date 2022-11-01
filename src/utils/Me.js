const Me = () => localStorage.getItem('me') ? JSON.parse(localStorage.getItem('me')) : {};

export default Me;