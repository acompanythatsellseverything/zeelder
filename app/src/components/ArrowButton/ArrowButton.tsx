import Link from 'next/link';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
interface IProps {
	to: string;
	text: string;
}
export default function ArrowButton({ to, text }: IProps) {
	return (
		<Link href={to} className={'overflow-visible relative'}>
			<div className={'relative z-10 bg-accent px-12 rounded-sm'}>
				<div
					className={
						'py-[16px] text-white text-sm flex gap-3.5 items-center '
					}
				>
					<span className={'font-medium'}>{text}</span>
					<ArrowIcon color={'#FFFFFF'} />
				</div>
			</div>
			<div
				className={
					'w-full h-full absolute z-0 bg-accent-dark px-[48px] top-[4px] left-[4px] rounded-sm'
				}
			/>
		</Link>
	);
}
