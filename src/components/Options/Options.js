import React from 'react';
import styles from './Options.module.css'

function Options() {
    return (
        <div>
        <div className={styles.main}>
            <div className={styles.options}>
            <span className={styles.option}>Customize</span>
            </div>
            <div className={styles.options}>
            <span className={styles.option}>Tailor Made</span>
            </div>
            <div className={styles.options}>
            <span className={styles.option}>Enquire Us</span>
            </div>
        </div>
        <section className={styles.who}>
        <div className={styles.whoimg}></div>
        <div className={styles.whocontent} >
            <h2><span className="text-primary" >Who</span> We Are</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dignissimos ipsam esse cupiditate recusandae iste perspiciatis id nam delectus nihil.</p>
            <h2>Our Team</h2>
            <ul className={styles.list}>
                <li>Name 1 CEO</li>
                <li>Name 2 CFO</li>
                <li>Name 3 Lead</li>
                <li>Name 4 Investment manager</li>
                <li>Name 5 Senior accountant</li>
            </ul>


        </div>
    </section>
    </div>
    )
}

export default Options;
