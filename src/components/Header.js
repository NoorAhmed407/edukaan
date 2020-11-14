import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link  className="navbar-brand" to="/">E-Dukaan</Link>
                    <button 
                    className="navbar-toggler"
                    type="button" data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-link">
                                 <Link  to="/" className="nav-link">Home</Link>  
                            </li>
                            <li className="nav-link">
                                 <Link className="nav-link" to="menproducts">Men's Collection</Link>  
                            </li>
                            <li className="nav-link">
                                <Link to="/womenproducts" className="nav-link">Women's Collection</Link>  
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="nav-link">
                                    Cart <i className="fa fa-cart-plus fa-1x"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


const mapStateToProps = state => {
    return{

    }
};

const mapDispatchToProps = dispatch => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

