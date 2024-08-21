'use client';
import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Image from 'next/image';
import premiumIcon from '@/images/utils/premium-quality.svg';
import handshakeIcon from '@/images/utils/handshake.svg';
import ArticleScroll from '../ArticleScroll/ArticleScroll';

export default function FifthArticle() {
	const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
		handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	const isTablet = windowDimensions.width > 768 && windowDimensions.width < 1024;
	const isLaptop = windowDimensions.width > 1024;

	return (
		<Container className={'relative overflow-visible lg:pt-8'} id='quality'>
			<>
				<ArticleScroll title='05' coloredLineHeight='10rem' topLineHeight='9rem'/>
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
							<ArticleTitle className='mt-14 md:mt-16 lg:mt-24'>
								<>
									<span className='text-accent'>Trusted by 1,500+ </span>
									founders, CEOs, engineers, designers & scientists.
								</>
							</ArticleTitle>
							{/*TODO: Hhmm there is something wrong */}
							<div className='mt-10 w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>
								{Array.from(Array(35).keys()).map((index) => {
									const cols = isLaptop ? 7 : (isTablet ? 5 : 3);
									return (
										<div
											key={index}
											className={`p-6 flex justify-center items-center 
												${(index + 1) % cols !== 0 && 'border-r-1'}
											${index + 1 <= cols * 4 && 'border-b-1'}
											${index + 1 > cols * 5 ? 'hidden': ''}
											`}
										>
											<Image
												src={`/trusted-by/image-${index + 1}.png`}
												alt=''
												width={100}
												height={100}
												className='object-cover'
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</article>
			</>
		</Container>
	);
}
