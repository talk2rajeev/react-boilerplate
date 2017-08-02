import React from 'react';
import Loader from './HOC/Loader';

const UserList = (props) => {
      return (
         <div>
            {
                props.users.map((item, i)=>{
                    return(
                        <div key={i}>
                            <h4>{item.name}</h4>
                            <p>{item.email} | {item.phone} | {item.website}</p>
                        </div>
                    )
                })
            }
         </div>
      ); 
}

export default Loader(UserList);