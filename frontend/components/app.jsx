import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (

    <div>
      <header>
        <h1>Memry React</h1>
        <GreetingContainer/>
      </header>
      {children}
    </div>
);

export default App;
