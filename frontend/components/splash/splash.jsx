import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const Splash = ({children}) => (

    <div>
      <header>
        <h1>M E M R Y S</h1>
        <h2>Splash Page</h2>
        <GreetingContainer/>
      </header>
      {children}
    </div>
);

export default Splash;
