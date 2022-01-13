import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { logOut } from '../redux/Auth/action';

import { Home } from './Home';
import { LoginPage } from './LoginPage';


export const Routees = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut())
    }
    return (
        <div>
            <div style={{display:"flex",gap:"30%",justifyContent:"center",backgroundColor:"#2197a3" }}>
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/login">Login</Link></h3>
                <h3 onClick={handleLogout}><Link to="/login">Logout</Link></h3>
            </div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
       </div>
    )
}