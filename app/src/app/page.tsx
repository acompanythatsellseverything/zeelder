'use client';
import dynamic from 'next/dynamic'
import Header from '@/components/Header/Header';
import FifthArticle from '@/components/Articles/FifthArticle';
import FirstArticle from '@/components/Articles/FirstArticle';
import FourthArticle from '@/components/Articles/FourthArticle';
import NinthArticle from '@/components/Articles/NinthArticle';
import SecondArticle from '@/components/Articles/SecondArticle';
import SeventhArticle from '@/components/Articles/SeventhArticle';
import ThirdArticle from '@/components/Articles/ThirdArticle';
import Footer from '@/components/Footer/Footer';
import AutoPlaySlider from '@/components/AutoPlaySlider/AutoPlaySlider';



const DynamicSixthArticle = dynamic(() => import('@/components/Articles/SixthArticle'), {
  loading: () => <p></p>,
})

const DynamicEighthArticle = dynamic(() => import('@/components/Articles/EighthArticle'), {
  loading: () => <p></p>,
})
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
				<DynamicSixthArticle />
				<SeventhArticle />
				<DynamicEighthArticle />
				<NinthArticle />
			</main>
			<Footer /> 
		</>
	);
}
