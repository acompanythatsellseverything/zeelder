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
						<h1 className='mt-12 text-4xl font-bold'>Terms and Conditions</h1>
						<h2 className='mt-10 text-2xl font-bold'>Welcome to Zeelder</h2>
						<p>
							The official website for Zeelder (“Zeelder” or “we” or “us”). The
							following is important information regarding this Site, our
							copyright to its contents, and the terms for your use of the Site
							as a visitor to or registered member of the Zeelder community.
							These Terms of Use govern your use of the Site. Registration and
							certain other information submitted by you are subject to our
							applicable Privacy Policy, the terms and conditions of which are
							expressly incorporated herein by this reference. For more
							information, see our full Privacy Policy at{' '}
							<Link href='/privacy-policy' className='text-accent'>
								www.zeelder.com/privacy-policy
							</Link>
							.
						</p>
						<p>
							By using this Site you agree to be bound by these Terms of Use and
							to use the Site in accordance with these Terms of Use, our Privacy
							Policy, and any additional terms and conditions that are
							referenced herein or that otherwise may apply to specific sections
							of the Site, or to products and services that we make available to
							you through the Site (all of which are deemed part of these Terms
							of Use). Accessing the Site, in any manner, whether automated or
							otherwise constitutes use of the Site and your agreement to be
							bound by these Terms of Use.
						</p>
						<ul className={`mt-10 flex flex-col gap-5 w-4/6 list-disc [&>li]:ml-5`}>
							<li>
								Each time you use the Site, this Terms of Use applies to your
								use. Any updates to it will apply to you; so you should check
								back frequently for any updates.
							</li>
							<li>
								You may only use the content on the Site in connection with your
								permitted activities on the Site — you may not use the Site for
								political, unlawful or inappropriate purposes.
							</li>
							<li>
								By using the Site, you will not obtain any ownership or
								intellectual property or other interest in it or any virtual or
								other items that may appear on the Site or that may be used in
								connection with it.
							</li>
							<li>
								Except as set forth in the Privacy Policy that applies to the
								Site, you and Zeelder do not have a confidential, fiduciary, or
								any other special relationship by virtue of your use of the Site
								or your communications to Zeelder through or related to the
								Site.
							</li>
							<li>
								Many types of disputes that may arise in connection with your
								access to and use of the Site may only be resolved by
								arbitration — which includes your waiver of a right to a jury
								trial.
							</li>
							<li>
								Zeelder is providing the Site to you on an “as is” basis,
								without any warranty of any kind, and Zeelder’s liability to you
								in connection with your use of the Site is very limited.
							</li>
						</ul>
						<p>
							We reserve the right to change these Terms of Use or to impose new
							conditions on use of the Site, from time to time, in which case we
							will post the revised Terms of Use on this Site and update the
							“Last Updated” date above to reflect the date of the changes. By
							continuing to use the Site after we post any such changes, you
							accept the Terms of Use, as modified. We also reserve the right to
							deny access to the Site or any features of the Site to anyone who
							violates these Terms of Use or who, in our sole judgment,
							interferes with the ability of others to enjoy our Site or
							infringes the rights of others.
						</p>
					</div>
				</Container>
			</main>
			<Footer />
		</div>
	);
}
