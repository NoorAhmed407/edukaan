import React, { Component } from 'react';
import ProductCard from './productCard';
import fetchProducts from './../REDUX/Actions/fetchProducts'
import { connect } from 'react-redux';

export class MainPageProducts extends Component {

    componentDidMount = () => {
        this.props.updateProducts();
    }



    render() {
        return (
            <div className="container text-center my-5">
                    <h1>Our Products</h1>
                    <div className="row mt-5">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                    </div>
            </div>
        )
    }
}



const mapStateToProps = state =>{
    return {
        productsData: state.product.products
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        updateProducts: () => {dispatch(fetchProducts())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MainPageProducts);
