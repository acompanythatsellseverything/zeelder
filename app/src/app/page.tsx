'use client';
import Header from '@/components/Header/Header';
import FirstArticle from '../components/Articles/FirstArticle';
import SecondArticle from '../components/Articles/SecondArticle';
import ThirdArticle from '../components/Articles/ThirdArticle';
import FourthArticle from '../components/Articles/FourthArticle';
import FifthArticle from '../components/Articles/FifthArticle';

export default function Home() {
	return (
		<>
			<Header />
			<main className='overflow-hidden'>
				<FirstArticle />
				<div
					className={
						'h-[120px] w-full bg-black mt-16 bg-divider-1-bg flex items-center'
					}
				>
					<div className={'bg-divider-1-cont w-full h-[84px]'}></div>
				</div>
				<SecondArticle />
				<ThirdArticle />
				<FourthArticle />
				<FifthArticle />
			</main>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}
