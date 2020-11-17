import axios from 'axios';


const fetchProduct = (id) =>{

      return (dispatch)=>{

            axios.get(`http://localhost:4000/api/products/${id}`)
            .then(response=> dispatch({
                type: 'ADD_PRODUCT_TO_CART',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
            
    }
}


export default fetchProduct;