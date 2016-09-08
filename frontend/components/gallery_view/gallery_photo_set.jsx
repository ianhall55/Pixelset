import React from 'react';
import PhotoGalleryContainer from './gallery_photos_container.jsx';
import GalleryHeaderContainer from './gallery_header/gallery_header_container.jsx';

class GalleryPhotoSet extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="gallery-content">
        <GalleryHeaderContainer />
        <div className="photo-gallery">
          <PhotoGalleryContainer/>
        </div>
      </section>
    );
  }
}

export default GalleryPhotoSet;
