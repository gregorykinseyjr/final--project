import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from '../../redux/user/userAction';
// import Realm from "realm";


const Header = () => {
    const { isLoggedIn, user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className="header bg-dark container-fluid">
            <div className='logo pb-md-0 pb-4'>

                {isLoggedIn ?
                    <>
                        <Link className='text-primary' to='/'>Gregory Blog</Link>
                        <small className='text-white text-capitalize ps-4'> The Kinsey's the one and only</small>
                    </>
                    :
                    <h3 className='text-primary'>Blog</h3>
                }
            </div>

            <div className="menu">
                {
                    isLoggedIn ?
                        <>
                            <div className='d-flex align-items-center'>
                                <Link to='/'>Home</Link>
                                <div className="dropdown px-5 family_fact">
                                    <button className="btn btn-secondary dropdown-toggle text-uppercase" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Family facts
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link to='/greg' className="dropdown-item text-dark">Greg</Link></li>
                                        <li><Link to='/esraa' className="dropdown-item text-dark">Esraa</Link></li>
                                        <li><Link to='/amare' className="dropdown-item text-dark">Amare</Link></li>
                                        <li><Link to='/alijah' className="dropdown-item text-dark">Alijah</Link></li>
                                        <li><Link to='/ayleah' className="dropdown-item text-dark">Ayleah</Link></li>
                                        <li><Link to='/amira' className="dropdown-item text-dark">Amira</Link></li>
                                    </ul>
                                </div>
                                <Link to='/' onClick={() => dispatch(actionLogout())}>Logout</Link>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link className='ms-5' to='/register'>Register</Link>
                        </>
                }
            </div>
        </div>
    )
};

export default Header;
