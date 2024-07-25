/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import Link from 'next/link';

export default function page() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='overflow-hidden grow basis-full h-full'>
				<Container>
					<div className='max-w-[1200px] [&>p]:mt-8 '>
						<h1 className='mt-12 text-4xl font-bold'>Privacy and Policy</h1>
						<h2 className='mt-10 text-2xl font-bold'>Welcome to Zeelder</h2>
						<p>
							Zeelder offers a range of services to customers and prospective
							customers to assist them in the manufacture of their parts and
							assemblies by providing them with the ability to purchase those
							parts and assemblies from Zeelder (“Customer”). Zeelder has a
							network of third-party manufacturers capable of performing
							manufacturing services on Zeelder’s behalf (“Partners”) to which
							Zeelder provides various services and software to assist Partners
							in operating their manufacturing businesses. Customers and
							Partners (collectively referred to as “You”). You may interact
							with Zeelder and provide us information through our software
							plug-ins, our online platforms at{' '}
							<Link href='/' className='text-accent'>www.zeelder.com</Link> (and all associated
							subdomains) (collectively referred to as the “Website”), or by
							speaking with our employees and other representatives in support
							of the various services that we provide to you as a Customer or
							Partner (collectively, the “Services”). Zeelder (“Zeelder” or “we”
							or “us”) has created this Privacy Policy to explain to you our
							privacy practices regarding the information we gather from you
							when you visit our Website and utilize the Services.
						</p>
						<p>
							This Privacy Policy aims to give you information on how Zeelder
							collects and processes your personal data through your use of the
							Website and our Services for our own purposes (i.e., where we are
							the Controller). It is intended to meet our duties as a Controller
							of Transparency under European data protection legislation known
							as the “GDPR” or “General Data Protection Regulation”. This
							Privacy Policy does not describe how we process personal data on
							our customer’s or any other person’s instructions (i.e., where we
							act as a Processor).
						</p>
						<p>
							This Privacy Policy is subject to occasional revision, and if we
							make any material changes in the way we use your personal data, we
							may notify you by sending you an e-mail to the last e-mail address
							you provided to us and/or by prominently posting notice of the
							changes on our Website. Any changes to this Privacy Policy will be
							effective upon the earlier of thirty (30) calendar days following
							our dispatch of an e-mail notice to you or thirty (30) calendar
							days following our posting of notice of the changes on our
							Website. These changes will be effective immediately for new users
							of our Services. Please note that at all times you are responsible
							for updating your personal data to provide us with your most
							current e-mail address. In the event that the last e-mail address
							that you have provided us is not valid, or for any reason is not
							capable of delivering to you the notice described above, our
							dispatch of the e-mail containing such notice will nonetheless
							constitute effective notice of the changes described in the
							notice. If you do not wish to permit changes in our use of your
							personal data, you must notify us prior to the effective date of
							the changes that you wish to deactivate your Account with us.
							Continued use of our Website or Services, following notice of such
							changes shall indicate your acknowledgment of such changes and
							agreement to be bound by the terms and conditions of such changes.
						</p>
					</div>
				</Container>
			</main>
			<Footer />
		</div>
	);
}
