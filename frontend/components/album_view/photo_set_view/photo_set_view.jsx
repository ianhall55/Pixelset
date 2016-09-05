import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';
import PhotoIndexContainer from './photo_index/photo_index_container.jsx';

const defaultPhotoSet = {
  title: ''
};

class PhotoSetView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photoSet = this.props.photoSet;
    if (photoSet) {
      return(
        <div className="photo-set-view">
          <PhotoIndexContainer photoSet={this.props.photoSet} />

        </div>
      );
    } else {
      return(
        <div>PhotoSetView</div>
      );
    }
  }
}

export default PhotoSetView;
