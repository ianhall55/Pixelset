import React from 'react';
import { url } from 'cloudinary';

const PhotoIndexItem = ({ photo }) => (

  <li >
    <img src={url(photo.public_id + ".jpg", {
      width: 100, height: 100,
      cloud_name: window.cloudinary_options['cloud_name']
    })} />

  </li>
);

export default PhotoIndexItem;
