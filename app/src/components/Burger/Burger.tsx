
interface IProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export default function Burger({isOpen, toggleOpen}: IProps) {
	return (
		<div onClick={toggleOpen} className='w-10 h-10 rounded-sm bg-accent cursor-pointer'>
			<div className='h-full w-5 m-auto flex flex-col justify-center gap-1'>
				<div className='w-5 h-0.5 bg-white rounded-sm' />
				<div className='w-3 h-0.5 bg-white rounded-sm' />
				<div className='w-5 h-0.5 bg-white rounded-sm' />
			</div>
		</div>
	);
}
