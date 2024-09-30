import Image from 'next/image';
import Container from '@/components/Container/Container';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import checkIcon from '@/images/utils/check-square.svg';
import UploadCADForm from '@/components/UploadCADForm/UploadCADForm';
import ArticleSubTitle from '@/components/ArticleSubTitle/ArticleSubTitle';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';

export default function FirstArticle() {
	return (
		<Container
			className={
				`relative mt-[50px] pb-[80px] bg-article-1-bg bg-no-repeat 
				bg-mob-right-center md:bg-lap-right-center md:bg-center-right 
				lg:bg-right-top bg-55 md:bg-60 min-[1424px]:bg-70 `
			}
		>
			<article>
				<ArticleScroll title='01' coloredLineHeight='8rem' />
				<div>
					<ArticleTitle className='max-w-xl'>
					Order custom parts online, get them manufactured and shipped after 24 hours 
					</ArticleTitle>
					<ArticleSubTitle>
						The fastest provider of online custom laser cutting, bending,
						welding & digital prototyping services in Europe
					</ArticleSubTitle>

					<div className={'mt-5 max-w-md'}>
						<ul className='grid md:grid-cols-2 grid-cols-1 gap-3'>
							<li
								className={
									'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'
								}
							>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									Online quotes provided on the day of request;
								</span>
							</li>
							<li
								className={
									'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'
								}
							>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									Free DFM analysis and CAD files’ adjustments;
								</span>
							</li>
							<li
								className={
									'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'
								}
							>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									No minimum order quantity. Free shipping;
								</span>
							</li>
							<li
								className={
									'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'
								}
							>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									Dimensional accuracy from ± 0.08mm;
								</span>
							</li>
						</ul>
					</div>
					<div className={'mt-5 max-w-2xl'}>
						<UploadCADForm />
					</div>
				</div>
			</article>
		</Container>
	);
}
