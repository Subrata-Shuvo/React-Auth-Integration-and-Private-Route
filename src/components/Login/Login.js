import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase  from '../../hooks/usefirebase'

const Login = () => {
    const {signinUsingGoogle, signInUsingGitHub} = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signinUsingGoogle}>Google sign in</button>
            <br /> 
            <button onClick={signInUsingGitHub}>GitHub Sign in</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;