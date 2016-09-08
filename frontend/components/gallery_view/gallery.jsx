import React from 'react';
import { url } from 'cloudinary';
import { hashHistory } from 'react-router';


class Gallery extends React.Component {
  constructor(props){
    super(props);

    this.goToFirstPhotoSet = this.goToFirstPhotoSet.bind(this);
  }

  componentDidMount(){
    this.props.fetchGallery(this.props.params.albumId, this.goToFirstPhotoSet);
  }

  goToFirstPhotoSet(){
    let photoSetId = this.props.params.photoSetId;
    let photoSet = this.props.gallery.photo_sets[0];
    if (photoSet && !photoSetId){
      hashHistory.push(`gallery/${this.props.gallery.id}/photo_set/${photoSet.id}`);
    }
  }


  render(){
    if(this.props.gallery.id){
      let cover_url = url(this.props.gallery.cover_photo.public_id + ".jpg", {
        cloud_name: window.cloudinary_options['cloud_name']
      });
      let coverStyle = {backgroundImage: 'url('+cover_url+')'};


      return(

        <div className="gallery-home" >
          <section className="gallery-cover" style={coverStyle}>
            <div className="gallery-title">
              <section className="title">
                <h1>{this.props.gallery.title}</h1>
                <h3>{this.props.gallery.event_date}</h3>
              </section>
            {
              // <section className="gallery-scroll">
              //   <a href="#" >CLICK HERE TO OPEN</a>
              // </section>
            }

            </div>

          </section>
          {this.props.children}
        </div>
      );
    } else {
      return(<div>Gallery</div>);
    }
  }


}


export default Gallery;
