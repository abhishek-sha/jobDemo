import React, { Component } from 'react';
import useSheet from 'react-jss';
import JobList from '../components/JobList';
import AddJob from '../components/AddJob';
import { connect } from 'react-redux';
import { requestJobs } from '../actions/jobs';

class Index extends Component {
  constructor(props) {
		super(props);
		this.state = {
			add_job: false
    }
    this.handleAddForm = this.handleAddForm.bind(this);
    this.handleShowJobs = this.handleShowJobs.bind(this);
  }

  componentDidMount() {
    this.props.requestJobs();
  }

  handleAddForm(e) {
		this.setState({ add_job: true });
  }
  handleShowJobs(e) {
    this.setState({ add_job: false });
    this.props.requestJobs();
	}

  render() {
    const { sheet } = this.props;
    return (
      <div>
        { !this.state.add_job ? ( 
          <div>
            <div>
              <button className={sheet.classes.button} onClick={this.handleAddForm}>
                Add New Job
              </button> 
            </div>
            <div >
              <JobList />
            </div>
          </div>
        ) : (
          <div>
            <button className={sheet.classes.button} onClick={this.handleShowJobs}>
              Show Jobs
            </button>
            <div className={sheet.classes.index}>
              <AddJob />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const STYLES = {
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    direction:'column', 
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
    textAlign: 'center',
    userSelect: 'none'
  },
};

export default connect(
  (Index) => ({}),
  { requestJobs }
)(
  useSheet(Index, STYLES)
);
