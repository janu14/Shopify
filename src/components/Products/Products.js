import React from 'react';
import Product from './Product/Product'
import { connect } from 'react-redux'
import * as action from '../../store/action/index'
import Modal from '../UI/Modal/Modal'
import Confirmation from './Confirmation/Confirmation'


class Products extends React.Component {
    componentDidMount() {
        this.props.onLoadingProd();
    }
    onProductChooseHandler=(key)=>{
        this.props.onAddProduct(key);
    }
    onCancelHandler=()=>{
        this.props.onCancelHandler();
    }
    render() {
        if(this.props.show)
	{
		return <Modal show={this.props.show}>
                    <Confirmation products={this.props.productsChosen} 
                    cancelHandler={this.onCancelHandler} />
                </Modal>
	}
        console.log(this.props.productsChosen)
        return (
                <div>
                    <Product products={this.props.products} prodChosen={(id)=>this.onProductChooseHandler(id)}/>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.product.products,
        loading: state.product.loading,
        productsChosen:state.product.productsChosen,
        show:state.product.show
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadingProd: () => dispatch(action.loadProducts()),
        onAddProduct:(key)=>dispatch(action.addProduct(key)),
        onCancelHandler:()=>dispatch(action.cancelCustomisedProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
