'use client';
import React from 'react';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { uploadPoster } from '@/actions/uploadFile';
import uploadImage from '@/images/utils/upload-cloud.png';
import { Spinner } from '@nextui-org/react';
import { GTM_ID } from '@/constants/analytics';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, CheckboxGroup, Input, Textarea } from '@nextui-org/react';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { Controller, useForm } from 'react-hook-form';
import { isMobilePhone } from 'validator';
import { z, ZodType } from 'zod';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import InputFile from '../custom-inputs/InputFile/InputFile';

const communicationCheckBox = [
	{
		name: 'Phone call',
		id: 'с1208400620394413с',
	},
	{
		name: 'WhatsApp',
		id: 'с1208400620394415с',
	},
	{
		name: 'Viber',
		id: 'с1208400620394417с',
	},
	{
		name: 'Telegram',
		id: 'с1208400620394416с',
	},
	{
		name: 'Email',
		id: 'с1208400620394414с',
	},
];

interface IFormData {
	name: string;
	companyName: string;
	email: string;
	phoneNumber: string;
	orderDetails: string;
	preferredCommunication?: string[];
	fileList?: File[];
}

const schema: ZodType<IFormData> = z.object({
	companyName: z.string(),
	name: z.string(),
	email: z.string().email('Incorrect email'),
	phoneNumber: z.string().refine(isMobilePhone, 'Invalid phone number'),
	orderDetails: z.string(),
	preferredCommunication: z.any(),
	fileList: z.any(),
});

export default function QuickFileDrop() {
	const {
		register,
		getValues,
		handleSubmit,
		reset,
		setError,
		control,
		formState: { errors, isSubmitted, isSubmitSuccessful },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	const [fileLinks, setFileLinks] = useState<string[]>([]);
	const [fileNames, setFileNames] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>();
	const handlePrevStep = () => {
		setFileLinks([]);
		setFileNames([]);
		setIsLoading(undefined);
	};

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setIsLoading(true);
		const files = Array.from(e.target.files);
		for (const file of files) {
			let formData = new FormData();
			const timestamp = Date.now();
			formData.append('file', file, `${timestamp}-${file.name}`);
			const link = await uploadPoster(formData);
			setFileLinks((prev) => [...prev, link]);
			setFileNames((prev) => [...prev, file.name]);
		}
		setIsLoading(false);
	};

	const action: () => void = handleSubmit(async (data: IFormData) => {
		const { fileList, ...rest } = data;
		let linkLists: string[] = [];
		if (fileList && fileList.length) {
			for (const file of fileList) {
				const formData = new FormData();
				const timestamp = Date.now();
				formData.append('file', file, `${timestamp}-${file.name}`);
				const link = await uploadPoster(formData);
				linkLists.push(link);
			}
		} else {
			linkLists = fileLinks || [];
		}

		try {
			await fetch(
				'https://hook.us1.make.com/6zj6taxck7n2e18ax3dkkh74ixzzfwae',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						...rest,
						linkLists,
					}),
				}
			);
			const tagManagerArgs: TagManagerArgs = {
				gtmId: GTM_ID,
				events: {
					event: 'Contact_Us',
					userData: {
						...rest,
					},
				},
			};

			TagManager.initialize(tagManagerArgs);
			reset();
		} catch {}
	});

	return (
		<>
			{(isLoading === undefined || isLoading) && (
				<div className='w-full mt-2.5 py-3 bg-light rounded-sm relative cursor-pointer'>
					<div className='flex flex-col justify-center items-center text-center'>
						{isLoading ? <Spinner /> : <Image src={uploadImage} alt='' />}
						{isLoading ? (
							<span className='text-lg mt-1 font-semibold'>
								Uploading  files
							</span>
						) : (
							<>
								<span className='text-lg mt-1 font-semibold'>
									Upload or drop CAD files here
								</span>
								<span className='text-xs mt-2'>
									File types: 3DM, 3DXML, 3MF, AI, DXF, EPS, IGES, IGS, IPT,
									OBJ, PDF,
									<br /> PRT, SAT, SLDPRT, STEP, STL, STP, SVG, X_T.
								</span>
								<span className='text-[10px] mt-2 text-[rgba(203, 203, 203, 1)]'>
									All uploads are secure and confidential
								</span>
								<span className='text-[10px] mt-2'>Read our design guides</span>
							</>
						)}
					</div>
					<input
						onChange={(e) => handleChange(e)}
						type='file'
						multiple={true}
						accept='image/*,.pdf'
						className='block w-full h-full absolute top-0 opacity-0 cursor-pointer'
					/>
				</div>
			)}
			{isLoading === false && (
				<div className='px-4 bg-white border-l-2 border-r-2 border-light'>
					<form onSubmit={action} className={'flex flex-col gap-4 md:gap-7'}>
						<Input
							type='string'
							variant={'underlined'}
							label='Name'
							className='text-white'
							required
							errorMessage={errors.name?.message}
							{...register('name')}
						/>
						<Input
							variant={'underlined'}
							label='Email'
							className='text-white'
							required
							isInvalid={Boolean(errors.email?.message)}
							errorMessage={errors.email?.message}
							{...register('email')}
						/>
						<Input
							type='string'
							variant={'underlined'}
							label='Company Name'
							className='text-white'
							required
							errorMessage={errors.companyName?.message}
							{...register('companyName')}
						/>
						<Input
							type='string'
							variant={'underlined'}
							label='Phone number'
							className='text-white'
							required
							isInvalid={Boolean(errors.phoneNumber?.message)}
							errorMessage={errors.phoneNumber?.message}
							{...register('phoneNumber')}
						/>
						<Textarea
							type='string'
							variant={'underlined'}
							label='Order details'
							className='text-white'
							maxLength={500}
							required
							errorMessage={errors.orderDetails?.message}
							{...register('orderDetails')}
						/>
						<Controller
							control={control}
							name='preferredCommunication'
							render={({ field: { onChange, value } }) => (
								<CheckboxGroup
									label='Preferred communication method'
									orientation='horizontal'
									color='primary'
									onChange={onChange}
								>
									{communicationCheckBox.map((e) => (
										<Checkbox
											key={e.id}
											value={e.id}
											classNames={{
												icon: 'text-white',
												label: 'text-sm',
											}}
										>
											{e.name}
										</Checkbox>
									))}
								</CheckboxGroup>
							)}
						/>

						<InputFile
							register={register('fileList')}
							multiple={true}
							selectedFiles={fileNames?.join(', ')}
							isSubmitted={isSubmitted}
							removeFilesHandler={handlePrevStep}
						/>

						{isSubmitSuccessful && (
							<div className='text-center font-bold'>
								You have successfully submitted the form. We will reach you in a
								moment !
							</div>
						)}
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
							></div>
						</button>
					</form>
				</div>
			)}
		</>
	);
}
