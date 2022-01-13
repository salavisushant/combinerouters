import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { Login } from '../components/Login';
import { loginFailure, loginSuccess } from "../redux/Auth/action";

export const LoginPage = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.authReducer.isAuth);

    const handleLogin = ({ email, password }) => {
        if (email === "admin" && password === "admin") {
            dispatch(loginSuccess("FakeToken"))
        } else {
            dispatch(loginFailure("Wrong Credentials"))
        }
    };

    if (isAuth) {
        return <Navigate to={"/"}/>
    }

    return (
        <div>
            <Login handleLogin={handleLogin}/>
        </div>
    )
}