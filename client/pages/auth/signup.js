import Base from '../../components/Layout/Base';
import Link from 'next/link';

const Signup = () => {
	return (
		<Base>
			<h2>Sign Up Page</h2>
			<Link href='/'>
				<a>Home</a>
			</Link>
		</Base>
	);
};

export default Signup;
