import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">ProductShop</Link>
            </div>
        </nav>
    )
}

export default Header
