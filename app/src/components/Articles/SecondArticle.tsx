import React from 'react';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ArticleSubTitle from '../ArticleSubTitle/ArticleSubTitle';
import Link from 'next/link';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import Image from 'next/image';
import slideImage from '@/images/slide-02-image.png';
import FaceplateForm from '../FaceplateForm/FaceplateForm';

const fabricationStats = [
	{ title: 'Dimensional accuracy', preciseInfo: '±0.13mm' },
	{ title: 'Max part size', preciseInfo: '3000x1500x25mm' },
	{ title: 'Min part size', preciseInfo: '15x15x0.4mm' },
	{ title: 'Min feature size', preciseInfo: 'ISO-9001, ITAR' },
	{ title: 'Min lead time', preciseInfo: 'Same day' },
];
export default function SecondArticle() {
	return (
		<Container className={'mt-16 relative'} id='hardware-build'>
			<>
			<div className='hidden xl:flex absolute h-full top-2 left-16 flex-col justify-center items-center'>
					<span className={'text-accent text-center text-xs'}>02</span>
					<div className={'w-0.5 h-40 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div>
				
				<article className={'relative md:grid md:grid-cols-5'}>
					<div
						className={
							'md:row-start-1 md:col-start-1 md:col-span-6 md:row-span-2 lg:col-span-3'
						}
					>
						<ArticleTitle className='max-w-xl'>
							Effortless cloud production technology accelerating your hardware
							build.
						</ArticleTitle>
						<ArticleSubTitle>
							Enterprises, startups, maintenance, and repair shops rely on our
							innovative online prototyping & manufacturing service.
						</ArticleSubTitle>
						<div className={'mt-4 text-base font-bold'}>
							Sheet Metal Fabrication
						</div>
						<div className={'mt-3 text-xs'}>
							Fiber laser cutting & engraving, bending & tapping, using 250+
							metals.
						</div>
					</div>
					<span className={'mt-4 block w-full h-0.5 bg-light md:hidden'} />

					<ul
						className={
							'mt-3.5 flex flex-wrap gap-5 md:col-span-3 md:row-span-1'
						}
					>
						{fabricationStats.map((e) => (
							<li key={e.title}>
								<span className={'text-sm md:text-base'}>{e.title}</span>
								<div
									className={
										'mt-2 w-40 h-7.5 rounded-sm flex gap-3  overflow-hidden'
									}
								>
									<div className={'w-1.5 h-7.5 bg-accent'}></div>
									<div className={'border-1 grow border-light border-l-0'}>
										{e.preciseInfo}
									</div>
								</div>
							</li>
						))}
					</ul>

					<div
						className={
							'mt-4 max-w-80 md:grid md:grid-cols-2 md:row-start-4 md:row-span-1 md:col-span-3 lg:col-span-2'
						}
					>
						<div className={'flex items-center gap-2.5'}>
							<Link href={'#'} className={'text-[14px] font-semibold'}>
								Laser cutting
							</Link>
							<ArrowIcon />
						</div>
						<div className={'flex items-center gap-2.5'}>
							<Link href={'#'} className={'text-[14px] font-semibold'}>
								Laser engraving
							</Link>
							<ArrowIcon />
						</div>
						<div className={'flex items-center gap-2.5'}>
							<Link href={'#'} className={'text-[14px] font-semibold'}>
								Metal bending
							</Link>
							<ArrowIcon />
						</div>
						<div className={'flex items-center gap-2.5'}>
							<Link href={'#'} className={'text-[14px] font-semibold'}>
								Powder coating
							</Link>
							<ArrowIcon />
						</div>
						<div className={'flex items-center gap-2.5'}>
							<Link href={'#'} className={'text-[14px] font-semibold'}>
								Welding
							</Link>
							<ArrowIcon />
						</div>
						<div className={'flex items-center gap-2.5'}>
							<Link href={'#'} className={'text-[14px] font-semibold'}>
								3D printing
							</Link>
							<ArrowIcon />
						</div>
					</div>

					<div
						className={
							'mt-5 max-w-96 md:row-span-1 md:col-span-3 lg:row-start-4 lg:col-start-3'
						}
					>
						<Image src={slideImage} alt='' />
					</div>

					<div
						className={
							'mt-2.5 md:row-start-3 md:row-span-3 md:col-start-4 md:col-span-3 lg:row-start-1 lg:row-span-3'
						}
					>
						<FaceplateForm />
					</div>
				</article>
			</>
		</Container>
	);
}
