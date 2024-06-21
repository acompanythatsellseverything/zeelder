'use client';
import Header from '@/components/Header/Header';
import EighthArticle from '../components/Articles/EighthArticle';
import FifthArticle from '../components/Articles/FifthArticle';
import FirstArticle from '../components/Articles/FirstArticle';
import FourthArticle from '../components/Articles/FourthArticle';
import NinthhArticle from '../components/Articles/NinthArticle';
import SecondArticle from '../components/Articles/SecondArticle';
import SeventhArticle from '../components/Articles/SeventhArticle';
import SixthArticle from '../components/Articles/SixthArticle';
import ThirdArticle from '../components/Articles/ThirdArticle';
import Footer from '../components/Footer/Footer';

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
				<SixthArticle />
				<SeventhArticle />
				<EighthArticle />
				<NinthhArticle />
			</main>
			<Footer />
		</>
	);
}
