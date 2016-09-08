import React from 'react';
import Masonry from 'react-masonry-component';
import { url } from 'cloudinary';
import cloudinary from 'cloudinary';
import GalleryPhotoItem from './gallery_photo_item';
import Modal from 'react-modal';
import GallerySlider from './gallery_slider/gallery_slider.jsx';
import {SliderStyle} from './gallery_slider/gallery_slider_style';


const masonryOptions = {
    transitionDuration: 500
};

var isBrowser = (typeof window !== 'undefined');
var imagesloaded = isBrowser ? require('imagesloaded') : null;

class PhotoGallery extends React.Component {
    constructor(props){
      super(props);

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.goToPhoto = this.goToPhoto.bind(this);
      this.state = {
       modalOpen: false,
       style: SliderStyle,
       targetPhoto: 0
      };
    }


    closeModal(){
      this.setState({modalOpen: false});
    }

    openModal(){
      this.setState({modalOpen: true});
    }

    goToPhoto(e){
      e.preventDefault();
      this.setState({targetPhoto: e.currentTarget.value});
      this.openModal();
    }


    render() {

      if (this.props.photos){
        var childElements = [];
        let i = 0;
        for (let id in this.props.photos) {
          childElements.push(
            <GalleryPhotoItem id={this.props.photos[id].id}
                photo={this.props.photos[id]} gallery={this.props.gallery}
                goToPhoto={this.goToPhoto} value={i}/>
          );
          i += 1;
        }

        return (
            <Masonry
                className={'photo-gallery-masonry'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
              {childElements}
              <Modal
                isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                style={this.state.style} >

                <GallerySlider targetPhoto={this.state.targetPhoto}
                  photos={this.props.photos} closeModal={this.closeModal}/>

              </Modal>
            </Masonry>
        );
      } else {
        return(<div>Photos</div>);
      }
    }
}

export default PhotoGallery;
