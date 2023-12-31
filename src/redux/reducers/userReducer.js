import { FETCH_USERS, SEARCH_USERS, FILTER_USERS, UPDATE_PAGE, UPDATE_LOADING } from '../actions/types';

const initialState = {
  users: [],
  searchTerm: '',
  filters: { domain: '', gender: '', available: '' },
  page: 1,
  limit: 20,
  laoding: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log('FETCH_USERS', action.payload);
      return { ...state, users: action.payload};

    case SEARCH_USERS:
      console.log('SEARCH_USERS', action.payload);
      return { ...state, searchTerm: action.payload };

    case FILTER_USERS:
      console.log('FILTER_USERS', action.payload);
      return { ...state, filters: action.payload };
    case UPDATE_PAGE:
      console.log('UPDATE_PAGE', action.payload);
      return { ...state, page: action.payload };
    
    case UPDATE_LOADING:
      console.log('UPDATE_LOADING', action.payload);
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default userReducer;
