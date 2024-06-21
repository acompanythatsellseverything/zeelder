import React from 'react';

interface IProps {
	children?: JSX.Element | string;
	className?: string;
}

export default function ArticleSubTitle({children}: IProps) {
	return (
		<div className={'flex items-center mt-6'}>
			<span className={'w-0.5 h-[26px] bg-accent'} />
			<h3 className={'pl-3 text-[14px] md:text-lg max-w-[320px]'}>
				{children}
			</h3>
		</div>
	);
}
