import React from 'react';

const Loader = (UserList)=>{
    return class Loader extends React.Component {
        render(){
            console.log(this.props);
            return this.props.users.length===0 ? <h1>Loading...</h1> : <UserList {...this.props} />
        }
    }
}

export default Loader;