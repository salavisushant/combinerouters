import { useSelector } from 'react-redux';
import { ToDoInput } from '../components/ToDoInput'
import { Navigate } from 'react-router-dom';


export const Home = () => {
    const isAuth = useSelector((state) => state.authReducer.isAuth);

    const token = useSelector((state) => state.authReducer.token);

    if (!isAuth) {
        return <Navigate to={'/login'}/>;
    }

    return (
        <div>
            <h5>Token is :{token}</h5>
            <ToDoInput/>
        </div>
    )
}
