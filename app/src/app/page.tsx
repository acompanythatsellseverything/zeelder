'use client';
import Header from '@/components/Header/Header';
import EighthArticle from '../components/Articles/EighthArticle';
import FifthArticle from '../components/Articles/FifthArticle';
import FirstArticle from '../components/Articles/FirstArticle';
import FourthArticle from '../components/Articles/FourthArticle';
import NinthArticle from '../components/Articles/NinthArticle';
import SecondArticle from '../components/Articles/SecondArticle';
import SeventhArticle from '../components/Articles/SeventhArticle';
import SixthArticle from '../components/Articles/SixthArticle';
import ThirdArticle from '../components/Articles/ThirdArticle';
import Footer from '../components/Footer/Footer';
import AutoPlaySlider from '../components/AutoPlaySlider/AutoPlaySlider';

export default function Home() {
	return (
		<>
			<Header />
			<main className='overflow-hidden'>
				<FirstArticle />
				<AutoPlaySlider/>
				<SecondArticle />
				<ThirdArticle />
				<FourthArticle />
				<FifthArticle />
				<SixthArticle />
				<SeventhArticle />
				<EighthArticle />
				<NinthArticle />
			</main>
			<Footer />
		</>
	);
}
