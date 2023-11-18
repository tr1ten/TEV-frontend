import React from 'react';
import {FaEnvelope,FaGenderless} from 'react-icons/fa'
import {MdDomain} from 'react-icons/md'
import { FaCheck } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
const UserCard = ({ user,noImage }) => {
  const handleDragStart = (e, user) => {
    e.dataTransfer.setData('user', JSON.stringify(user));
  };

  return (
    <div
    className={"card-container"
    + (!user.available || user.mark ? " card-disable" : "")
    }
    draggable={!noImage && user.available && !user.mark}
    onDragStart={(e) => handleDragStart(e, user)}
    >
      {!noImage && <img 
      className="avatar"
      src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />}
      <h3
      >{`${user.first_name} ${user.last_name}`}</h3>
      {/* icon:value */}
      <div className='flex gap-2 items-center'>
        <FaEnvelope className='inline'/>
        <span>{user.email}</span>
      </div>
      <div className='flex gap-2 items-center'>
        <FaGenderless className='inline'/>
        <span>{user.gender}</span>
      </div>
      <div className='flex gap-2 items-center'>
        <MdDomain className='inline'/>
        <span>{user.domain}</span>
      </div>
      
      <div className='flex gap-2 items-center'>
        {user.available ? <FaCheck className='inline text-green-400'/> : <RxCross1 className='inline text-red-500'/>}
        <span>Available</span>
      </div>
      {/* Display other user information */}
    </div>
  );
};

export default UserCard;
