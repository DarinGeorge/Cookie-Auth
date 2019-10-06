import Base from '../components/Layout/Base';
import Link from 'next/link';

const Index = () => {
	return (
		<Base>
			<h2>Index Page</h2>
			<Link href='/auth/signup'>
				<a>Sign Up</a>
			</Link>
		</Base>
	);
};

export default Index;
