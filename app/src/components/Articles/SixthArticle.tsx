import Image from 'next/image';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Container from '../Container/Container';
import subtractImage from '@/images/subtract.png';
import playIcon from '@/images/utils/play.svg';

export default function SixthArticle() {
	return (
		<Container className={'relative'}>
			<>
				<div className='hidden xl:flex absolute h-full top-0 left-16 flex-col justify-center items-center'>
					<span className={'text-accent text-center text-xs'}>07</span>
					<div className={'w-0.5 h-32 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div>
				<article className='mt-16'>
					<div className=''>
						<ArticleTitle>Watch our production video</ArticleTitle>
					</div>
					<div className={'mt-[30px] w-full max-h-[500px] relative'}>
						<Image
							src={subtractImage}
							alt=''
							className='object-fill w-full max-h-[500px]'
						/>
						<button className='py-2 px-4 md:py-3 md:px-10 mt-5 mr-5 absolute top-0 right-0 bg-white text-[14px] md:text-[18px] rounded-sm'>
							<div className='flex gap-3'>
								<Image src={playIcon} alt='' />
								<span>Full review</span>
							</div>
						</button>
					</div>
					<div className='w-full h-16'></div>
				</article>
			</>
		</Container>
	);
}
