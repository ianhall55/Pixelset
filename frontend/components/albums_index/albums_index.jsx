import React from 'react';
import HomeHeaderContainer from '../home_header/home_header_container.jsx';

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const albumLines = [];
    for (let id in this.props.albums) {
      albumLines.push(
        <li key={id}>{this.props.albums[id].title}</li>
      );
    }

    return(
      <div className="albums-page">
        <HomeHeaderContainer />
        <h2>Albums</h2>
        <ul>
          {albumLines}
        </ul>

      </div>
    );
  }
}

export default AlbumsIndex;
