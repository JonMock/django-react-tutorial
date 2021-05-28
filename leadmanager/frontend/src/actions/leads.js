import axios from 'axios';
import { useDispatch } from 'react-redux';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET_LEADS
export const getLeads = () => dispatch => {
  axios
    .get('/api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}

// DELETE LEAD

export const deleteLead = (id) => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
}

// ADD_LEADS
export const addLead = (lead) => dispatch => {
  axios
    .post('/api/leads/', lead)
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}