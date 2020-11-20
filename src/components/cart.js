import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartCard from './cartData';

export class Cart extends Component {

    state = {
        selectedItems: []
    }

    componentDidMount = () =>{
        this.setState({
            selectedItems: this.props.cartData
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container text-center">
                <h1 className='my-5'>Shopping Cart</h1>
                {
                    this.state.selectedItems.length ? this.state.selectedItems.map((item,ind)=>{
                        return(<CartCard
                            key = {ind}
                            itemName = {item.productName}
                            itemImage = {`http://localhost:4000/${item.productImage}`}
                        /> )
                        
                    }) : <h5>No Item In your Cart</h5>
                }
            </div>
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
