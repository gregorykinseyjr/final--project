import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    // MAKE API CALL FOR USER REGISTRATION
    const handleRegsiter = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`, { firstName, lastName, email, password });
            alert(res.data.message);
            history.push('/login');
        } catch (err) {
            alert(err.response?.data?.message);
        };
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-5 py-5'>
                    <form onSubmit={handleRegsiter}>
                        <h3 className='pb-4'>REGISTER</h3>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input required onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" name='firstName' value={firstName} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input required onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" name='lastName' value={lastName} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input required onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name='email' value={email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input required onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name='password' value={password} />
                        </div>
                        <div className="d-grid my-4">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                        <p>Already have an account? <span className='loginNow text-primary'><Link to='/login'>Login now</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Register;
