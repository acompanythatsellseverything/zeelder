import React, { useState, useEffect } from 'react';

const LoadingDots = () => {
	const [dots, setDots] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
		}, 300);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='w-16'>Submitting{dots}</div>
	);
};

export default LoadingDots;
