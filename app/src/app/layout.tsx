import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';

const inter = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zeelder',
	description:
		'The fastest provider of online custom laser cutting, bending, welding & digital prototyping services in Europe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
