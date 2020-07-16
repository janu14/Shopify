import React from 'react';
import styles from './Toolbar.module.css'
import DrawerToggle from '../DrawerToggle/DrawerToggle'
import { NavLink } from 'react-router-dom';


class Toolbar extends React.Component {
    render(){
    return (
        
        <header className={styles.toolbar}>
        <nav className={styles.toolbar_navigation}>
        <div>
            <DrawerToggle click={this.props.clicked}/>
        </div>
         
            <div className={styles.toolbar_menu}>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/">About Us</NavLink></li>
                    <li><NavLink to="/product-models">TailorMade</NavLink></li>
                    <li><NavLink to="/orders">Orders</NavLink></li>
                </ul>
            </div>
            </nav>            
        </header>   
       )}
}

export default Toolbar;
