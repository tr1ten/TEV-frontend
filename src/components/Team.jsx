import React from 'react';
import { connect } from 'react-redux';

const Team = ({ team }) => {
  console.log("Team",team);
  if (!team) {
    return null;
  }
  return (
    <div className='flex flex-col gap-2
      border-2
      border-black
      p-2


    '>
      <div className='flex flex-col gap-2
        border-2
        border-black
        p-2
      '>
        <h1 className='text-2xl'>{team.team_name}</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Team Members</h1>
        <ul className='flex flex-col gap-2'>
          {team.members.map((member, index) => (
            <li key={index}>{member.first_name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
    
};


export default Team;
