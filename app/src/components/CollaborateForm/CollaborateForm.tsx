import { Input, Textarea } from '@nextui-org/react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import {DatePicker} from "@nextui-org/date-picker";
import {now, getLocalTimeZone, parseAbsoluteToLocal} from "@internationalized/date";
import { useState } from 'react';

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

export default function CollaborateForm() {
	let [date, setDate] = useState<any>(now(getLocalTimeZone()));
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	const action: () => void = handleSubmit(async (data: IFormData) => {console.log(data)});

	return (
		<form onSubmit={action} className={'mt-10 flex flex-col gap-7'}>
		<Input
			type='string'
			label='Enter your part material'
			variant='underlined'
			className='text-white'
			required
			errorMessage={errors.material?.message}
			{...register('material')}
		/>
		<Input
			type='string'
			label='Enter your part quantity'
			variant='underlined'
			className='text-white'
			required
			errorMessage={errors.quantity?.message}
			{...register('quantity')}
		/>
		<Textarea
			type='string'
			label='Tell us about your part / needs'
			variant='underlined'
			className='text-white'
			required
			errorMessage={errors.about?.message}
			{...register('about')}
		/>
		<Input
			type='email'
			label='Email'
			variant='underlined'
			className='text-white'
			required
			errorMessage={errors.email?.message}
			{...register('email')}
		/>
		  <DatePicker
        label="Event Date"
        variant="underlined"
				classNames={{
					calendarContent: 'text-white'
				}}
        hideTimeZone
				isRequired={true}
				value={date}
        onChange={setDate}
      />
		<button type='submit' className={'w-full relative mt-5'}>
		<div className={'relative z-10 bg-accent px-12 rounded-sm'}>
			<div
				className={
					'py-[16px] text-white text-sm flex gap-3.5 justify-center items-center '
				}
			>
				<span className={'font-medium'}>Get custom quote</span>
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
	)
}
