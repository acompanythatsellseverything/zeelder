interface IProps {
	children?: JSX.Element | string;
	className?: string;
}

export default function ArticleTitle({ children, className }: IProps) {
	return (
		<h2 className={`font-bold ${className}`}>
			<span className={'text-[28px] md:text-[36px] lg:text-[40px]'}>
				{children}
			</span>
		</h2>
	);
}
