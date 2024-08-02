'use client';
import Image from 'next/image';
import addFileIcon from '@/images/utils/add-file.svg';
import { useState } from 'react';

interface IProps {
	multiple: boolean;
	register?: any;
	[x: string]: any;
}

export default function InputFile({ multiple, register, ...props }: IProps) {
	const [selectedFile, setSelectedFile] = useState('');

	return (
		<div className='relative'>
			<div className='flex gap-3 cursor-pointer'>
				<Image src={addFileIcon} alt={''} />
				<div>{selectedFile || 'Add file'}</div>
			</div>
			<input
				{...register}
				{...props}
				onChange={(e) =>
					setSelectedFile(
						Array.from(e.target.files || [])
							.map((e) => e.name)
							.join(', ')
					)
				}
				type='file'
				accept='image/*,.pdf'
				multiple={multiple}
				className='absolute top-0 opacity-0 cursor-pointer w-full'
			/>
		</div>
	);
}
