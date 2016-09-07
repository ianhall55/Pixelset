import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../../modal_styles';

class PhotoSelectionHeader extends React.Component {
  constructor(props){
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.determineComponent = this.determineComponent.bind(this);
    this.setView = this.setView.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle,
     type: ""
    };
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  determineComponent(e){
    e.preventDefault();
    if (this.state.type === "view") {
      return(<div>View Modal</div>);
    } else {
      return(<div>Delete Modal</div>);
    }

  }

  setView(e){
    e.preventDefault();
    this.setState({ type: "view" });
    this.openModal();
  }

  setDelete(e){
    e.preventDefault();
    this.setState({ type: "delete" });
    this.openModal();
  }

  render(){
    let component;
    if (this.state.type === "view") {
      component = <div>View Modal</div>;
    } else {
      component = <div>Delete Modal</div>;
    }

    if (this.props.selected.length > 0) {
      return(
        <header className="photo-selection-header">
          <div>
            <label>{`${this.props.selected.length} selected`}</label>
            <span onClick={this.props.selectAll} >{'Select all'}</span>
            <span onClick={this.props.clearSelection} >{"Clear Selection"}</span>
          </div>
          <div>
            <button onClick={this.setView}>View</button>
            <button onClick={this.setDelete}>Delete</button>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={this.state.style}>

            {component}
            <button onClick={this.closeModal}>Close</button>
          </Modal>
        </header>
      );
    } else {
      return(
        <header className="photo-selection-header">

        </header>
      );
    }
  }
}

export default PhotoSelectionHeader;
