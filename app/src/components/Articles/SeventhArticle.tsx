import ArrowButton from '../ArrowButton/ArrowButton';
import ArticleSubTitle from '../ArticleSubTitle/ArticleSubTitle';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import Image from 'next/image';
import raspberryPyImage from '@/images/slide-08-image.png'

export default function SeventhArticle() {
	return (
		<Container
			className={
				'mt-16 relative bg-[#181818] bg-slide-4-bg bg-no-repeat overflow-hidden bg-[5%_0%] min-h-96'
			}
		>
			<>
				<div className='hidden xl:flex absolute h-full top-0 left-16 flex-col justify-center items-center'>
					<div className={'w-0.5 h-40 bg-dark-light rounded-b-md'}></div>
					<span className={'text-white text-center text-xs mt-2.5'}>08</span>
					<div className={'w-0.5 h-40 bg-white mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-dark-light rounded-b-md'}></div>
				</div>
				
				<div className={'right-[-150px] bottom-32 md:block absolute md:right-[-20px] lg:right-0 md:bottom-12'}>
					<Image src={raspberryPyImage} alt='' className='max-w-64 md:max-w-64 lg:max-w-[580px]'/>
				</div>
				<article>
					<div className={'relative py-16 lg:py-20 z-30'}>
						<ArticleTitle className={'text-white'}>
							<span>
								Order custom parts online and get them <br /> manufactured and
								shipped the next day. <span className={'text-accent'}>*</span>
							</span>
						</ArticleTitle>
						<div className={'w-64 md:w-full'}>
							<ArticleSubTitle className={'text-white'}>
								*Next-day shipping (or money back) is available for orders using
								a limited selection of materials, placed by 11:00 CET Monday -
								Friday for 1-100 parts.
							</ArticleSubTitle>
						</div>
						<div className={'mt-16 md:mt-9 md:max-w-[360px]'}>
							<ArrowButton to='' text='Get an instant quote' />
						</div>
					</div>
				</article>
			</>
		</Container>
	);
}
