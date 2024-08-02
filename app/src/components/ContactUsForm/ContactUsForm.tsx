import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { isMobilePhone } from 'validator';
import { Checkbox, CheckboxGroup, Input } from '@nextui-org/react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { GTM_ID } from '@/constants/analytics';
import InputFile from '../InputFile/InputFile';
import { uploadPoster } from '../../actions/uploadFile';

const communicationCheckBox = [
	'Phone call',
	'WhatsApp',
	'Viber',
	'Telegram',
	'Email',
];

interface IFormData {
	name: string;
	email: string;
	phoneNumber: string;
	orderDetails: string;
	preferredCommunication?: string[];
	fileList?: File[];
}

const schema: ZodType<IFormData> = z.object({
	name: z.string(),
	email: z.string().email('Incorrect email'),
	phoneNumber: z.string().refine(isMobilePhone, 'Invalid phone number'),
	orderDetails: z.string(),
	preferredCommunication: z.any(),
	fileList: z.any(),
});

interface IProps {
	fileInputIsDisabled?: boolean;
}

export default function ContactUsForm({ fileInputIsDisabled }: IProps) {
	const {
		register,
		getValues,
		handleSubmit,
		reset,
		setError,
		control,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	const action: () => void = handleSubmit(async (data: IFormData) => {
		const { fileList, ...rest } = data;
		const linkLists: string[] = [];
		if (fileList) {
			for (const file of fileList) {
				const formData = new FormData();
				const timestamp = Date.now();
				formData.append('file', file, `${timestamp}-${file.name}`);
				const link = await uploadPoster(formData);
				linkLists.push(link);
			}
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
		<div className={'p-10 bg-white rounded-sm'}>
			<form onSubmit={action} className={'flex flex-col gap-7'}>
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
					label='Phone number'
					className='text-white'
					required
					isInvalid={Boolean(errors.phoneNumber?.message)}
					errorMessage={errors.phoneNumber?.message}
					{...register('phoneNumber')}
				/>
				<Input
					type='string'
					variant={'underlined'}
					label='Order details'
					className='text-white'
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
									key={e}
									value={e}
									classNames={{
										icon: 'text-white',
									}}
								>
									{e}
								</Checkbox>
							))}
						</CheckboxGroup>
					)}
				/>
				{!fileInputIsDisabled && (
					<InputFile register={register('fileList')} multiple={true} />
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
	);
}
