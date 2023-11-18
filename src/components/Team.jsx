import React from 'react';
import { connect } from 'react-redux';

const Team = ({ team }) => {
  console.log("Team",team);
  if (!team) {
    return null;
  }

  return (
    <div 
     className='card-container'
    >
      <h2>Team Details</h2>
      <p>Team Name: {team.team_name}</p>
      <h3>Selected Users:</h3>
      <ul>
        {team.members.map(member => (
          <li key={member.id}>{`${member.first_name} ${member.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
};


export default Team;
