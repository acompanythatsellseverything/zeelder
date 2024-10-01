import Image from 'next/image';
import ArrowButton from '@/components/ArrowButton/ArrowButton';
import ArticleSubTitle from '@/components/ArticleSubTitle/ArticleSubTitle';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import Container from '@/components/Container/Container';
import raspberryPyImage from '@/images/slide-08-image.png';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';

export default function SeventhArticle() {
	return (
		<Container
			className={
				'relative bg-[#181818] bg-slide-4-bg bg-no-repeat overflow-hidden bg-[5%_0%] min-h-96'
			}
		>
			<ArticleScroll
				title='07'
				color='white'
				topLineHeight='7rem'
				coloredLineHeight='5rem'
			/>
			<div
				className={
					'right-[-150px] bottom-32 md:block absolute md:right-[-20px] lg:right-0 md:bottom-12'
				}
			>
				<Image
					src={raspberryPyImage}
					alt=''
					className='max-w-64 md:max-w-64 lg:max-w-[580px]'
				/>
			</div>
			<article>
				<div className={'relative py-16 lg:py-20 z-30'}>
					<ArticleTitle className={'text-white'}>
						<span>
							Order custom parts online and get them <br /> manufactured and
							shipped after 24 hours. <span className={'text-accent'}>*</span>
						</span>
					</ArticleTitle>
					<div className={'w-64 md:w-full'}>
						<ArticleSubTitle className={'text-white'}>
							*Shipping after 24 hours (or money back) is available for orders using a
							limited selection of materials, placed by 11:00 CET Monday -
							Friday for 1-100 parts.
						</ArticleSubTitle>
					</div>
					<div className={'mt-16 md:mt-9 md:max-w-[360px]'}>
						<ArrowButton to='' text='Get an instant quote' />
					</div>
				</div>
			</article>
		</Container>
	);
}
