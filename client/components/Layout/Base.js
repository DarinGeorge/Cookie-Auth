import Header from './include/Header';

const Base = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<p>Footer</p>
		</>
	);
};

export default Base;
