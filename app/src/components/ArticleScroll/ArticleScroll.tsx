'use client';
import { motion } from 'framer-motion';

interface IProps {
	title: string;
	color?: 'accent' | 'white';
	coloredLineHeight?: string;
	topLineHeight?: string;
}

export default function ArticleScroll({
	color,
	title,
	coloredLineHeight,
	topLineHeight,
}: IProps) {
	const tColor = color || 'accent';

	return (
		<div className='hidden xl:flex absolute h-full top-0 left-16 flex-col justify-center items-center'>
			{topLineHeight && (
				<div
					className={`
						w-0.5
						rounded-b-md 
						h-${topLineHeight} 
						${color == 'white' ? 'bg-dark-light' : 'bg-light'}
				`}
				></div>
			)}
			<motion.div
				className={`${topLineHeight && 'mt-3'}`}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
			>
				<span className={`text-center text-xs text-${tColor}`}>{title}</span>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
				}}
				transition={{ delay: 0.35 }}
			>
				<div
					className={`w-0.5 h-${
						coloredLineHeight || '40'
					} bg-${tColor} mt-2.5 rounded-t-md`}
				></div>
			</motion.div>
			<div
				className={`
				w-0.5 h-full rounded-b-md
				${color == 'white' ? 'bg-dark-light' : 'bg-light'}
				`}
			></div>
		</div>
	);
}
