import React from 'react';
import styles from './SideDrawer.module.css'
import { NavLink } from 'react-router-dom';

const sidedrawer=(props)=> {
    return (
        <div>
            <nav className={styles.sidedrawer}>
                <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/orders">Orders</NavLink></li>
                    <li><NavLink to="/product-models">Customize here</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default sidedrawer;
