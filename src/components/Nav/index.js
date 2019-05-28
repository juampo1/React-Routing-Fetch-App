import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <div className='Container'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo center'>
                    {'Movies App'}
                </Link>
            </div>
        </div>
    </nav>
)

export default Nav;