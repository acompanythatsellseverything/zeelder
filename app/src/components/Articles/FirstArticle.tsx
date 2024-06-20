import React from 'react';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Image from 'next/image';
import checkIcon from '@/images/utils/check-square.svg';
import UploadCADForm from '../UploadCADForm/UploadCADForm';
import bgImage from '@/images/slide-01-bg.png';

export default function FirstArticle() {
	return (
		<Container
			className={
				'relative mt-[50px] bg-article-1-bg bg-no-repeat bg-right lg:bg-right-top bg-50'
			}
		>
			<>
				<div className=''>
					<ArticleTitle>
						<span className={'text-[28px] md:text-[36px] lg:text-[40px]'}>
							Order custom parts online, get them manufactured and shipped the
							next day.*
						</span>
					</ArticleTitle>
					<div className={'flex items-center mt-6'}>
						<span className={'w-0.5 h-[26px] bg-accent'} />
						<h3 className={'pl-3 text-[14px] md:text-lg max-w-[320px]'}>
							The fastest provider of online custom laser cutting, bending,
							welding & digital prototyping services in Europe
						</h3>
					</div>
					<div className={'mt-5 max-w-md'}>
						<ul className='grid md:grid-cols-2 gap-3'>
							<li className={'flex items-center max-w-[142px] md:max-w-200'}>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									Online quotes provided on the day of request;
								</span>
							</li>
							<li className={'flex items-center max-w-[142px] md:max-w-200'}>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									Free DFM analysis and CAD files’ adjustments;
								</span>
							</li>
							<li className={'flex items-center max-w-[142px] md:max-w-200'}>
								<Image src={checkIcon} alt='' />
								<span className={'text-xs pl-2 md:text-[15px]'}>
									No minimum order quantity. Free shipping;
								</span>
							</li>
							<li className={'flex items-center max-w-[142px] md:max-w-200'}>
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
				{/* <div
					className='w-full h-full absolute top-0 left-0 z-40 article-1-bg'
					
				/> */}
			</>
		</Container>
	);
}
