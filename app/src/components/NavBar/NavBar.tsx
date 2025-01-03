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
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const navList = [
	{ title: 'Hardware build', href: '#hardware-build' },
	{ title: 'Stages of work', href: '#stage-of-work' },
	{ title: 'Quality record', href: '#quality' },
	{ title: 'Contact us', href: '#contact-us' },
];

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const searchParams = useSearchParams();

	const queryString = searchParams.toString();
	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				base: 'w-full py-2 border-b-1 border-light',
				wrapper: 'max-w-none px-4 sm:px-5 md:px-6 lg:px-10 xl:px-32',
				brand: 'basis-[180px] shrink grow-0',
				toggle: 'w-10 h-10 rounded-sm bg-accent cursor-pointer',
			}}
			isBlurred={false}
		>
			<NavbarBrand>
				<Link href={`/?${queryString}`} className={'flex items-center'}>
					{/* <div className={'md:hidden bg-logo-icon w-10 h-10'}/>
					<div className={'md:hidden bg-accent w-[1px] h-10 mx-2.5'}/> */}
					<div className={'bg-logo h-[30px] w-[180px] bg-no-repeat'} />
				</Link>
			</NavbarBrand>
			<NavbarContent className={'max-[880px]:hidden'}>
				<div className='w-full flex items-center justify-end gap-32'>
					<ul className={'basis-5/8 flex justify-center gap-3 lg:gap-4 px-2'}>
						{navList.map((e) => (
							<li key={e.title} className={'text-xs min-[1025px]:text-base'}>
								<Link
									href={`${queryString ? `/?${queryString}${e.href}` : e.href}`}
									className='hover:text-red-500'
								>
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
			<div className='max-[880px]:block hidden'>
				<Burger
					isOpen={isMenuOpen}
					toggleOpen={() => setIsMenuOpen((prev) => !prev)}
				/>
			</div>

			<NavbarMenu className='gap-0 z-50'>
				{navList.map((item, index) => (
					<NavbarMenuItem
						key={`${item}-${index}`}
						className={`py-4 ${
							index != navList.length - 1 && 'border-b-2 border-gray-light'
						}`}
					>
						<Link
							className='w-full hover:text-red-500'
							href={`${
								queryString ? `/?${queryString}${item.href}` : item.href
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
				<NavbarMenuItem className='mt-10'>
					<ArrowButton to={'#'} text={'Get quote'} />
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}
