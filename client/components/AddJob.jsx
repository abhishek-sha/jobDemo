import React, {Component} from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { addJobs, requestJobs } from '../actions/jobs';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea'; 

class AddJob extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobTitle: '',
			category: '',
			headquaters: '',
			description: '',
			howToApply: '',
			categoryOptions: [],
			companyName: '',
			email: '',
			url:'',
			tellUsMore: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleHeadquaterChange = this.handleHeadquaterChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleHowToApplyChange = this.handleHowToApplyChange.bind(this);
		this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleUrlChange = this.handleUrlChange.bind(this);
		this.handleTellUsMoreChange = this.handleTellUsMoreChange.bind(this);
		this.addJobs = addJobs.bind(this);

	}
	componentDidMount() {
		this.setState({
			categoryOptions:  ["Software Development", "Research Science", "Data Science", "Machine Learning", "Product Management", "Management/Executive", "Blockchain"],
		});
	}
	handleJobTitleChange(e) {
		this.setState({ jobTitle: e.target.value });
	}
	handleDescriptionChange(e) {
		this.setState({ description: e.target.value });
	}
	handleHeadquaterChange(e) {
		this.setState({ headquaters: e.target.value });
	}
	handleCompanyNameChange(e) {
		this.setState({ companyName: e.target.value });
	}
	handleUrlChange(e) {
		this.setState({ url: e.target.value });
	}
	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}
	handleTellUsMoreChange(e) {
		this.setState({ tellUsMore: e.target.value });
	}
	handleCategoryChange(e) {
		this.setState({ category: e.target.value });
	}
	handleHowToApplyChange(e) {
		this.setState({ howToApply: e.target.value });
	}
	handleDescriptionChange(e) {
		this.setState({ description: e.target.value });
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			jobTitle: '',
			category: '',
			headquaters: '',
			description: '',
      howToApply: '',
      companyName:'',
      url:'',
      email:'',
      tellUsMore:''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		var formPayload = {
			title: this.state.jobTitle,
			category: this.state.category,
			headquaters: this.state.headquaters,
			description: this.state.description,
			how_to_Apply: this.state.howToApply,
			company_name: this.state.companyName,
			url: this.state.url,
			email: this.state.email,
			tell_us_more: this.state.tellUsMore
		};

		formPayload = JSON.stringify(formPayload);
		this.props.addJobs(formPayload)
			.then(res => {
						alert('Job Added');
						this.handleClearForm;
				}
			).catch(error => {
						alert('Failed! Try Again!')
					}
			)
	}
	render() {
    const { sheet } = this.props;
		return (
			<div className={sheet.classes.index}>
				<form className="container">
					<SingleInput
						inputType={'text'}
						title={'Job Title'}
						name={'title'}
						controlFunc={this.handleJobTitleChange}
						content={this.state.jobTitle}
						required="required"
						placeholder={'“Research Engineer” or “Computer Vision Specialist”'} />
					<CheckboxOrRadioGroup
						title={'Category'}
						setName={'category'}
						type={'radio'}
						controlFunc={this.handleCategoryChange}
						options={this.state.categoryOptions}
						required="required"
						selectedOptions={this.state.category} />
					<SingleInput
						inputType={'text'}
						title={'Headquaters'}
						name={'headquaters'}
						required="required"
						controlFunc={this.handleHeadquaterChange}
						content={this.state.headquaters}
						placeholder={'“Chicago, IL”, “Stockholm, Sweden”'} />
					<TextArea
						title={'Job description'}
						rows={5}
						resize={false}
						content={this.state.description}
						name={'ddescription'}
						controlFunc={this.handleDescriptionChange}
						placeholder={''} />
					<SingleInput
						inputType={'text'}
						title={'How do people apply for this job?'}
						name={'how_to_apply'}
						controlFunc={this.handleHowToApplyChange}
						content={this.state.howToApply}
						placeholder={'“Chicago, IL”, “Stockholm, Sweden”'} />
				</form>
				<h3>Tell us about your company</h3>
				<form className="container">
					<SingleInput
						inputType={'text'}
						title={'Name'}
						name={'companyName'}
						controlFunc={this.handleCompanyNameChange}
						content={this.state.companyName}
						placeholder={'Name'} />
					<SingleInput
						inputType={'text'}
						title={'Url'}
						name={'url'}
						controlFunc={this.handleUrlChange}
						content={this.state.url}
						placeholder={''} />
					
					<SingleInput
						inputType={'text'}
						title={'Email'}
						name={'email'}
						controlFunc={this.handleEmailChange}
						content={this.state.email}
						placeholder={''} />

					<TextArea
						title={'Tell us more about your company.'}
						rows={5}
						resize={false}
						content={this.state.tellUsMore}
						name={'tell_us_more'}
						controlFunc={this.handleTellUsMoreChange}
						placeholder={''} />

					<button
						className="button float-left"
						onClick={this.handleFormSubmit}>Create Post</button>
				</form>
			</div>
		);
	}
}

const STYLES = {
  
  index: {
    width: '100%',
		height: '100%',
  },

  link: {
    textDecoration: 'none'
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
  }
};

export default connect(
	(AddJob) => ({}),
	{ requestJobs, addJobs }
  )(
	useSheet(AddJob, STYLES)
  );
