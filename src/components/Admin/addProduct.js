import React, { Component } from 'react';
import axios from 'axios';

export class AddProduct extends Component {

    state = {
        productName: '',
        productPrice: 0,
        productType: '',
        productImage: {}
    }

    handleName = (e) =>{
        this.setState({
            productName: e.target.value,
            // productImage: e.target.files[0]
        });

        // setTimeout(()=>console.log(this.state),1000);
    }

    
    handlePrice = (e) =>{
        this.setState({
            productPrice: e.target.value
        })
    }
    
    handleType =(e) => {
        this.setState({
            productType: e.target.value
        })
     }
    
    handleImage = (e) =>{
        this.setState({
            ...this.state,
            productImage: e.target.files[0]
        });
            console.log(this.state);
    }


    handleClick = (e) =>{
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('pname',this.state.productName);
        form_data.append('ptype',this.state.productType);
        form_data.append('pprice',this.state.productPrice);
        form_data.append('pimage',this.state.productImage,this.state.productImage.name);
        axios.post('http://localhost:4000/api/products', form_data, {
            header:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            console.log(res.data);
        }).catch(err=>console.log(err));
    }


    render() {
        // console.log(this.props);
        return (
            <div className="container mt-5">
                <h1 className="text-center">Add New Product</h1>
                <form>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="productName"
                        onChange={this.handleName}
                         />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="productPrice"
                        onChange={this.handlePrice}
                         />
                    </div>
                    <div class="form-group">
                        <label>Product Type</label>
                        <select 
                        name="productType"
                        onChange={this.handleType}
                        className="form-control">
                            <option selected>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Producct Image</label>
                        <input 
                        onChange={this.handleImage}
                        type="file"
                        className="form-control-file"
                        name="productImage"
                         />
                    </div>
                    <button
                    onClick={this.handleClick}
                     type="submit" 
                     value="Add Product"
                     className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddProduct;
