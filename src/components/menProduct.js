import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from './productCard';
import fetchProducts from './../REDUX/Actions/fetchProducts';
import fetchProduct from './../REDUX/Actions/fetchProduct';

export class MenProduct extends Component {

    componentDidMount = () => {
        this.props.updateProducts();
    }

    handleClick = (e,proID) =>{
        e.preventDefault();
        const cartData  = this.props.cartData;
        console.log(cartData);
        let bool = true;
        for (var i=0; i < cartData.length; i++) {
            if (cartData[i].productID === proID) {
                alert('This Product is already in Cart');
                bool = false;
            }
        }

        return bool ? this.props.getSingleProduct(proID) : bool;

    }


    render() {
        return (
            <div className="container text-center my-5">
                <h1>Men's Products</h1>
                <div className="row mt-5">
                    {
                    this.props.productData.filter((productData)=>productData.ptype !== "Female")
                       .map((cardData,ind)=>{
                            return(
                                <ProductCard
                                   key={ind}
                                   proImg = {`http://localhost:4000/${cardData.pimage}`}
                                   proType = {cardData.ptype}
                                   proName = {cardData.pname}
                                   proPrice={cardData.pprice}
                                   clickbtn = {(event)=> this.handleClick(event,cardData._id)}
                                   />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        productData: state.product.products,
        cartData: state.product.cartProduct 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateProducts: () => {dispatch(fetchProducts())},
        getSingleProduct: (data)=> {dispatch(fetchProduct(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenProduct)
