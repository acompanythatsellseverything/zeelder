interface IProps {
	children: JSX.Element | string;
	className?: string;
}

export default function Container({children, className}: IProps) {
	return <div className={`px-4 sm:px-5 md:px-6 lg:px-10 xl:px-32 ${className}`}>{children}</div>;
}
