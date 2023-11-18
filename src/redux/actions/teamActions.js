import { ADD_TEAM_MEMBER,FETCH_TEAMS,UPDATE_TEAM_NAME,CLEAR_TEAM } from './types';
export const BASE_URL = 'https://tev-backend.vercel.app/api/team';

export const fetchTeams = () => dispatch => {
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

export const resetTeam = () => dispatch => {
  dispatch({ type: CLEAR_TEAM });
};