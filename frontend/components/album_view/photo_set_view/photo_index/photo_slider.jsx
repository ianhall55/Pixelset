import React from 'react';
import Slider from 'react-slick';
import { url } from 'cloudinary';

class PhotoSlider extends React.Component {
  constructor(props){
    super(props);
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

  render() {
  	const settings = {
    	dots: true
    };
    const photos = this.photos();

    return (
    	<div className='photo-slider'>
      	<Slider {...settings}>
        	{photos}
        </Slider>
      </div>
    );
  }
}

export default PhotoSlider;
