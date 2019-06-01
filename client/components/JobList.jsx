import React from 'react';
import Job from './Job';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import {addJobs} from '../actions/jobs';

const JobList = ({ sheet, jobs}) =>
  <div className={sheet.classes.jobs}>
    {!!jobs.length &&
      <div className={sheet.classes.basket}>
        {jobs.map(job => (
          <Job key={job.id}
               job={job} />
        ))}
      </div>
    }
    {!jobs.length &&
      <h1>Currently there are no Job postings!</h1>
    }
  </div>;

const STYLES = {
  credits: {
    fontSize: 10
  },

  link: {
    textDecoration: 'none'
  },

  basket: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    flexWrap: 'wrap'
  },

  kittens: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    width: '60%'
  },

  button: {
    padding: '1rem 1.5rem',
    background: '#FFAAAA',
    '&:hover': {
      background: '#FFBBBB'
    },
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    margin: '2rem',
    textAlign: 'center',
    userSelect: 'none'
  }
};

export default connect(
  state => ({ jobs: state.jobs }),
  {addJobs}
)(
  useSheet(JobList, STYLES)
);
