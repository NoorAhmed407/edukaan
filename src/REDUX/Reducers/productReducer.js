const iState = {
    products: [],
    newProduct: [],
    loading: false,
    cartProduct: [],
}

const productReducer = (state=iState, action)=>{


    if(action.type === "FETCH_PRODUCTS"){
        return{
            ...state,
            products: action.payload
        }
    }



    if(action.type === 'PRODUCT_REMOVED_FROM_CART'){
        let target = state.cartProduct;
        console.log(action.payload);
        for (var i = 0; i < target.length; i++){
            if(target[i].productID === action.payload){
                target = target.filter(item=> item.productID !== action.payload);
            }
        }
        return{
            ...state,
            cartProduct: target

        }
    }

    if(action.type === "ADD_PRODUCT_TO_CART"){
        return{
            ...state,
            cartProduct:
            [
                ...state.cartProduct,
                {
                    productQuantity: 1,
                    productID: action.payload._id,
                    productName: action.payload.pname,
                    productPrice: action.payload.pprice,
                    productImage: action.payload.pimage
                }
            ]

        }
    }


    return state;
}


export default productReducer;