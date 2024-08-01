'use client';
import Image from 'next/image';
import addFileIcon from '@/images/utils/add-file.svg';
import { useState } from 'react';

interface IProps {
	multiple: boolean;
	[x: string]: any;
}

export default function InputFile({multiple, ...props}: IProps) {
	const [selectedFile, setSelectedFile] = useState('');

	return (
		<div className='relative'>
			<div className='flex gap-3 cursor-pointer'>
				<Image src={addFileIcon} alt={''} />
				<div>{selectedFile || 'Add file'}</div>
			</div>
			<input
				{...props}
				onChange={(e) => setSelectedFile(e.target.value.split('\\')[2])}
				type='file'
				accept='image/*,.pdf'
				multiple={multiple}
				className='absolute top-0 opacity-0 cursor-pointer w-full'
			/>
		</div>
	);
}
