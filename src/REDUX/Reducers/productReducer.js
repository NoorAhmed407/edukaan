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

    if(action.type === "ADD_PRODUCT_TO_CART"){
        return{
            ...state,
            cartProduct:
            [
                ...state.cartProduct,
                {
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