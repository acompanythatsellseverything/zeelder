import React from 'react';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Image from 'next/image';
import insIcon from '@/images/utils/instagram.svg';
import img0 from '@/images/masonry/0.png';
import img1 from '@/images/masonry/1.png';
import img2 from '@/images/masonry/2.png';
import img3 from '@/images/masonry/3.png';
import img4 from '@/images/masonry/4.png';
import img5 from '@/images/masonry/5.png';
import img6 from '@/images/masonry/6.png';
import img7 from '@/images/masonry/7.png';

export default function EighthArticle() {
	return (
		<Container className={'relative overflow-visible'}>
			<>
				<div className='hidden xl:flex absolute h-full left-16 flex-col justify-center items-center top-0'>
					<div
						className={'w-0.5 grow basis-[15vh] bg-light rounded-b-md'}
					></div>
					<span className={'mt-2.5 text-accent text-center text-xs'}>05</span>
					<div className={'w-0.5 h-20 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div>
				<article>
					<div className='pt-20'>
						<ArticleTitle>Our Instagram</ArticleTitle>
					</div>
					<div className='mt-[30px]'>
						<div
							className={
								'grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-4'
							}
						>
							<div className={'grid gap-2.5'}>
								<div className='relative'>
									<Image
										src={img0}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
								<div className='relative'>
									<Image
										src={img1}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
							</div>

							<div className={'grid gap-2.5'}>
								<div className='relative'>
									<Image
										src={img2}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
								<div className='relative'>
									<Image
										src={img3}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
							</div>

							<div className={'grid gap-2.5'}>
								<div className='hidden md:block  relative'>
									<Image
										src={img4}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
								<div className='relative'>
									<Image
										src={img5}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
							</div>
							<div className={'grid gap-2.5'}>
								<div className='relative'>
									<Image
										src={img6}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
								<div className='hidden md:block relative'>
									<Image
										src={img7}
										alt=''
										className='h-auto w-full rounded-sm'
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</>
		</Container>
	);
}
