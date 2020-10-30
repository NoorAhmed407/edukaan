import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a  className="navbar-brand" href="/">E-Dukaan</a>
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
                                 <a href="" className="nav-link">Home</a>  
                            </li>
                            <li className="nav-link">
                                 <a className="nav-link" href="">Men's Collection</a>  
                            </li>
                            <li className="nav-link">
                                <a href="" className="nav-link">Women's Collection</a>  
                            </li>
                            <li className="nav-link">
                                <a href="" className="nav-link">
                                    Cart <i className="fa fa-cart-plus fa-1x"></i>
                                </a>
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

