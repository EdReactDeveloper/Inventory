import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'; 
import Modal from '../../components/Modal'
import Form from './ModalForm'; 
import {modalHandler} from '../../store/actions/modal'; 

class ModalContainer extends Component {

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }
  
  render() {
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
    return ReactDOM.createPortal( <Modal {...this.props}>
      <Form {...this.props}/>
    </Modal> , this.root
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modal.isOpen,
  }
}

export default connect(mapStateToProps, {modalHandler})(ModalContainer);