import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Cart extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1 className='my-5'>Shopping Cart</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
