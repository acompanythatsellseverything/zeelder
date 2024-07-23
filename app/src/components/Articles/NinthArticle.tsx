import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import Image from 'next/image';
import slideImage from '@/images/slide-10-image.png';
import ContactUsForm from '../ContactUsForm/ContactUsForm';

export default function NinthArticle() {
	return (
		<Container
		id='contact-us'
			className={
				'mt-16 relative bg-[#181818] bg-slide-10-bg bg-no-repeat overflow-hidden bg-cover'
			}
		>
			<>
				<div className='hidden xl:flex absolute h-full top-0 left-16 flex-col justify-center items-center'>
					<div className={'w-0.5 h-32 bg-dark-light rounded-b-md'}></div>
					<span className={'text-white text-center text-xs mt-2.5'}>9</span>
					<div className={'w-0.5 h-16 bg-white mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-dark-light rounded-b-md'}></div>
				</div>
				<div
					className={
						'md:block absolute top-14 md:left-0 lg:left-[100px] md:bottom-20'
					}
				>
					<Image
						src={slideImage}
						alt=''
						className='md:max-w-full'
					/>
				</div>

				<article className={'relative py-16 lg:py-20 z-30'}>
					<div className={'flex flex-col md:flex-row justify-between'}>
						<div>
							<ArticleTitle className='text-white max-w-3xl'>
								Contact us
							</ArticleTitle>
						</div>
						<div className='mt-36 md:mt-6 max-w-none md:max-w-[420px] lg:max-w-[540px] grow'>
							<ContactUsForm />
						</div>
					</div>
				</article>
			</>
		</Container>
	);
}
