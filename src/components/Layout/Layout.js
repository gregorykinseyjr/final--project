import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children, handleLogout, isLoggedIn, setIsLoggedIn }) => {
    return (
        <div>
            <Header setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
            {children}
        </div>
    )
}

export default Layout;
