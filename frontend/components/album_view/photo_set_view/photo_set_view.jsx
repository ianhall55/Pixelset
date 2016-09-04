import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../../modal_styles';


const defaultPhotoSet = {
  title: ''
};

const PhotoSetView = ({photoSet = defaultPhotoSet, children}) => {
  return(
    <div className="photo-set-view">
      {photoSet.title}

    </div>
  );
};


export default PhotoSetView;
