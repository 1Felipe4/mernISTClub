import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';

const Layout = ({children, match })=> {

    const isActive = (path) => {
       return match.path === path ? {color: '#F382FC', fontWeight: 'bolder' }  : {color: '#fff'} ;
    };

    const nav = ()=> (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive('/')}> Home </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link" style={isActive('/signup')}>Signup </Link>
            </li>
            <li className="nav-item">
                <Link to="/signin" className="nav-link" style={isActive('/signin')}>Signin </Link>
            </li>
        </ul>
    )
    return (
        <Fragment>
            {nav()}
            <div className='container'>
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(Layout);