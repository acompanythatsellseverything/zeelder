interface IProps {
	color: string
}

export default function ArrowIcon({color}: IProps) {
	return (
		<svg
			width='25'
			height='9'
			viewBox='0 0 25 9'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M20.0001 0.899902L23.6001 4.4999L20.0001 8.0999'
				stroke={color || '#B10C10'}
				strokeLinecap='round'
			/>
			<line x1='0.800049' y1='4.3999' x2='16.8' y2='4.3999' stroke={color || '#B10C10'} />
		</svg>
	);
}
