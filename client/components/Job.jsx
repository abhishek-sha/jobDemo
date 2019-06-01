import React, { PropTypes } from 'react';
import useSheet from 'react-jss';

const Job = ({ sheet, job }) => (
  <div className={sheet.classes.job}>
    <div className={sheet.classes.info}>
      <div>{job.company_name}</div>
      <div>{job.title}</div>
      <div>{job.created}</div>
    </div>
  </div>
);

Job.propTypes = {
  Job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired
  }).isRequired
};

const STYLES = {
  job: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '33%',
    padding: '0.5rem',
    boxSizing: 'border-box'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& svg': {
      fill: 'currentColor'
    }
  }
};

export default useSheet(Job, STYLES);
