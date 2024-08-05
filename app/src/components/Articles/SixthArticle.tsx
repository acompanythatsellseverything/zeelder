import Image from 'next/image';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import playIcon from '@/images/utils/play.svg';
import ArticleScroll from '../ArticleScroll/ArticleScroll';
import {
	Modal,
	ModalContent,
	ModalBody,
	useDisclosure,
} from '@nextui-org/react';

export default function SixthArticle() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<Container className={'relative'}>
			<>
				{/* <div className='hidden xl:flex absolute h-full top-0 left-16 flex-col justify-center items-center'>
					<span className={'text-accent text-center text-xs'}>06</span>
					<div className={'w-0.5 h-32 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div> */}
				<ArticleScroll title='06' coloredLineHeight='8' />
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
								closeButton: 'hidden'
							}}
							placement='center'
							onOpenChange={onOpenChange}
						>
							<ModalContent className='py-10 w-full'>
								{(onClose) => (
									<>
										{/* <ModalBody className='w-full flex justify-center'> */}
											<iframe
												src='https://player.vimeo.com/video/994941403?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
												width='100%'
												height='500'
												// className='w-full h-full min-h-[500px]'
												frameBorder='0'
												allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
												title='video'
											></iframe>
										{/* </ModalBody> */}
									</>
								)}
							</ModalContent>
						</Modal>
					</div>
					<div className='w-full h-16'></div>
				</article>
			</>
		</Container>
	);
}
