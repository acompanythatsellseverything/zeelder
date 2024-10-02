'use client';
import { useState } from 'react';
import { RadioGroup, Radio, cn } from '@nextui-org/react';
import ContactUsForm from '@/components/ContactUsForm/ContactUsForm';
import QuickFileDrop from '@/components/QuickFileDrop/QuickFileDrop';

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

export default function UploadCADForm() {
	const [selected, setSelected] = useState('1');
	
	return (
		<div className={'text-base py'}>
			<RadioGroup
				value={selected}
				onValueChange={setSelected}
				color='primary'
				classNames={{
					wrapper: cn('grid grid-cols-1 md:grid-cols-2 '),
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
				<QuickFileDrop />
			) : (
				<div className='px-4 bg-white border-l-2 border-r-2 border-light'>
					<ContactUsForm fileInputIsDisabled={true} />
				</div>
			)}
		</div>
	);
}
