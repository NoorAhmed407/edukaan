import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from './productCard';
import fetchProducts from './../REDUX/Actions/fetchProducts';
import fetchProduct from './../REDUX/Actions/fetchProduct';

export class WomenProduct extends Component {

    componentDidMount = () => {
        this.props.updateProducts();
    }


    handleClick = (e,proID) =>{
        e.preventDefault();
        console.log(proID);
        this.props.getSingleProduct(proID);

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
        productData: state.product.products
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateProducts: () => {dispatch(fetchProducts())},
        getSingleProduct: (data)=> {dispatch(fetchProduct(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WomenProduct)
