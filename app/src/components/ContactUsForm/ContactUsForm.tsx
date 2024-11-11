'use client';
import { GTM_ID } from '@/constants/analytics';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, CheckboxGroup, Input, Textarea } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { Controller, useForm } from 'react-hook-form';
import { isMobilePhone } from 'validator';
import { z, ZodType } from 'zod';
import { uploadPoster } from '../../actions/uploadFile';
import InputFile from '../custom-inputs/InputFile/InputFile';
import ArrowIcon from '../icons/ArrowIcon/ArrowIcon';
import LoadingDots from '../LoadingDots/LoadingDots';
import SuccessSubmitPopUp from '../SuccessSubmitPopUp/SuccessSubmitPopUp';
import FilesNotSelectedModal from '../FilesNotSelectedModal/FilesNotSelectedModal';
import { useQueryParams } from '../../providers/QueryParamsProvider';

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
	companyName: string;
	name: string;
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

interface IProps {
	fileInputIsDisabled?: boolean;
	preUploadLinks?: string[];
	fileNames?: string[];
}

export default function ContactUsForm({
	fileInputIsDisabled,
	preUploadLinks,
	fileNames,
}: IProps) {
	const {
		register,
		setValue,
		handleSubmit,
		reset,
		control,
		formState: { errors, isSubmitted, isSubmitSuccessful, ...rest },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	const [isLoading, setIsLoading] = useState<boolean>();
	const [isFileModalNotShowed, setIsFileModalNotShowed] = useState<boolean>();
	const queryParams = useQueryParams();
	const searchparams = useSearchParams();

	const handleOpenFileReminderModal = () => setIsFileModalNotShowed(true);
	const handleCloseFileReminderModal = () => setIsFileModalNotShowed(false);
	const onSubmit = async (data: IFormData) => {
		const { fileList, ...rest } = data;
		if (
			!fileList?.length &&
			!fileInputIsDisabled &&
			isFileModalNotShowed !== false
		) {
			handleOpenFileReminderModal();
			throw Error('File is not selected');
		}
		setIsLoading(true);

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
			linkLists = preUploadLinks || [];
		}

		try {
			let params;
			if (!queryParams) {
				const searchEntries = searchparams.entries();
				params = Object.fromEntries(searchEntries);
			} else {
				params = queryParams;
			}

			const pathname = window.location.href;

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
						pathname,
						utm: params,
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
			setIsLoading(false);
			reset();
		} catch {}
	};

	const handleAddFiles = (files: File[]) => {
		setValue('fileList', files);
	};

	return (
		<div className={'bg-white'}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={'flex flex-col gap-4 md:gap-7'}
			>
				<Input
					type='string'
					variant={'underlined'}
					label='Full Name'
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
				{!fileInputIsDisabled && (
					<InputFile
						register={register('fileList')}
						multiple={true}
						isSubmitted={isSubmitted}
						setFiles={handleAddFiles}
					/>
				)}
				{isSubmitSuccessful && (
					<div className='text-center font-bold'>
						You have successfully submitted the form. We will reach you in a
						moment !
					</div>
				)}
				<button
					type='submit'
					className={`w-full relative ${isLoading && 'cursor-wait'}`}
					disabled={isLoading}
				>
					<div className={'relative z-10 bg-accent px-12 rounded-sm'}>
						<div
							className={
								'py-[16px] text-white text-sm flex gap-3.5 justify-center items-center '
							}
						>
							<span className={'font-medium'}>
								{isLoading ? <LoadingDots /> : 'Get an instant'}
							</span>
							{!isLoading && <ArrowIcon color={'#FFFFFF'} />}
						</div>
					</div>
					<div
						className={
							'w-full h-full absolute z-0 bg-accent-dark px-[48px] top-[4px] left-[4px] rounded-sm'
						}
					></div>
				</button>
			</form>
			<SuccessSubmitPopUp isSuccessSubmit={isSubmitSuccessful} />
			{isFileModalNotShowed === true && (
				<FilesNotSelectedModal onChange={handleCloseFileReminderModal} />
			)}
		</div>
	);
}
