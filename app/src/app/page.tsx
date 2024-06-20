import Header from '@/components/Header/Header';
import FirstArticle from '../components/Articles/FirstArticle';
import { Button } from '@nextui-org/react';

export default function Home() {
	return (
		<>
			<Header />
			<main className='overflow-hidden'>
				<FirstArticle />
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
