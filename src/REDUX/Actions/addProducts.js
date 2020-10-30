import axios from 'axios';


const addProduct = (productdata) =>{

      return (dispatch)=>{

            axios.post('http://localhost:4000/api/products', productdata)
            .then(response=> dispatch({
                type: 'ADD_PRODUCTS',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
    }
}


export default addProduct;