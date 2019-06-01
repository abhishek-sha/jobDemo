import * as actionTypes from '../actionTypes/jobs';

const DEFAULT_STATE = [];

const addjob = (state, action) => ([
  ...state,
  action.job
]);

const requestjobs = (state, action) => ([
  ...state,
  ...action.jobs
]);

// const deleteKitten = (state, action) => (
//   state.filter(kitten => kitten.id !== action.kittenId)
// );


export default function jobs(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_JOB_SUCCESS]: addjob,
    [actionTypes.REQUEST_JOBS_SUCCESS]: requestjobs,
    // [actionTypes.DELETE_KITTEN_SUCCESS]: deleteKitten
  }[action.type] || (s => s))(state, action);
}
