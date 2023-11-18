import { FETCH_USERS, SEARCH_USERS, FILTER_USERS } from './types';
const BASE_URL = 'https://tev-backend.vercel.app/api/users';
export const fetchUsers = (
  filters,
  searchTerm,
  page = 1,
  limit = 20,
) => dispatch => {
  // Fetch users from API or database
  let query = `?page=${page}&limit=${limit}`;
  if(filters.domain) query += `&domain=${filters.domain}`;
  if(filters.gender) query += `&gender=${filters.gender}`;
  if(filters.available) query += `&available=${filters.available}`;
  if(searchTerm) query += `&search=${searchTerm}`;
  fetch(BASE_URL+query,
    )
    .then(res => res.json())
    .then(users => {
      ;dispatch({ type: FETCH_USERS, payload: users })});
};

export const searchUsers = searchTerm => dispatch => {
  dispatch({ type: SEARCH_USERS, payload: searchTerm });
};

export const filterUsers = filters => dispatch => {
  dispatch({ type: FILTER_USERS, payload: filters });
};

export const updatePage = page => dispatch => {
  dispatch({ type: 'UPDATE_PAGE', payload: page });
};