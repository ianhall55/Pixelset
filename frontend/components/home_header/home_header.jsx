import React from 'react';
import { Link } from 'react-router';


const HomeHeader = () => (
  <header className="home-header">
    <h2 className="splash-link">
      { <Link to="/">M</Link> }
    </h2>
    <h2 className="albums-link">
      { <Link to="/home">Albums</Link>}
    </h2>
  </header>
);

export default HomeHeader;
