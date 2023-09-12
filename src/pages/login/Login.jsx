import React, { useContext, useState } from 'react'
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [error, serError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nevigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user)
                dispatch({type:"LOGIN", payload:user})
                nevigate("/")
            })
            .catch((error) => {
                serError(true)
            });
    }
    return (
        <div className='login'>
            <form className='login-form' action="" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input className='login-input' type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
                <input className='login-input' type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="login-button">Login</button>
                {error && <span className='login-error'>wrong email or passwqord</span>}
            </form>
        </div>
    )
}

export default Login;
