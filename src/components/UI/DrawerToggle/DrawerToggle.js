import React from 'react';
import styles from './DrawerToggle.module.css'

const DrawerToggle=(props)=> (
   <button className={styles.toggle_button} onClick={props.click}>
    <div className={styles.toggle_line1}/>
    <div className={styles.toggle_line2}/>
    <div className={styles.toggle_line3}/>
   </button>
);

export default DrawerToggle;
