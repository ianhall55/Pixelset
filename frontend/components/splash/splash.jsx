import React from 'react';
import GreetingContainer from '../greeting/greeting_container';


const Splash = ({children}) => (

    <div >
      <section className='splash-body'>
        <header className="splash-header">
          <h1 className='splash-logo'>M E M R Y S</h1>
          <GreetingContainer/>
        </header>
        
        {children}
      </section>

    </div>
);

export default Splash;
