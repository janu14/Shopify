import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../HOC/Aux'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    render () {
        let backdrop;
        if(this.props.show){
            backdrop=<Backdrop clicked={this.props.modalClosed} />
        }
        return (
            <Aux>
                {backdrop}
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;