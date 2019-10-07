import { useState } from 'react';
import { actionLogIn, authenticate } from '../../actions/auth';
import Router from 'next/router';

const LogIn = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',
		showForm: true
	});

	const { email, password, error, loading, message, showForm } = values;

	const handleSubmit = e => {
		e.preventDefault();
		//console.table({ name, email, password, error, loading, message, showForm });
		setValues({ ...values, loading: true, error: false });
		const user = { email, password };

		actionLogIn(user).then(data => {
			if (data.error) {
				setValues({
					...values,
					error: data.error
				});
			} else {
				// save user token to cookie
				//save user info to localstorage
				//auth user
				authenticate(data, () => {
					Router.push(`/`);
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

	const LogInForm = () => {
		return (
			<form onSubmit={handleSubmit}>
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
					Log In
				</button>
			</form>
		);
	};
	return (
		<>
			{showError()}
			{showLoading()}
			{showMessage()}
			{showForm && LogInForm()}
		</>
	);
};

export default LogIn;
