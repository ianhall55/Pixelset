import React from 'react';

export default class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy(e) {
    e.preventDefault();
    this.props.destroyAlbum(this.props.album);
  }
  render () {
    return (
      <li>
        {this.props.album.title}
        {<button onClick={this.handleDestroy}>Delete</button>}
      </li>
    );
  }
}
