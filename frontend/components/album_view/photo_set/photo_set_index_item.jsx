import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
import UpdatePhotoSetContainer from './update_photo_set_form/update_photo_set_form_container.jsx';
import DeletePhotoSetContainer from './delete_photo_set_form/delete_photo_set_container.jsx';
import { Link } from 'react-router';

class PhotoSetIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setView = this.setView.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.state = {
     modalOpen: false,
     style: ModalStyle,
     type: ""
   };
  }

  handleDestroy(e) {
    e.preventDefault();
    this.props.destroyPhotoSet(this.props.photoSet);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
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

  render () {
    let component;
    if (this.state.type === "view") {
      let set = this.props.photoSet;
      component = <UpdatePhotoSetContainer photoSet={this.props.photoSet} closeModal={this.closeModal}/>;
    } else {
      component =
          <DeletePhotoSetContainer photoSet={this.props.photoSet} closeModal={this.closeModal}/>;

    }


    return (
      <li >
        <div className="photo-set-item-options">
          { <Link to={`/album/${this.props.album.id}/photo_set/${this.props.photoSet.id}`} >
              <h3>{this.props.photoSet.title}</h3>
              <div className="photo-set-edit">
                {<a className="set-icon" onClick={this.setView}>
                  <i className="fa fa-pencil"></i>
                </a>}
                {<a className="set-icon" onClick={this.setDelete}>
                  <i className="fa fa-trash-o"></i>
                </a>}
              </div>
            </Link> }
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.state.style}>

          {component}
          <button className="close-modal" onClick={this.closeModal}>Close</button>
        </Modal>
      </li>
    );
  }
}

export default PhotoSetIndexItem;
