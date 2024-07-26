import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { GA_ID, MICROSOFT_CLARITY_ID } from '../constants/analytics';
import Script from 'next/script';

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
				<GoogleAnalytics gaId={GA_ID} />
				<Script id='clarity-script' strategy='afterInteractive'>
					{`
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    			})(window, document, "clarity", "script", "${MICROSOFT_CLARITY_ID}");
					`}
				</Script>
			</body>
		</html>
	);
}
