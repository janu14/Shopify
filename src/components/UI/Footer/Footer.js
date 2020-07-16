import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div>
             <footer className={styles.footer}>
        <div class="f-container bg-dark text-center py-1">
            <p>Copyright &copy; 2019, Financial Website, All Rights Reserved</p>
        </div>
        
    </footer>
        </div>
    )
}

export default Footer;
