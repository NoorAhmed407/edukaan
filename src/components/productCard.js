import React, { Component } from 'react';
// import FemaleCoat from './../img/femalecoat.jpg';

export class ProductCard extends Component {
    render() {
        const style = {
            imgStyle:{
                height: '400px',
                width: '100%',
            }
        }
        return (
            <div className="col-md-4 mb-4">
                <div className="card">

                    <img class="card-img-top" 
                    style={style.imgStyle}
                    src={this.props.proImg} 
                    alt="Card image cap" />
                    
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.proName}
                        </h5>

                        <p className="card-text">
                            Product Type: {this.props.proType}
                        </p>

                        <h3 className="text-cente">
                            Rs: {this.props.proPrice}
                        </h3>

                    </div>
                    <div class="card-footer">
                        <button className="btn btn-block btn-primary">
                            Add To Cart
                        </button>
                    </div>
                </div>    
            </div>
        )
    }
}

export default ProductCard;
