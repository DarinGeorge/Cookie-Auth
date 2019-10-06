import { useState } from 'react';
import { actionSignUp } from '../../actions/auth';

const SignUp = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',
		showForm: true
	});

	const { name, email, password, error, loading, message, showForm } = values;

	const handleSubmit = e => {
		e.preventDefault();
		//console.table({ name, email, password, error, loading, message, showForm });
		setValues({ ...values, loading: true, error: false });
		const user = { name, email, password };

		actionSignUp(user).then(data => {
			if (data.error) {
				setValues({
					...values,
					error: data.error
				});
			} else {
				setValues({
					...values,
					name: '',
					email: '',
					password: '',
					error: '',
					loading: false,
					message: data.message,
					showForm: false
				});
			}
		});
	};

	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value });
	};

	const showLoading = () =>
		loading ? <div className='alert alert-info'>Loading...</div> : '';
	const showError = () =>
		error ? <div className='alert alert-danger'>{error}</div> : '';
	const showMessage = () =>
		message ? <div className='alert alert-info'>{message}</div> : '';

	const SignUpForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						value={name}
						onChange={handleChange('name')}
						type='text'
						className='form-control'
						placeholder='Name'
					/>
				</div>
				<div className='form-group'>
					<input
						value={email}
						onChange={handleChange('email')}
						type='email'
						className='form-control'
						placeholder='Email'
					/>
				</div>
				<div className='form-group'>
					<input
						value={password}
						onChange={handleChange('password')}
						type='password'
						className='form-control'
						placeholder='Password'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Sign Up
				</button>
			</form>
		);
	};
	return (
		<>
			{showError()}
			{showLoading()}
			{showMessage()}
			{showForm && SignUpForm()}
		</>
	);
};

export default SignUp;
