import * as actionTypes from './actionTypes'
import axios from 'axios'

export const loadProdInit=()=>{
    return{
        type:actionTypes.LOAD_PRODUCTS_INIT
    }
}
export const loadProdSuccess=(products)=>{
    return{
        type:actionTypes.LOAD_PRODUCTS_SUCCESS,
        products:products
    }
}
export const orderloadProdSuccess=(orderedproducts)=>{
    return{
        type:actionTypes.ORDERED_LOAD_PRODUCTS_SUCCESS,
        orderedProd:orderedproducts
    }
}

export const loadProdFail=(err)=>{
    return{
        type:actionTypes.LOAD_PRODUCTS_FAIL,
        error:err
    }
}

export const loadProducts=()=>{
    return dispatch=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(response=>
            {
               dispatch(loadProdSuccess(response.data.slice(1,41)))
         })
         .catch(error=>{
             dispatch(loadProdFail(error))
         })

    }
}
export const addProduct=(id)=>{
    return{
        type:actionTypes.ADD_PRODUCT_CUSTOMIZE,
        productId:id
    }
}
export const cancelCustomisedProduct=()=>{
    return{
        type:actionTypes.MODAL_BACK_HANDLER
    }
}
export const loadChosenProducts=()=>{
    return dispatch=>{
        axios.get('https://burger-react-946d4.firebaseio.com/orders_dress.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    products: [res.data[key].data],
                    id: key,
                    orderInfo: res.data[key].orderInfo
                })
            }
               dispatch(orderloadProdSuccess(fetchedOrders))
         })
         .catch(error=>{
             dispatch(loadProdFail(error))
         })

    }
}