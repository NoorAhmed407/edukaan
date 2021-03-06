import React, { Component } from 'react';
import { connect } from 'react-redux';
import updatePriceDecrease from '../REDUX/Actions/updatePriceDecrease';
import updatePriceIncreas from '../REDUX/Actions/updatePriceIncrease';

export class CartCard extends Component {

    state = {
        productQuantity: 1,
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
                                <h5
                                className=" m-2 float-right">Quantity: {this.state.productQuantity}
                                </h5>
                               
                                <button 
                                type="button" 
                                onClick={this.decreaseProduct}
                                className={`btn btn-danger`}>-</button>
                                <button 
                                type="button"
                                onClick={this.increaseProduct}
                                className="btn btn-primary">+</button>
                                <button 
                                type="button"
                                onClick={this.props.deleteproduct}
                                className="btn btn-warning">Delete</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch =>{
    return{
        handleIncrease: ()=>{dispatch(updatePriceIncreas())},
        handleDecrease: ()=>{dispatch(updatePriceDecrease())}
    }
}



export default connect(null,mapDispatchToProps)(CartCard);
