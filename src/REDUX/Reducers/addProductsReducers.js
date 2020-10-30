const iState = {
    productName: "",
    productPrice: 0,
    productType: "",
    productImage:null
}



const productReducer = (state=iState, action)=>{
   

    if(action.type === 'UPDATE_PRODUCT_NAME'){
        return{
            ...state,
            productName: action.payload
        }
    }

    if(action.type === 'UPDATE_PRODUCT_TYPE'){
        return{
            ...state,
            productType: action.payload

        }
    }
    
    if(action.type === 'UPDATE_PRODUCT_PRICE'){
        return{
            ...state,
            productPrice: action.payload

        }
    }

    
    if(action.type === 'UPDATE_PRODUCT_IMAGE'){
        console.log(action);
        return{
            ...state,
            productImage: action.payload

        }
    }

    return state;
}


export default productReducer;