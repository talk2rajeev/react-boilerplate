//this is my simple class based COMPONENT

import React from 'react';
import Dashboard from './src/Dashboard';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World App!!!
            <Dashboard />
         </div>
      );
   }
}

export default App;