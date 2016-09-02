import React from 'react';
import { Link } from 'react-router';


class HomeHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let links= "";
    let linkSelected;
    if (this.props.album){
      links = (
        <Link className="albums-link" to={`/album/${this.props.album.id}`}>
            <h2 className="albums-link link-selected">Album</h2>
        </Link>

      );
      linkSelected = "";
    } else (
      linkSelected = "link-selected"
    );

    return(
      <header className="home-header">
        <div className="home-header-link">
          { <Link to="/">
              <h1 className="home-header-link">M</h1>
            </Link> }
        </div>
        <navbar className="home-nav">
            { <Link className="albums-link" to="/home">
                <h2 className={"albums-link " + linkSelected}>Portfolio</h2>
              </Link>}

          {links}
        </navbar>

      </header>
    );
  }
}

export default HomeHeader;
