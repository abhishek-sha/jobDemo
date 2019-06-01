import * as actionTypes from '../actionTypes/jobs';
import { get, post, del } from '../utils/api';

export function addJobs(data) {
  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_JOB
    });
    try {
      const result = await post('/api/addjob',data);
      dispatch({
        type: actionTypes.ADD_JOB_SUCCESS,
        job: result
      });
    } catch(e) {
      console.log(e)
      dispatch({
        type: actionTypes.ADD_JOB_ERROR
      });
    }
  }
}

export function requestJobs() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_JOBS
    });

    try {
      const result = await get('/api/addjob');

      dispatch({
        type: actionTypes.REQUEST_JOBS_SUCCESS,
        jobs: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_JOBS_ERROR
      });
    }
  }
}