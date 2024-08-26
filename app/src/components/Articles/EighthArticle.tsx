import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';
import insIcon from '@/images/utils/instagram.svg';
import img0 from '@/images/masonry/0.png';
import img1 from '@/images/masonry/1.png';
import img2 from '@/images/masonry/2.png';
import img3 from '@/images/masonry/3.png';
import img4 from '@/images/masonry/4.png';
import img5 from '@/images/masonry/5.png';
import img6 from '@/images/masonry/6.png';
import img7 from '@/images/masonry/7.png';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [img0, img2, img4, img6, img1, img3, img5, img7];

export default function EighthArticle() {
	return (
		<Container className={'relative overflow-visible pb-16'}>
			<ArticleScroll title='08' topLineHeight='5rem' coloredLineHeight='2rem' />
			<article>
				<div className='pt-16 lg:pt-20'>
					<ArticleTitle>Our Instagram</ArticleTitle>
				</div>
				<div className='mt-[30px]'>
					<ResponsiveMasonry
						columnsCountBreakPoints={{
							350: 2,
							768: 3,
							1400: 4
						}}
					>
						<Masonry
						gutter='0.5rem'
						>
							{images.map((image, index) => (
								<Link
									key={`masonry-${index}`}
									href={'https://instagram.com/zeelder.machinery'}
									className='relative '
								>
									<Image
										src={image}
										alt=''
										className='w-full rounded-sm object-fill'
										loading={'lazy'}
									/>
									<div
										className={
											'absolute bottom-4 left-0 flex justify-between w-full px-2.5'
										}
									>
										<div className='text-white'>zeelder.inst</div>
										<Image src={insIcon} alt='' />
									</div>
								</Link>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</article>
		</Container>
	);
}
