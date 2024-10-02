'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { uploadPoster } from '@/actions/uploadFile';
import uploadImage from '@/images/utils/upload-cloud.png';
import ContactUsForm from '@/components/ContactUsForm/ContactUsForm';
import { Spinner } from '@nextui-org/react';
import React from 'react';

export default function QuickFileDrop() {
	const [fileLinks, setFileLinks] = useState<string[]>([]);
	const [fileNames, setFileNames] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState<boolean>();

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) 
			return;

		setIsLoading(true);
		const files = Array.from(e.target.files);
		for (const file of files) {
			let formData = new FormData();
			const timestamp = Date.now();
			formData.append('file', file, `${timestamp}-${file.name}`);
			const link = await uploadPoster(formData);
			setFileLinks((prev) => [...prev, link]);
			setFileNames((prev) => [...prev, file.name])
		}
		setIsLoading(false);
	};

	if (isLoading === undefined || isLoading === true) {
		return (
			<div className='w-full mt-2.5 py-3 bg-light rounded-sm relative cursor-pointer'>
				<div className='flex flex-col justify-center items-center text-center'>
					{isLoading ? <Spinner /> : <Image src={uploadImage} alt='' />}
					{isLoading ? (
						<span className='text-lg mt-1 font-semibold'>Uploading  files</span>
					) : (
						<>
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
		);
	}

	return (
		<div className='px-4 bg-white border-l-2 border-r-2 border-light'>
			<ContactUsForm preUploadLinks={fileLinks} fileNames={fileNames}/>
		</div>
	);
}
