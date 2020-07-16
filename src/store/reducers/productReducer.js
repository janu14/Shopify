import * as actionTypes from '../action/actionTypes'

const initialState={
    products:[],
    loading:false,
    error:null,
    productsChosen:[],
    show:false,
    orderedProd:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOAD_PRODUCTS_INIT:{
            return{
                ...state,
                loading:true,
                show:false
            }
        }
        case actionTypes.LOAD_PRODUCTS_SUCCESS:{
            return{
                ...state,
                products:action.products
            }
        }
        case actionTypes.ORDERED_LOAD_PRODUCTS_SUCCESS:{
            return{
                ...state,
                orderedProd:action.orderedProd
            }
        }
        case actionTypes.LOAD_PRODUCTS_FAIL:{
            return{
                ...state,
                error:action.error
            }
        }
        case actionTypes.ADD_PRODUCT_CUSTOMIZE:{
            let addedProduct=state.products[action.productId]
            return{
                ...state,
                show:true,
                productsChosen: state.productsChosen.concat(addedProduct)        
             }
        }
        case actionTypes.MODAL_BACK_HANDLER:{
            return{
                ...state,
                show:false,
                productsChosen:[]
            }
        }
        default:
            return state;
    }
}
export default reducer;