import React from 'react';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Image from 'next/image';
import premiumIcon from '@/images/utils/premium-quality.svg';
import handshakeIcon from '@/images/utils/handshake.svg';
import trustedByImage from '@/images/trusted-by.png';
export default function FifthArticle() {
	return (
		<Container className={'relative overflow-visible'}>
			<>
				<div className='hidden xl:flex absolute h-full top-[-80px] left-16 flex-col justify-center items-center'>
					<div className={'w-0.5 h-32 bg-light rounded-b-md'}></div>
					<span className={'mt-2.5 text-accent text-center text-xs'}>05</span>
					<div className={'w-0.5 h-44 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div>
				<article className='mt-20'>
					<div>
						<ArticleTitle className=''>
							<>
								<span className='text-accent'>99.6% </span>
								precision part quality record
							</>
						</ArticleTitle>
						<div className='mt-6'>
							<div className='flex flex-col gap-4 md:flex-row'>
								<div className='flex gap-4 md:max-w-[500px]'>
									<div className=' w-[46px] h-[46px] flex justify-center items-center shrink-0 border-1 border-light border-b-3 border-b-accent'>
										<Image
											src={premiumIcon}
											alt=''
											className='w-[30px] h-[30px]'
										/>
									</div>
									<div>
										<div className='text-lg font-bold md:text-[20px]'>
											Standard quality procedure
											<div className='mt-2.5 text-[14px] md:text-[15px]'>
												Our software, then design inspector, machine operator &
												quality manager quality check all orders.
											</div>
										</div>
									</div>
								</div>
								<div className='flex gap-4 md:max-w-[500px]'>
									<div className=' w-[46px] h-[46px] flex justify-center items-center shrink-0 border-1 border-light border-b-3 border-b-accent'>
										<Image
											src={handshakeIcon}
											alt=''
											className='w-[30px] h-[30px]'
										/>
									</div>
									<div>
										<div className='text-lg font-bold md:text-[20px]'>
											Our promise
											<div className='mt-2.5 text-[14px] md:text-[15px]'>
												If our software, robots, people or suppliers get it
												wrong, we’ll re-make & re-ship for free. No pesky
												returns.
											</div>
										</div>
									</div>
								</div>
							</div>
							<ArticleTitle className='mt-32'>
								<>
									<span className='text-accent'>Trusted by 1,500+ </span>
									founders, CEOs, engineers, designers & scientists.
								</>
							</ArticleTitle>
							{/*TODO: Hhmm there is something wrong */}
							<div className='mt-10 w-full grid grid-cols-7 [&:nth-child(7n)]:bg-red-500'>
								{Array.from(Array(35).keys()).map((index) => (
									<div key={index} className='p-6 flex justify-center items-center  border-r-1 border-b-1 border-red-500'>
										<Image
											src={`/trusted-by/image-${index+1}.png`}
											alt=''
											width={100}
											height={100}
											className='object-cover'
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</article>
			</>
		</Container>
	);
}
