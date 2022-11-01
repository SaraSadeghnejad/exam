// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'
import Axios from "../../../utils/Axios";

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = data => {
    const regex = /"/ig;

    return dispatch => {
        dispatch({
            type: 'LOGIN',
            data,
            config,
            [config.storageTokenKeyName]: data[config.storageTokenKeyName],
            [config.storageRefreshTokenKeyName]: data[config.storageRefreshTokenKeyName]
        })

        // ** Add to user, accessToken & refreshToken to localStorage
        localStorage.setItem('userData', JSON.stringify(data))
        localStorage.setItem(config.storageTokenKeyName, JSON.stringify(data.accessToken).replaceAll(regex, ''))
        localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(data.refreshToken).replaceAll(regex, ''))
    }
}

// ** Handle User Logout
export const handleLogout = () => {
    return dispatch => {
        dispatch({type: 'LOGOUT', [config.storageTokenKeyName]: null, [config.storageRefreshTokenKeyName]: null})
        Axios.post('/users/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(config.storageTokenKeyName)}`
            }
        });

        // ** Remove user, accessToken & refreshToken from localStorage
        localStorage.removeItem('userData');
        localStorage.removeItem('me');
        localStorage.removeItem(config.storageTokenKeyName)
        localStorage.removeItem(config.storageRefreshTokenKeyName)
    }
}
