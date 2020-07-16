import * as actionTypes from '../action/actionTypes';


const initialState={
    loading:false,
    orders:[],
    error:null
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INSERT_PRODUCT_INIT:{
            return{
                ...state,
                loading:true
            }
        }
        case actionTypes.INSERT_PRODUCT:{
            const newOrder={
                ...action.orders
            };
            return {
                ...state,
                loading:false,
                orders:state.orders.concat(newOrder)
            }
        }
        case actionTypes.INSERT_PRODUCT_FAIL:{
            return{
                ...state,
                error:action.error
            }
        }
        default:
            return state     
    }
    
}
 
export default reducer