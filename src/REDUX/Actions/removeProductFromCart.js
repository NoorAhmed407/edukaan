const removeProductFromCart = (proID) =>{

    return  {
                type: 'PRODUCT_REMOVED_FROM_CART',
                payload: proID
            }
        

    
}

export default removeProductFromCart;