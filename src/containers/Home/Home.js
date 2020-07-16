import React, { Component } from 'react'
import Carousel from '../../components/UI/Carousel/Carousel'
import Options from '../../components/Options/Options'
import Footer from '../../components/UI/Footer/Footer'


class Home extends Component {
    render() {
        return (
            <React.Fragment> 
               <Carousel />
               <Options />
               <Footer />
               <main>
              {this.props.children}
              </main> 
              </React.Fragment>
        )
    }
}

export default Home
