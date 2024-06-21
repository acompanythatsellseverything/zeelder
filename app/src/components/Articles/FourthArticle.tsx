import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import Image from 'next/image';
import lightningIcon from '@/images/utils/lightning.svg';
import slideImage from '@/images/slide-04-image.png'
const listData = [
	{
		title: 'Automatic IP protection',
		description:
			'Your online account terms bind us to protect your IP confidentiality, including a Non Disclosure Agreement.',
	},
	{
		title: 'Free standard shipping',
		description:
			'For all European shipments. Free material sample for >100 parts orders.',
	},
	{
		title: 'Live chat with our technicians',
		description:
			'We’re online Monday - Friday, 9:00 - 17:00 CET to assist you in designing the highest quality & lowest cost custom parts.',
	},
];

export default function FourthArticle() {
	return (
		<Container className={'mt-16 relative bg-[#181818] bg-slide-4-bg bg-no-repeat overflow-hidden bg-[50%_100%]'}>
			<>
				<div className='hidden xl:flex absolute h-full top-0 left-16 flex-col justify-center items-center'>
					<div className={'w-0.5 h-20 bg-dark-light rounded-b-md'}></div>
					<span className={'text-white text-center text-xs mt-2.5'}>04</span>
					<div className={'w-0.5 h-40 bg-white mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-dark-light rounded-b-md'}></div>
				</div>
				<div className={'hidden md:block absolute md:right-[-20px] lg:right-0 bottom-0'}>
					<Image src={slideImage} alt='' className='md:max-w-64 lg:max-w-[580px]'/>
				</div>

				<article className={'relative py-16 lg:py-20 z-30'}>
					<ArticleTitle className='text-white max-w-3xl'>
						Sheet metal working and 3D printing for enterprises, maintenance &
						repair shops, and startups.
					</ArticleTitle>
					<div className='mt-6'>
						<ul className='flex flex-col text-white gap-4 max-w-[60%]'>
							{listData.map((e) => (
								<li key={e.title} className='flex items-start gap-[5px]'>
									<Image src={lightningIcon} alt='' className='mt-1' />
									<div>
										<h3 className={'text-base font-bold md:text-[17px]'}>
											{e.title}
										</h3>
										<span className={'text-[14px] md:text-[15px]'}>
											{e.description}
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</article>
			</>
		</Container>
	);
}
