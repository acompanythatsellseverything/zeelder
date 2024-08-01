import React from 'react';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Image from 'next/image';
import checkIcon from '@/images/utils/check-square.svg';
import UploadCADForm from '../UploadCADForm/UploadCADForm';
import ArticleSubTitle from '../ArticleSubTitle/ArticleSubTitle';
import ArticleScroll from '../ArticleScroll/ArticleScroll';

export default function FirstArticle() {
	return (
		<Container
			className={
				'relative mt-[50px] pb-[80px] bg-article-1-bg bg-no-repeat bg-mob-right-center md:bg-center-right lg:bg-right-top bg-50 md:lg-70 lg:bg-60 '
			}
		>
			<article>
				<ArticleScroll title='01' coloredLineHeight='32'/>
				<div className=''>
						<ArticleTitle className='max-w-xl'>
							Order custom parts online, get them manufactured and shipped the
							next day.*
						</ArticleTitle>
						<ArticleSubTitle>
							The fastest provider of online custom laser cutting, bending,
							welding & digital prototyping services in Europe
						</ArticleSubTitle>

						<div className={'mt-5 max-w-md'}>
							<ul className='grid md:grid-cols-2 gap-3'>
								<li className={'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'}>
									<Image src={checkIcon} alt='' />
									<span className={'text-xs pl-2 md:text-[15px]'}>
										Online quotes provided on the day of request;
									</span>
								</li>
								<li className={'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'}>
									<Image src={checkIcon} alt='' />
									<span className={'text-xs pl-2 md:text-[15px]'}>
										Free DFM analysis and CAD files’ adjustments;
									</span>
								</li>
								<li className={'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'}>
									<Image src={checkIcon} alt='' />
									<span className={'text-xs pl-2 md:text-[15px]'}>
										No minimum order quantity. Free shipping;
									</span>
								</li>
								<li className={'flex items-center max-w-[180px] sm:max-w-[142px] md:max-w-200'}>
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
