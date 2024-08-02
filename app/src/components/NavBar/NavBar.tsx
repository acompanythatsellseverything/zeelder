'use client';
import Link from 'next/link';
import ArrowButton from '../ArrowButton/ArrowButton';
import Burger from '../Burger/Burger';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';

const navList = [
	{ title: 'Hardware build', href: '#hardware-build' },
	{ title: 'Stages of work', href: '#stage-of-work' },
	{ title: 'Quality record', href: '#quality' },
	{ title: 'Founders', href: '#founder' },
	{ title: 'Contact us', href: '#contact-us' },
];

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useEffect(() => {
		if(isMenuOpen) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "scroll"
			};
		} else {
				document.body.style.overflow = "scroll"
		}
	}, [isMenuOpen])

	return (
		<>
			<Navbar
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				classNames={{
					base: 'w-full py-2 border-b-1 border-light',
					wrapper: 'max-w-none px-4 sm:px-5 md:px-6 lg:px-10 xl:px-32',
					brand: 'basis-[180px] shrink grow-0',
					toggle: 'w-10 h-10 rounded-sm bg-accent cursor-pointer',
				}}
			>
				<NavbarBrand>
					<Link href={'/'} className={'flex items-center'}>
						{/* <div className={'md:hidden bg-logo-icon w-10 h-10'}/>
					<div className={'md:hidden bg-accent w-[1px] h-10 mx-2.5'}/> */}
						<div className={'bg-logo h-[30px] w-[180px] bg-no-repeat'} />
					</Link>
				</NavbarBrand>
				<NavbarContent className={'max-[868px]:hidden'}>
					<div className='w-full flex items-center justify-end gap-5 lg:gap-16'>
						<ul
							className={'basis-full flex justify-center gap-3 lg:gap-6 px-2'}
						>
							{navList.map((e) => (
								<li key={e.title} className={'text-xs lg:text-base'}>
									<Link href={`/${e.href}`} className='hover:text-red-500'>
										{e.title}
									</Link>
								</li>
							))}
						</ul>
						<div className='shrink-0'>
							<ArrowButton to={'#'} text={'Get quote'} />
						</div>
					</div>
				</NavbarContent>
				<div className='min-[868px]:hidden'>
					<Burger
						isOpen={isMenuOpen}
						toggleOpen={() => setIsMenuOpen((prev) => !prev)}
					/>
				</div>
			</Navbar>
			{isMenuOpen && (
				<div className='absolute px-4 sm:px-5 md:px-6 z-50 bg-white w-full h-full'>
					{navList.map((item, index) => (
						<div
							key={`${item}-${index}`}
							className={`py-4 ${
								index != navList.length - 1 && 'border-b-1 border-gray-light'
							}`}
						>
							<Link
								className='w-full hover:text-red-500'
								onClick={() => setIsMenuOpen(false)}
								href={`/${item.href}`}
							>
								{item.title}
							</Link>
						</div>
					))}
					<ArrowButton to={'#'} text={'Get quote'} />
				</div>
			)}

		</>
	);
}
