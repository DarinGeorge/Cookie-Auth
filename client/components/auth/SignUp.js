import { useState } from 'react';

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
		console.table({ name, email, password, error, loading, message, showForm });
	};

	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value });
	};

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
	return <>{SignUpForm()}</>;
};

export default SignUp;
