import React from 'react';
import Slider from 'react-slick';
import { url } from 'cloudinary';

class GallerySlider extends React.Component {
  constructor(props){
    super(props);

    this.photos = this.photos.bind(this);
  }

  photos(){
    let els = [];
    for ( let id in this.props.photos) {
      els.push(<div key={id}><img src={url(this.props.photos[id].public_id + ".jpg", {
        width: 700, height: 600, crop: 'fill',
        cloud_name: window.cloudinary_options['cloud_name']
      })} /></div>);
    }
    return els;
  }

  componentDidMount(){

  }

  render() {
  	const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.props.targetPhoto
    };
    const photos = this.photos();

    return (
    	<div className='photo-slider'>

      	<Slider ref='slider' {...settings}>
        	{photos}
        </Slider>
      </div>
    );
  }
}

export default GallerySlider;
