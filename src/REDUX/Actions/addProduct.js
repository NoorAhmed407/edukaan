import axios from 'axios';


const addProducts = (data) =>{

      return (dispatch)=>{

            axios.post(`http://localhost:4000/api/products`, data , {
            'headers': {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then(response=> dispatch({
                type: 'ADD_PRODUCTS',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
            
    }
}


export default addProducts;