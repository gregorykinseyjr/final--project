import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { actionLogin } from '../../redux/user/userAction';
import { useDispatch } from 'react-redux';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // HANDLE USER Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, { email, password });
            const { user, token } = res.data;
            dispatch(actionLogin(user, token));
        } catch (err) {
            alert(err.response?.data?.message);
        }
    };

    return (
        <div className='container login_form'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-5'>
                    <form onSubmit={handleLogin}>
                        <h3 className='pb-4'>LOGIN</h3>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input required onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name='email' value={email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input required onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name='password' value={password} />
                        </div>

                        <div className="d-grid my-4">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>

                        <p>Not register yet? <span className='loginNow text-primary'><Link to='/register'>Register now</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
