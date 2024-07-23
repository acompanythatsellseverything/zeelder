'use client';
import { RadioGroup, Radio, cn, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import uploadImage from '@/images/utils/upload-cloud.png';
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

const CustomRadio = (props: any) => {
	const { children, ...otherProps } = props;
	return (
		<Radio
			{...otherProps}
			classNames={{
				base: cn(
					'flex items-start m-0 bg-content1 hover:bg-content2 justify-between',
					'max-w-full lg:basis-1/2 cursor-pointer rounded-sm gap-1 px-5 py-4 border-2 border-light',
					'data-[selected=true]:border-accent'
				),
				description: cn('text-sm mt-2 text-black'),
				wrapper: cn('mt-1'),
				label: cn('text-lg font-bold'),
			}}
		>
			{children}
		</Radio>
	);
};

interface IFormData {
	material: string;
	quantity: string;
	about: string;
	email: string;
}

const schema: ZodType<IFormData> = z.object({
	material: z.string(),
	quantity: z.string(),
	about: z.string(),
	email: z.string().email('Incorrect email'),
});

export default function UploadCADForm() {
	const [selected, setSelected] = useState('1');

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	const action: () => void = handleSubmit(async (data: IFormData) => {console.log(data)});

	return (
		<div className={'text-base py'}>
			<RadioGroup
				value={selected}
				onValueChange={setSelected}
				color='primary'
				classNames={{
					wrapper: cn('grid sm:grid-cols-2 '),
				}}
			>
				<CustomRadio
					description='Upload CAD files and receive your quote in minutes, not days		'
					value='1'
				>
					Get an instant quote online
				</CustomRadio>
				<CustomRadio
					description='Get in touch with our engineering team and discuss your order'
					value='2'
				>
					Collaborate with an engineer
				</CustomRadio>
			</RadioGroup>
			{selected === '1' ? (
				<div className='w-full mt-2.5 py-3 bg-light rounded-sm relative cursor-pointer'>
					<div className='flex flex-col justify-center items-center text-center'>
						<Image src={uploadImage} alt='' />
						<span className='text-lg mt-1 font-semibold'>
							Upload or drop CAD files here
						</span>
						<span className='text-xs mt-2'>
							File types: 3DM, 3DXML, 3MF, AI, DXF, EPS, IGES, IGS, IPT, OBJ,
							PDF,
							<br /> PRT, SAT, SLDPRT, STEP, STL, STP, SVG, X_T.
						</span>
						<span className='text-[10px] mt-2 text-[rgba(203, 203, 203, 1)]'>
							All uploads are secure and confidential
						</span>
						<span className='text-[10px] mt-2'>Read our design guides</span>
					</div>
					<input
						type='file'
						className='block w-full h-full absolute top-0 opacity-0 cursor-pointer'
					/>
				</div>
			) : (
				<form onSubmit={action} className={'mt-10 flex flex-col gap-7'}>
					<Input
						type='string'
						label='Enter your part material'
						className='text-white'
						{...register('material')}
					/>
					<Input
						type='string'
						label='Enter your part quantity'
						className='text-white'
						
						{...register('quantity')}
					/>
					<Textarea
						type='string'
						label='Tell us about your part / needs'
						className='text-white'
						{...register('about')}
					/>
					<Input
						type='email'
						label='Email'
						className='text-white'
						{...register('email')}
					/>
					<button type='submit' className={'w-full relative mt-5'}>
					<div className={'relative z-10 bg-accent px-12 rounded-sm'}>
						<div
							className={
								'py-[16px] text-white text-sm flex gap-3.5 justify-center items-center '
							}
						>
							<span className={'font-medium'}>Get an instant quote</span>
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
			)}
		</div>
	);
}
