import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import Container from '@/components/Container/Container';
import playIcon from '@/images/utils/play.svg';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';
import closeIcon from '@/images/utils/close.svg'
import React from 'react';

export default function SixthArticle() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<Container className={'relative lg:mt-32 pb-16'}>
			<ArticleScroll title='06' coloredLineHeight='2rem' />
			<article className='mt-16'>
				<div className=''>
					<ArticleTitle>Watch our production video</ArticleTitle>
				</div>
				<div
					className={
						'mt-[30px] w-full max-h-[500px] lg:max-h-[600px] relative overflow-hidden'
					}
				>
					<div>
						<video
							src={require('../../../public/video.mp4')}
							playsInline
							autoPlay
							muted
							loop
							preload='none'
							className='object-fill w-full relative bottom-0 lg:bottom-36'
						></video>
						<button
							onClick={onOpen}
							className='py-2 px-4 md:py-3 md:px-10 mt-5 mr-5 absolute top-0 right-0 bg-white text-[14px] md:text-[18px] rounded-sm'
						>
							<div className='flex gap-3'>
								<Image src={playIcon} alt='' />
								<span>Full review</span>
							</div>
						</button>
					</div>
					<Modal
						isOpen={isOpen}
						size='5xl'
						classNames={{
							base: 'py-0 bg-transparent',
							closeButton: 'hidden',
						}}
						placement='center'
						onOpenChange={onOpenChange}	
					>
						<ModalContent className='py-10 w-full shadow-none'>
							{(onClose) => (
								<div className='flex flex-col items-center shadow-none md:gap-4'>
									<iframe
										src='https://player.vimeo.com/video/994941403?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
										width='100%'
										height='500'
										frameBorder='0'
										allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
										title='video'
									/>
									<Image onClick={onOpenChange} src={closeIcon} alt='' className='bg-white rounded-full p-2 cursor-pointer' />
								</div>
							)}
						</ModalContent>
					</Modal>
				</div>
				<div className='w-full h-16'></div>
			</article>
		</Container>
	);
}
