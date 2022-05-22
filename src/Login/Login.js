import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../image/google.png'
import useFirebase from '../hooks/useFirebase';
import LoginPage from '../image/login.jfif'

const Login = () => {
    const { setError, handleGoogleSignIn, handleEmailChange, handlePasswordChange, processLogin, } = useFirebase();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';



    return (
        <div>
            <h4 class="mt-4 fw-bold" style={{color:'#990000'}}>Please LogIn</h4>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                        <form onSubmit={() =>
                            processLogin()
                                .then(result => {
                                    const user = result.user;
                                    console.log(user);
                                    if (user) {
                                        navigate(from, { replace: true });
                                    }
                                    setError('');
                                })
                                .catch(error => {
                                    setError(error.message);
                                })
                        }>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    onBlur={handleEmailChange}
                                    placeholder="Your Email"
                                    required />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    onBlur={handlePasswordChange}
                                    placeholder="Your Password"
                                    required />
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="form-control text-white fw-bold" style={{ background: '#2E4053' }} >LogIn</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-6">
                        <img class='img-fluid h-100 w-100' src={LoginPage} alt="" />

                    </div>
                    <p>
                        New to Personal-Tutor? <Link class='' to="/register">Create an account</Link>
                    </p>
                </div>
            </div>


            <Button onClick={() =>
                handleGoogleSignIn()
                    .then(result => {
                        const user = result.user;
                        if (user) {
                            navigate(from, { replace: true });
                        }
                        setError('');
                    })
                    .catch(error => {
                        setError(error.message);
                    })} style={{ background: 'grey', border: 'none' }}> <img style={{ height: '30px' }} src={google} alt="" /> GoogleSingIn</Button>

        </div>
    );
};



export default Login;