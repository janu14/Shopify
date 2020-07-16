import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Carousel.module.css'

const DemoCarousel=()=> {
    return (
        <div >
        <Carousel>
                <div className={styles.img1}> 
                    <p className="legend">Legend 1</p>
                </div>
                <div className={styles.img2}>
                    <p className="legend">Legend 2</p>
                </div>
                <div className={styles.img3}>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
    )
}

export default DemoCarousel;
