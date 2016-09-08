import React from 'react';
import { Link } from 'react-router';


class GalleryHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let gallery = this.props.gallery;
    let photoSetDetail = this.props.photoSetDetail;
    let photoSets = [];
    if (this.props.photoSets) {
      this.props.photoSets.map ((set) => (
        photoSets.push(
          <Link to={`/gallery/${gallery.id}/photo_set/${set.id}`}>
            <li className={(set.id === photoSetDetail.id) ? "set-selected" : "" }
              key={set.id}>{set.title}</li>
          </Link>
        )
      ));
    }

    return(
      <header className="gallery-header">
        <h2>{this.props.gallery.title}</h2>
        <ul>
          {photoSets}
        </ul>
      </header>
    );
  }
}

export default GalleryHeader;
