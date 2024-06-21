'use client';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { isMobilePhone } from 'validator';
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import addFileIcon from '@/images/utils/add-file.svg'
interface IFormData {
	name: string;
	email: string;
	phoneNumber: string;
	comment: string;
}

const schema: ZodType<IFormData> = z.object({
	name: z.string(),
	email: z.string().email('Incorrect email'),
	phoneNumber: z.string().refine(isMobilePhone),
	comment: z.string(),
});

export default function ContactUsForm() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	return (
		<div className={'p-10 bg-white rounded-sm'}>
			<form className={'flex flex-col gap-7'}>
				<Input
					type='string'
					variant={'underlined'}
					label='Name'
					className='text-white'
				/>
				<Input
					type='email'
					variant={'underlined'}
					label='Email'
					className='text-white'
				/>
				<Input
					type='string'
					variant={'underlined'}
					label='Phone number'
					className='text-white'
				/>
				<Input
					type='string'
					variant={'underlined'}
					label='Comment'
					className='text-white'
				/>
				<div className='relative'>
					<div className='flex gap-3 cursor-pointer'>
						<Image src={addFileIcon} alt={''}/>
						<div>Add file</div>
					</div>
					<input type='file' className='absolute top-0 opacity-0 cursor-pointer w-full'/>
				</div>
				<button type='submit' className={'w-full relative'}>
					<div className={'relative z-10 bg-accent px-12 rounded-sm'}>
						<div
							className={
								'py-[16px] text-white text-sm flex gap-3.5 justify-center items-center '
							}
						>
							<span className={'font-medium'}>Get an instant</span>
							<ArrowIcon color={'#FFFFFF'} />
						</div>
					</div>
					<div
						className={
							'w-full h-full absolute z-0 bg-accent-dark px-[48px] top-[4px] left-[4px] rounded-sm'
						}
					/>
				</button>
			</form>
		</div>
	);
}
