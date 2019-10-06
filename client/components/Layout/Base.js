import Header from './include/Header';

const Base = ({ children }) => {
	return (
		<>
			<Header />
			<div className='container-fluid'>{children}</div>
		</>
	);
};

export default Base;
