import { useState } from 'react';


export const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");

   

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            email,
            password,
        }
        handleLogin(payload)
    };

    return (
        <div>
            <h3>Login here</h3>
            <form onSubmit={handleSubmit}>
                   <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email here"
            />
            <br/>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <br />
            <input
            type="submit"
            />  
            </form>  
        </div>
    )
}