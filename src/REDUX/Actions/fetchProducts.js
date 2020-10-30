import axios from 'axios';


const fetchProducts = () =>{

      return (dispatch)=>{

            axios.get(`http://localhost:4000/api/products`)
            .then(response=> dispatch({
                type: 'FETCH_PRODUCTS',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
            
    }
}


export default fetchProducts;