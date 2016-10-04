import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router';

const Splash = ({children}) => (

    <div >
      <section className='splash-body'>
        <header className="splash-header">
          <h1 className='splash-logo'>P I X E L S E T</h1>
          <GreetingContainer/>
        </header>
        <div className="splash-content">
          <h2 className="splash-main-message">STYLISH PHOTO COLLECTIONS</h2>
          <h3 className="splash-sub-message">The new way to share your photos</h3>
          {<Link to="/signup" >
            <button className="splash-main-button">GET STARTED</button>
           </Link>}
        </div>
        {children}
      </section>

    </div>
);

export default Splash;
