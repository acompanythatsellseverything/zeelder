import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import ArticleScroll from '../ArticleScroll/ArticleScroll';
import { useState } from 'react';
import { Modal, ModalContent } from '@nextui-org/react';
import CollaborateForm from '../CollaborateForm/CollaborateForm';

const gridData = [
	{
		title: 'Upload your CAD files online',
		description: 'Get a DFM report for free',
	},
	{
		title: 'Choose the materials online',
		description: '100+ sheet materials available in stock',
	},
	{
		title: 'Choose the materials online',
		description: 'From €50 for 1 part manufactured and shipped the next day*',
	},
	{
		title: 'Robotized manufacturing line does the work',
		description: 'Quality checked by software & people',
	},
	{
		title: 'Track your shipment online',
		description:
			'Next-day shipping for all orders <100 parts. Free shipping across Europe.',
	},
];

function InstantQuote() {
	'use client'
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
		<div className='py-6 px-5 cursor-pointer' onClick={() => setIsOpen(true)}>
			<div className='py-8 flex items-center justify-center gap-4 text-white font-semibold text-xl text-center'>
				<span>Get an instant quote</span>
				<ArrowIcon color='white' />
			</div>
		</div>
		{isOpen && (
			<Modal
			isOpen={isOpen}
			size='xl'
			onOpenChange={setIsOpen}
			className='rounded-sm lg:min-w-[560px]'
		>
			<ModalContent>
				<div className='py-10 px-12'>
					<p className='w-full text-center text-2xl font-semibold'>Collaborate with an engineer</p>
					<p className='mt-4 w-full text-center'>
						Get in touch with our engineering team and discuss your order{' '}
					</p>
					<CollaborateForm />
				</div>
			</ModalContent>
		</Modal>
		)}
		</>
	);
}

export default function ThirdArticle() {
	return (
		<Container className={'mt-16 pb-16 relative'} id='stage-of-work'>
			<>
				{/* <div className='hidden xl:flex absolute h-full top-2 left-16 flex-col justify-center items-center'>
					<span className={'text-accent text-center text-xs'}>03</span>
					<div className={'w-0.5 h-20 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div> */}
				<ArticleScroll title='03' coloredLineHeight='8' />
				<article className={'relative md:grid md:grid-cols-5'}>
					<div
						className={
							'md:row-start-1 md:col-start-1 md:col-span-6 md:row-span-2 lg:col-span-3'
						}
					>
						<ArticleTitle className='max-w-xl'>
							What our process looks like
						</ArticleTitle>
					</div>
				</article>
				<div className={'mt-8'}>
					<ul className='grid grid-cols-1 rounded-sm overflow-hidden md:grid-cols-3'>
						{gridData.map((element, index) => (
							<li key={index} className='py-6 px-5 border-1 border-light'>
								<span className={'text-accent text-xl font-bold'}>
									/{index > 10 ? index : `0${index}`}
								</span>
								<h3 className={'mt-2.5 text-xl font-bold'}>{element.title}</h3>
								<span className={'mt-2.5 text-[14px] font-bold'}>
									{element.description}
								</span>
							</li>
						))}
						<li
							className={
								'bg-accent place-content-center border-1 border-accent'
							}
						>
							<InstantQuote/>
						</li>
					</ul>
				</div>
			</>
		</Container>
	);
}
