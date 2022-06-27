import React, { Fragment, } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';



// <Tab LinkComponent={NavLink} to="/Add" label="Add product" /> //


const Header = () => {

    let navigate = useNavigate();

    const handleLogout = evt => {
		logout(() => {
			navigate('/signin');
		});
	};


    const showNavigation = () => (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to='/' className='navbar-brand'>
            <i class="fas fa-gamepad fa-lg"></i>
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
    
            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/products' className='nav-link'>
                                    <i className='fas fa-shopping-bag'></i> Products
                                </Link>
                            </li>
                        
                            <li className='nav-item'>
                                <Link to='/signup' className='nav-link'>
                                    <i className='fas fa-edit'></i> Sign Up
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signin' className='nav-link'>
                                    <i className='fas fa-sign-in-alt'></i>{' '}
                                    Sign In
                                </Link>
                            </li>
                        </Fragment>
                    )}
    
                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                       
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/products' className='nav-link'>
                                    Products
                                </Link>
                            </li>
                           
                        </Fragment>
                    )}
    
                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                            <li className='nav-item text-white'>
                                <Link to='/Add'
                                   
                                    className='nav-link'
                                >
                                    <i className='fas fa-plus'></i>{' '}
                                    Add Products
                                </Link>
                            </li>
                            <li className='nav-item '>
                                <Link to='/products' className='nav-link'>
                                    <i className='fas fa-shopping-bag'></i> Products
                                </Link>
                            </li>
                        </Fragment>
                    )}
    
                    {isAuthenticated() && (
                        <Fragment>
                            <li className='nav-item'>
                                <button
                                    className='btn btn-link text-secondary text-decoration-none pl-3'
                                    onClick={handleLogout}
                                >
                                    <i className='fas fa-sign-out-alt'></i>{' '}
                                    Logout
                                </button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );
    
    return <header id='header'>{showNavigation()}</header>;
 
}

export default Header


//




