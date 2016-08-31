import React from 'react';
import HomeHeaderContainer from '../home_header/home_header_container.jsx';

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="albums-page">
        <HomeHeaderContainer />


      </div>
    );
  }
}

export default AlbumsIndex;
