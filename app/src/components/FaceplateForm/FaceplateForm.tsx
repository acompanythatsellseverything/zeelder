'use client';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, cn, Radio, RadioGroup } from '@nextui-org/react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

interface IFormData {
	complexity: string;
	partSize: string;
	quantity: string;
}

const schema: ZodType<IFormData> = z.object({
	complexity: z.string(),
	partSize: z.string(),
	quantity: z.string(),
});

const CustomRadio = (props: any) => {
	const { children, ...otherProps } = props;
	return (
		<Radio
			{...otherProps}
			classNames={{
				base: cn(
					'max-w-none grow group border-1 border-light m-0 px-3 py-[10px] cursor-pointer data-[selected=true]:border-accent data-[selected=true]:bg-accent'
				),
				wrapper: cn('hidden'),
				labelWrapper: cn('m-0 p-0 w-full text-center'),
				description: cn('hidden'),
				label: cn(`text-xs group-data-[selected=true]:text-white`),
			}}
		>
			{children}
		</Radio>
	);
};

export default function FaceplateForm() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });
	const action: () => void = handleSubmit(async (data: IFormData) => {});

	return (
		<div className={''}>
			<form onSubmit={action}>
				<div className={'border-1 border-light'}>
					<div className={'px-6 py-4'}>
						<h2 className={'text-xl font-semibold'}>Aluminum Faceplate</h2>
						<RadioGroup
							className={'mt-2'}
							label={'Complexity'}
							classNames={{
								wrapper: cn('flex flex-row gap-0 w-full '),
							}}
						>
							<CustomRadio value='simple' {...register('complexity')}>
								Simple
							</CustomRadio>
							<CustomRadio value='moderate' {...register('complexity')}>
								Moderate
							</CustomRadio>
							<CustomRadio value='heavy' {...register('complexity')}>
								Heavy
							</CustomRadio>
						</RadioGroup>

						<RadioGroup
							className={'mt-2'}
							label={'Part Size'}
							classNames={{
								wrapper: cn('flex flex-row gap-0 '),
							}}
						>
							<CustomRadio value='small' {...register('partSize')}>
								Small
							</CustomRadio>
							<CustomRadio value='medium' {...register('partSize')}>
								Medium
							</CustomRadio>
							<CustomRadio value='large' {...register('partSize')}>
								Large
							</CustomRadio>
						</RadioGroup>

						<RadioGroup
							className={'mt-2'}
							label={'Quantity'}
							classNames={{
								wrapper: cn('flex flex-row gap-0 '),
							}}
						>
							<CustomRadio value='1' {...register('quantity')}>
								1
							</CustomRadio>
							<CustomRadio value='100' {...register('quantity')}>
								100
							</CustomRadio>
							<CustomRadio value='500' {...register('quantity')}>
								500
							</CustomRadio>
							<CustomRadio value='1000' {...register('quantity')}>
								1000
							</CustomRadio>
							<CustomRadio value='10000' {...register('quantity')}>
								10 000
							</CustomRadio>
						</RadioGroup>
					</div>
				</div>
				<div className={'px-6 py-4 w-full flex justify-between border-l-1 border-r-1 border-light border-b-4 border-b-accent rounded-b-sm'}>
					<span>Estimated Cost Per Part:</span>
					
					<span className={'text-accent'}>€2.36</span>
				</div>
				{/* <button type='submit' className={'w-full relative mt-10'}>
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
				</button> */}
			</form>
		</div>
	);
}
