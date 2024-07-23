interface IProps {
	children: JSX.Element | string;
	className?: string;
	id?: string;
}

export default function Container({children, className, id}: IProps) {
	return <div id={id} className={`px-4 sm:px-5 md:px-6 lg:px-10 xl:px-32 ${className}`}>{children}</div>;
}
