import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes"


export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export const logOut = () => {
    return {
        type: LOGOUT,
    }
}

export const loginFailure = (err) => {
    return {
        type: LOGIN_FAILURE,
        payload: err,
    }
}