import React from 'react';
import styles from './Form.module.css'
import Input from '../UI/Input/Input'
import {connect} from 'react-redux'
import * as action from '../../store/action/index'

class Form extends React.Component {
    state = {
        customizeForm:{
            length:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter the length'
                },
                value:''
            },
            height:{
                elementType:'input',
                elementConfig:{
                type:'text',
                placeholder:'Enter the height'
            },
            value:''
            },
            sleeve:{
                elementType:'select',
                elementConfig:{
                options:[
                    {value:'Sleeveless',displayValue:'Sleeveless'},
                    {value:'Half-Sleeve',displayValue:'Half-Sleeve'},
                    {value:'Full-Sleeve',displayValue:'Full-Sleeve'},
                    {value:'3/4th-Sleeve',displayValue:'3/4th-Sleeve'}
                ]}
            },
            size:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'X-Small',displayValue:'X-Small'},
                        {value:'Small',displayValue:'Small'},
                        {value:'Medium',displayValue:'Medium'},
                        {value:'Large',displayValue:'Large'},
                        {value:'X-Large',displayValue:'X-Large'}
                    ]}
                },
        colour:{
            elementType:'select',
            elementConfig:{
            options:[
                {value:'Cherry Red',displayValue:'Cherry Red'},
                {value:'Green',displayValue:'Green'},
                {value:'Turqouise',displayValue:'Turqouise'},
                {value:'Yellow',displayValue:'Yellow'},
                {value:'Orange',displayValue:'Orange'}
            ]}
        },
        loading:false
    }
}
    inputChangedHandler=(event,inputId)=>{
        const updatedOrderForm={
            ...this.state.customizeForm
        }
        const updatedformEl={
            ...updatedOrderForm[inputId]
        }
        updatedformEl.value=event.target.value;
        updatedOrderForm[inputId]=updatedformEl;
        this.setState({customizeForm:updatedOrderForm})
    }
    
    orderHandler=(event)=>{
            event.preventDefault();
             const formData={}
             for(let formElId in this.state.customizeForm){
                 formData[formElId]=this.state.customizeForm[formElId].value
             }
            const order={
                data:this.props.customizedProducts,
                orderInfo:formData
            }
               this.props.onInsertProduct(order)
               alert('Your customised product has been added')
        }
    render(){
        const formElementsArr=[];
        for(let key in this.state.customizeForm){
            formElementsArr.push({
                id:key,
                config:this.state.customizeForm[key]
            })
        }
        
        return (
            <React.Fragment>
            <div className={styles.ContactData}>
               <form>
                    {formElementsArr.map(formEl=>{
                        return <Input key={formEl.id}
                        elementType={formEl.config.elementType} 
                        elementConfig={formEl.config.elementConfig}
                        value={formEl.config.value}
                        changed={(event)=>this.inputChangedHandler(event,formEl.id)} />
                    })}
                    
            </form>
            </div>
            <div>
            <button onClick={this.orderHandler} className={`${styles.button} ${styles.Success}`}>Order with customized data</button>
            </div>
            </React.Fragment>
        )
    }
    
}

const mapStateToProps=state=>{
    return{
        customizedProducts:state.product.productsChosen,
        loading:state.checkout.loading
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onInsertProduct:(order)=>dispatch(action.insertProducts(order))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
