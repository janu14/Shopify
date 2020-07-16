import React, { Component } from 'react'
import {connect} from 'react-redux'
import styles from './Orders.module.css'
import *  as action from '../../store/action/index'


class Orders extends Component {
    componentDidMount(){
        this.props.onLoadProductChosen();
    }
    render() {
        console.log(this.props.products)
        const flatval=this.props.products.flat(1)
        return (
                <div className={styles.Order}>
                    <p>Please review the list of orders</p>
                    {flatval.map((product,k)=>{
                        return <div key={k} className={styles.productcard}>                
                        {product.products.map((p,i)=>{
                            return <img key={i} className={styles.productimg} src={p[0].url} alt="" />
                            })}
                       </div>
                    })}
                </div>          
        )
    }
}

const mapStateToProps=state=>{
    return{
        products: state.product.orderedProd,
        loading: state.product.loading
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onLoadProductChosen:()=>dispatch(action.loadChosenProducts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders)
