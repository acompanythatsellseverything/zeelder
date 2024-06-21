import Container from '../Container/Container';
import Image from 'next/image';
import instIcon from '@/images/utils/instagram-red.svg';
import faceBookIcon from '@/images/utils/facebook.svg';
import youTubeIcon from '@/images/utils/youTube.svg';
import Link from 'next/link';
import searchIcon from '@/images/utils/search.svg';
import phoneIcon from '@/images/utils/phone.svg'
import mailIcon from '@/images/utils/mail.svg'
import { Input } from '@nextui-org/react';

export default function Footer() {
	return (
		<footer className={'py-16'}>
			<Container>
				<div className={'grid grid-cols-2 lg:grid-cols-8 md:grid-cols-3 gap-6'}>
					<div className={'col-span-2 md:col-span-1 lg:col-span-3 lg:row-span-2 flex flex-col items-center lg:items-start'}>
						<div className={'bg-logo h-[26px] w-[189px]'} />
						<div className={'mt-5 text-[15px]'}>@2024 Zeelder.com</div>
						<div className='mt-4 flex gap-4'>
							<div
								className={
									'flex w-10 h-10 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={faceBookIcon} alt='' />
							</div>
							<div
								className={
									'flex w-10 h-10 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={instIcon} alt='' />
							</div>
							<div
								className={
									'flex w-10 h-10 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={youTubeIcon} alt='' />
							</div>
						</div>
					</div>

					<div className='col-span-2 lg:col-span-3 lg:row-span-2 flex justify-between md:justify-end'>
						<div>
							<div className={'text-lg font-semibold'}>Navigation</div>
							<div className='mt-5 grid grid-cols-2 gap-1 lg:gap-4'>
								<Link href={''}>Hardware build</Link>
								<Link href={''}>Founders</Link>
								<Link href={''}>Stages of work</Link>
								<Link href={''}>Contact us</Link>
								<Link href={''}>Quality record</Link>
							</div>
						</div>
						<div>
							<div className={'text-lg font-semibold'}>Information</div>
							<div className='mt-5 grid grid-cols-1 gap-1'>
								<Link href={''}>Privacy Policy</Link>
								<Link href={''}>License Types</Link>
								<Link href={''}>Terms and Conditions</Link>
							</div>
						</div>
					</div>

					<div className='col-span-2 md:col-span-1 lg:col-span-2'>
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
					</div>
					<div className='col-span-2 flex flex-col items-center gap-2 lg:items-start'>
						<div className='flex gap-2'>
							<div
								className={
									'flex w-7 h-7 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={phoneIcon} alt='' />
							</div>
							<span className='text-xl font-semibold'>+4(465)565-96-25</span>
						</div>
						<div className='flex gap-2'>
							<div
								className={
									'flex w-7 h-7 justify-center items-center border-1 border-light border-b-2 border-b-accent'
								}
							>
								<Image src={mailIcon} alt='' />
							</div>
							<span className='text-xl font-semibold'>infpq1@gmail.com</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
