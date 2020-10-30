import productReducer from './productReducer';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
     product: productReducer,
});


export default rootReducer;