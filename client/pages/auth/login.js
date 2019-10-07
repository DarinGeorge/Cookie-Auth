import Base from '../../components/layout/Base';
import LogIn from '../../components/auth/LogIn';

const Login = () => {
	return (
		<Base>
			<h2 className='text-center pt-4 pb-4'>Log In Page</h2>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<LogIn />
				</div>
			</div>
		</Base>
	);
};

export default Login;
