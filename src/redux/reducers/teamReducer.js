import { ADD_TEAM_MEMBER, CLEAR_TEAM, FETCH_TEAMS, UPDATE_TEAM_NAME } from '../actions/types';

const initialState = {
  teams: [],
  currentTeamName: '',
  currentTeamMembers: [],
  
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, teams: action.payload };
    case UPDATE_TEAM_NAME:
      return { ...state, currentTeamName: action.payload };
    case ADD_TEAM_MEMBER:
      return { ...state, currentTeamMembers: 
        [...state.currentTeamMembers, action.payload]
      };
      case CLEAR_TEAM:
        return { ...state, currentTeamName: '', currentTeamMembers: [] };

    default:
      return state;
  }
};

export default teamReducer;
