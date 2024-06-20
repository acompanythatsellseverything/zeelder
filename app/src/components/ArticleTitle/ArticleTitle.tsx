interface IProps {
	children?: JSX.Element | string;
	className?: string;
}

export default function ArticleTitle({ children, className }: IProps) {
	return <h2 className={`max-w-xl font-bold ${className}`}>{children}</h2>;
}
