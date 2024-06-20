import Link from 'next/link';
import ArrowButton from '../ArrowButton/ArrowButton';
import Burger from '../Burger/Burger';

const navList = [
	{ title: 'Hardware build', href: '#' },
	{ title: 'Stages of work', href: '#' },
	{ title: 'Quality record', href: '#' },
	{ title: 'Founders', href: '#' },
	{ title: 'Contact us', href: '#' },
];

export default function NavBar() {
	return (
		<nav>
			<div className={'flex justify-between items-center'}>
				<div className={'flex items-center'}>
					<div className={'md:hidden bg-logo-icon w-10 h-10'}/>
					<div className={'md:hidden bg-accent w-[1px] h-10 mx-2.5'}/>
					<div className={'bg-logo h-[26px] w-[189px]'} />
				</div>
				<div className={'max-[768px]:hidden'}>
					<ul className={'flex gap-6 px-2'}>
						{navList.map((e) => (
							<li key={e.title} className={'text-xs lg:text-base'}>
								<Link href={e.href}>{e.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={'hidden lg:block'}>
					<ArrowButton to={'#'} text={'Get quote'} />
				</div>
				<div className='md:hidden'>
					<Burger/>
				</div>
			</div>
		</nav>
	);
}
