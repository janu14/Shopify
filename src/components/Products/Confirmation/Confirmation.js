import React from 'react';
import styles from './Confirmation.module.css'
import Form from '../../Form/Form'

const Confirmation=(props)=> {
    return (
        <React.Fragment>
           <div className={styles.producttumb}>
           <button className={styles.button} onClick={props.cancelHandler}><i class="fa fa-times" aria-hidden="true"></i></button>
           {props.products.map((product,i)=>{
            return <img className={styles.img} key={i} src={product.url} alt="" />
           })}
           <div>
           
           </div>
           </div>
           <div className={styles.form}>
           <Form />
           </div>
        </React.Fragment>
    )
}

export default Confirmation;
