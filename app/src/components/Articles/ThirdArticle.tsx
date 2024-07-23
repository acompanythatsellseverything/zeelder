import { title } from 'process';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import Link from 'next/link';

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

export default function ThirdArticle() {
	return (
		<Container className={'mt-16 relative'} id='stage-of-work'>
			<>
				<div className='hidden xl:flex absolute h-full top-2 left-16 flex-col justify-center items-center'>
					<span className={'text-accent text-center text-xs'}>03</span>
					<div className={'w-0.5 h-20 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div>

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
								'bg-black place-content-center py-6 px-5 border-1 border-black'
							}
						>
							<Link href={'#contact-us'}>
								<div className='py-8 flex items-center justify-center gap-4 text-white font-semibold text-xl text-center'>
									<span>Get an instant quote</span>
									<ArrowIcon color='white' />
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</>
		</Container>
	);
}
