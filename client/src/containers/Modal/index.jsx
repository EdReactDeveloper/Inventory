import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'; 
import ModalWrapper from '../../components/Modal'
import Form from './ModalForm'; 
import {modalHandler} from '../../store/actions/modal'; 

class ModalContainer extends Component {

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }
  
  render() {
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
    return ReactDOM.createPortal( <ModalWrapper {...this.props}>
      <Form {...this.props}/>
    </ModalWrapper> , this.root
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modal.isOpen,
  }
}

export default connect(mapStateToProps, {modalHandler})(ModalContainer);

// MODAL STRUCTURE: 
// ModalContainer(attached to the document) =>
// => ModalForm(returns one of forms) =>
// => FormContainer( form logical elements ) =>
// => PageForm (form markup)