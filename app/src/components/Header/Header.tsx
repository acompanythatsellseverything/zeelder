import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';

export default function Header() {
	return (
		<header className={'py-7 border-b-1 border-light'}>
			<Container>
				<NavBar />
			</Container>
		</header>
	);
}
