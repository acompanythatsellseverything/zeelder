import Image from 'next/image';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import Container from '@/components/Container/Container';
import ContactUsForm from '@/components/ContactUsForm/ContactUsForm';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';
import slideImage from '@/images/slide-10-image.png';

export default function NinthArticle() {
	return (
		<Container
			id='contact-us'
			className={
				'relative bg-[#181818] bg-slide-10-bg bg-no-repeat overflow-hidden bg-cover'
			}
		>
			<ArticleScroll
				title='09'
				color='white'
				topLineHeight='5rem'
				coloredLineHeight='2rem'
			/>
			<div
				className={
					'md:block absolute top-14 md:left-0 lg:left-[100px] md:bottom-20'
				}
			>
				<Image src={slideImage} alt='' className='md:max-w-full' />
			</div>

			<article className={'relative py-16 lg:py-20 z-30'}>
				<div className={'flex flex-col md:flex-row justify-between'}>
					<div>
						<ArticleTitle className='text-white max-w-3xl'>
							Contact us
						</ArticleTitle>
					</div>
					<div className='mt-36 md:mt-6 max-w-none md:max-w-[420px] lg:max-w-[540px] grow'>
						<div className='bg-white rounded-sm p-10'>
							<ContactUsForm />
						</div>
					</div>
				</div>
			</article>
		</Container>
	);
}
