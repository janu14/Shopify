import * as actionTypes from './actionTypes'
import axios from 'axios'

export const insertProductInit=()=>{
    return{
        type:actionTypes.INSERT_PRODUCT_INIT
    }
}
export const insertProductSuccess=(order)=>{
    return{
        type:actionTypes.INSERT_PRODUCT,
        orders:order
    }
}
export const insertProductFail=(error)=>{
    return{
        type:actionTypes.INSERT_PRODUCT_FAIL,
        error:error
    }
}
export const insertProducts=(order)=>{
    return dispatch=>{
        dispatch(insertProductInit());
        axios.post('https://burger-react-946d4.firebaseio.com/orders_dress.json', order)
         .then(response=>
            {
                console.log(response.data)
               dispatch(insertProductSuccess(response.data)) 
            })
         .catch(error=>{
            dispatch(insertProductFail(error.message))
         })
    }
}
