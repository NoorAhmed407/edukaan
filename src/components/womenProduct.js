import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from './productCard';
import fetchProducts from './../REDUX/Actions/fetchProducts';

export class WomenProduct extends Component {

    componentDidMount = () => {
        this.props.updateProducts();
    }


    render() {
        return (
            <div className="container text-center my-5">
                <h1>Women's Products</h1>
                <div className="row mt-5">
                    {
                    this.props.productData.filter((productData)=>productData.ptype !== "Male")
                       .map((cardData,ind)=>{
                            return(
                                <ProductCard
                                   key={ind}
                                   proImg = {`http://localhost:4000/${cardData.pimage}`}
                                   proType = {cardData.ptype}
                                   proName = {cardData.pname}
                                   proPrice={cardData.pprice}
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
        productData: state.product.products
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateProducts: () => {dispatch(fetchProducts())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WomenProduct)
