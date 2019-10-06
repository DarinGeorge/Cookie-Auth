import Base from '../../components/layout/Base';
import SignUp from '../../components/auth/SignUp';

const Signup = () => {
	return (
		<Base>
			<h2 className='text-center pt-4 pb-4'>Sign Up Page</h2>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<SignUp />
				</div>
			</div>
		</Base>
	);
};

export default Signup;
