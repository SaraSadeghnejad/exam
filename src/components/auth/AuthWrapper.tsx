// material-ui
import { styled } from '@mui/material/styles';
// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //
const AuthWrapper = styled('div')(() => ({
    backgroundImage: `url(${'/static/images/auth/login-bg.png'})`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex'
}));

export default AuthWrapper;
