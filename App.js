import React from 'react';
import axios from 'axios';

import Dashboard from './src/Dashboard';
import UserList from './src/UserList';

class App extends React.Component {
   constructor(){
       super();
       this.state = {userlist: []};
   } 
   componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        this.setState({userlist: res.data});
       });
   } 
   render() {
      return (
         <div>
            Hello World App!!!
            <Dashboard />
            <UserList users={this.state.userlist}/>
         </div>
      );
   }
}

export default App;