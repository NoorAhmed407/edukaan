const iState = {
    products: [],
    newProduct: [],
    loading: false,
    cartProduct: [],
    newProduct: []
}

const productReducer = (state=iState, action)=>{

    if(action.type === "ADD_PRODUCTS"){
        return{
            ...state,
            newProduct: action.payload
        }
    }

<<<<<<< HEAD
const productReducer = (state=iState, action)=>{

    if(action.type === 'ADD_PRODUCTS'){
        return{
            ...state,
            newProduct: action.payload

        }
    }

=======
    if(action.type === "FETCH_PRODUCTS"){
        return{
            ...state,
            products: action.payload
        }
    }
>>>>>>> 67954a5... Finally Updated Post Request on API Adding Prodcuts
    return state;
}


export default productReducer;