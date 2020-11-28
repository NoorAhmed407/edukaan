import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartCard from './cartData';

export class Cart extends Component {

    state = {
        selectedItems: [],
        totalAmmount: 0
    }

    componentDidMount = () =>{
        this.setState({
            selectedItems: this.props.cartData
        });
        
        let total=0;
        for (var i = 0; i < this.props.cartData.length; i++){
            total = total + this.props.cartData[i].productPrice;
        } 
        console.log(total);
        this.setState({totalAmmount: total});
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                            <h1 className='my-5 text-center'>Shopping Cart</h1>
                <div className="row">
                    <div className="col-md-6">
                            <div className="col-md-12 text-center">
                            {
                                this.state.selectedItems.length ? this.state.selectedItems.map((item,ind)=>{
                                    return(<CartCard
                                        key = {ind}
                                        itemName = {item.productName}
                                        itemImage = {`http://localhost:4000/${item.productImage}`}
                                        itemPrice = {item.productPrice}
                                    /> 
                                    )
                                    
                                }) : <h5>No Item In your Cart</h5>
                            }

                            
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container d-flex justify-content-center">
                                <h3 className="text-center">Total Price = {this.state.totalAmmount}</h3>
                        </div>
                    </div>
                </div>
                
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
        return{
            cartData: state.product.cartProduct
        }
}

const mapDispatchToProps = dispatch => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
