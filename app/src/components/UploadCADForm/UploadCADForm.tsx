'use client';
import { RadioGroup, Radio, cn } from '@nextui-org/react';
import Image from 'next/image';
import uploadImage from '@/images/utils/upload-cloud.png';
import { ChangeEvent, useState } from 'react';
import CollaborateForm from '../CollaborateForm/CollaborateForm';
import { uploadPoster } from '@/actions/uploadFile';
import ContactUsForm from '../ContactUsForm/ContactUsForm';

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
	const handleChange =async (e: ChangeEvent<HTMLInputElement>) => {
		if(!e.target.files) {
			return
		}
		let formData = new FormData();
		const timestamp = Date.now();
		formData.append('image', e.target.files[0], `${timestamp}.webp`);
		return await uploadPoster(formData);
	};
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
						onChange={(e) => handleChange(e)}
						type='file'
						className='block w-full h-full absolute top-0 opacity-0 cursor-pointer'
					/>
				</div>
			) : (
				<ContactUsForm fileInputIsDisabled={true} />
			)}
		</div>
	);
}
