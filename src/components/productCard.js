import React, { Component } from 'react';
import FemaleCoat from './../img/femalecoat.jpg';

export class ProductCard extends Component {
    render() {
        return (
            <div className="col-md-4 mb-4">
                <div class="card">
                    <img class="card-img-top" src={FemaleCoat} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <button className="btn btn-block btn-primary">Add To Cart</button>
                    </div>
                </div>    
            </div>
        )
    }
}

export default ProductCard;
