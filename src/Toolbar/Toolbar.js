import React from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.css';

const toolbar = props => (
    <header>
        <nav>
            <div></div>
            <div><a href="/">The Logo</a></div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;