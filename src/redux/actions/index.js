export const AddProduct=(product)=>{
    return{
        type:"ADD_PRODUCT",
        payload:product
    }
}
export const DelteProduct=(product)=>{
    return{
        type:"DELETE_PRODUCT",
        payload:product
    }
}
export const DelteAllProduct=(product)=>{
    return{
        type:"DELETE_ALL_PRODUCT",
        payload:product
    }
}