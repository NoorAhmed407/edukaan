import React, { Component } from 'react';

export class CartCard extends Component {
    render() {
        return (
            <div className="container my-5">
                    <div className="card text-center">
                        <div className="card-header">
                            {this.props.itemName}
                        </div>
                        <div className="card-body">
                            <img 
                             src={this.props.itemImage}
                             alt='default'
                             style={{height:"200px", width: "200px"}}
                           />
                        </div>
                        <div className="card-footer text-muted">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-danger">-</button>
                                <button type="button" className="btn btn-primary">+</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CartCard;
