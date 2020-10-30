import productReducer from './productReducer';
import addProductReducer from './addProductsReducers';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
     product: productReducer,
     addProduct: addProductReducer
});


export default rootReducer;