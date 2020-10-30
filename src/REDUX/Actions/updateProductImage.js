const updateProductImage = (updateImage) =>{
    console.log(updateImage);
    return {
        type: 'UPDATE_PRODUCT_IMAGE',
        payload: updateImage
        }
}


export default updateProductImage;