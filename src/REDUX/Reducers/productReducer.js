const iState = {
    products: [],
    newProduct: [],
    loading: false,
    cartProduct: [],
}

const productReducer = (state=iState, action)=>{

    // if(action.type === "ADD_PRODUCTS"){
    //     return{
    //         ...state,
    //         newProduct: action.payload
    //     }
    // }

    if(action.type === "FETCH_PRODUCTS"){
        return{
            ...state,
            products: action.payload
        }
    }
    return state;
}


export default productReducer;