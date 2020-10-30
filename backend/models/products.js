const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    pname: {
        type: String,
        required: [true, 'Name field is required']
    },

    ptype: {
        type: String,
        required: [true, 'Type field is required']

    },

    pprice: {
        type: Number,
        required: [true, 'Price field is required']
    },

    pimage: {
        type: String, 
        required: true
    },

    
});


const Products = mongoose.model('product', ProductSchema);


module.exports = Products;
