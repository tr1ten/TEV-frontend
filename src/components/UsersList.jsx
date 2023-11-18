import React, { useState } from 'react';
import UserCard from './UserCard';

const UsersList = ({ users, noImage}) => {
  // Apply search and filter logic to users
  
  return (
   <div>
     <div
    className="users-list"
    >
    {
      users.length === 0 ? <h1
       className='text-center text-2xl'
      >No users found :{'('}
      </h1> 
      : null
    }
      {users.map((user,index) => (
        <UserCard noImage={noImage} key={(user.id).toString()+"-"+index.toString()} user={user} />
      ))}
      
    </div>
    
   </div>
  );
};

export default UsersList;
