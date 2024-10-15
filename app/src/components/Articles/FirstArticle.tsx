import Image from 'next/image';
import Container from '@/components/Container/Container';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import checkIcon from '@/images/utils/check-square.svg';
import UploadCADForm from '@/components/UploadCADForm/UploadCADForm';
import ArticleSubTitle from '@/components/ArticleSubTitle/ArticleSubTitle';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';

export default function FirstArticle() {
	return (
		<>
			<div
				className={`sm:px-5 md:px-6 lg:px-10 xl:px-32 relative mt-[50px] pb-10 md:pb-[120px] bg-none	md:bg-article-1-bg bg-no-repeat md:bg-lap-right-center md:bg-center-right lg:bg-right-top md:bg-60 min-[1424px]:bg-65 `}
			>
				<article>
					<ArticleScroll title='01' coloredLineHeight='8rem' />
					<div>
						<div className='px-4 md:px-0'>
							<ArticleTitle className='max-w-xl'>
								Order custom parts online, get them manufactured and shipped
								after 24 hours
							</ArticleTitle>

							<ArticleSubTitle>
								The fastest provider of online custom laser cutting, bending,
								welding & digital prototyping services in Europe
							</ArticleSubTitle>
						</div>

						<div className={'mt-5 md:max-w-md pl-4 md:px-0'}>
							<ul className='grid sm:grid-cols-2 grid-cols-1 gap-3 bg-article-1-bg bg-no-repeat bg-55 bg-mob-right-center sm:bg-none'>
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
						<div className={'px-4 md:px-0 mt-5 max-w-2xl'}>
							<UploadCADForm />
						</div>
					</div>
				</article>
			</div>
		</>
	);
}
