import { ADD_TEAM_MEMBER,FETCH_TEAMS,UPDATE_TEAM_NAME } from './types';
export const BASE_URL = 'http://127.0.0.1:3001/api/team';

// Action creators
export const fetchTeams = () => dispatch => {
  // Validate selected users, create team, and update state
  // dispatch({ type: CREATE_TEAM, payload: createdTeam });
  fetch(BASE_URL)
    .then(res => res.json())
    .then(teams => dispatch({ type: FETCH_TEAMS, payload: teams }));
};

export const updateTeamName = teamName => dispatch => {
  console.log('UPDATE_TEAM_NAME', teamName);
  dispatch({ type: UPDATE_TEAM_NAME, payload: teamName });
}
export const addMember = user => dispatch => {
  dispatch({ type: ADD_TEAM_MEMBER, payload: user });
}
