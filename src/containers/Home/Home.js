import React, { Component } from 'react'
import Carousel from '../../components/UI/Carousel/Carousel'
import Options from '../../components/Options/Options'
import Footer from '../../components/UI/Footer/Footer'
import Aux from '../../HOC/Aux'

class Home extends Component {
    render() {
        return (
            <Aux> 
               <Carousel />
               <Options />
               <Footer />
               <main>
              {this.props.children}
              </main> 
              </Aux>
        )
    }
}

export default Home
