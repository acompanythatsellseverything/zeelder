import Container from '../Container/Container';
import Image from 'next/image';
import instIcon from '@/images/utils/instagram-red.svg';
import faceBookIcon from '@/images/utils/facebook.svg';
import Link from 'next/link';
import phoneIcon from '@/images/utils/phone.svg';
import mailIcon from '@/images/utils/mail.svg';

export default function Footer() {
	return (
		<footer className={'py-16'}>
			<Container>
				<div className={'grid grid-cols-2 lg:grid-cols-8 md:grid-cols-3 gap-6'}>
					<div
						className={
							'col-span-2 md:col-span-1 lg:col-span-3 lg:row-span-2 flex flex-col items-center lg:items-start'
						}
					>
						<div className={'bg-logo h-[30px] w-[180px] bg-no-repeat'} />
						<div className={'mt-5 text-[15px]'}>@2024 Zeelder.com</div>
						<div className='mt-4 flex gap-4'>
							<Link
								href={'https://www.facebook.com/zeelder.machinery'}
								className={
									'flex w-10 h-10 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={faceBookIcon} alt='' />
							</Link>
							<Link
								href={'https://instagram.com/zeelder.machinery'}
								className={
									'flex w-10 h-10 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={instIcon} alt='' />
							</Link>
							<Link
								href={'mailto:engineering@zeelder.com'}
								className={
									'flex w-10 h-10 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={mailIcon} alt='' className='w-6 h-6' />
							</Link>
						</div>
					</div>

					<div className='col-span-2 lg:col-span-3 lg:row-span-2 flex justify-between gap-4 md:justify-end'>
						<div>
							<div className={'text-lg font-semibold'}>Navigation</div>
							<div className='mt-5 grid sm:grid-cols-2 gap-1 lg:gap-4'>
								<Link href={'#hardware-build'}>Hardware build</Link>
								{/* <Link href={''}>Founders</Link> */}
								<Link href={'#stage-of-work'}>Stages of work</Link>
								<Link href={'#contact-us'}>Contact us</Link>
								<Link href={'#quality'}>Quality record</Link>
							</div>
						</div>
						<div>
							<div className={'text-lg font-semibold'}>Information</div>
							<div className='mt-5 grid grid-cols-1 gap-1 lg:gap-4'>
								<Link href={'/privacy-policy'}>Privacy Policy</Link>
								{/* <Link href={''}>License Types</Link> */}
								<Link href={'terms-and-conditions'}>Terms and Conditions</Link>
							</div>
						</div>
					</div>

					{/* <div className='col-span-2 md:col-span-1 lg:col-span-2'>
						<Input
							variant='bordered'
							radius='sm'
							label='Search'
							endContent={
								<div className='flex justify-center items-center h-full'>
									<Image
										src={searchIcon}
										alt=''
										className='pointer-events-none flex items-center'
									/>
								</div>
							}
						/>
					</div> */}
					<div className='col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-center gap-2 lg:items-start'>
						{/* <div className='flex gap-2'>
							<div
								className={
									'flex w-7 h-7 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={phoneIcon} alt='' />
							</div>
							<span className='text-xl font-semibold'>+4(465)565-96-25</span>
						</div> */}
						<div className='flex gap-2'>
							<div
								className={
									'flex w-7 h-7 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={mailIcon} alt='' />
							</div>
							<span className='text-xl font-semibold'>engineering@zeelder.com</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
