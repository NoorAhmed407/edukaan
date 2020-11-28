import React, { Component } from 'react';

export class CartCard extends Component {

    state = {
        productQuantity: 1,
    }



    decreaseProduct = (e) => {
        
        e.preventDefault();
        this.setState(
            {
                productQuantity: this.state.productQuantity-1
            }
        );
        

        if( this.state.productQuantity <=  0 ){
            this.setState({productQuantity: 0});
        }
    
        

    }


    increaseProduct = (e) => {
        e.preventDefault();
        this.setState(
            {
                productQuantity: this.state.productQuantity+1
            }
        );
    }



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
                           <h4 className="text-center mt-2">Rs {this.props.itemPrice}</h4>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button 
                                type="button" 
                                onClick={this.decreaseProduct}
                                className={`btn btn-danger`}>-</button>
                                <button 
                                type="button"
                                onClick={this.increaseProduct}
                                className="btn btn-primary">+</button>
                                <span 
                                className="float-right">Quantity: {this.state.productQuantity}</span>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CartCard;
