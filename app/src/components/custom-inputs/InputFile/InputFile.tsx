'use client';
import addFileIcon from '@/images/utils/add-file.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TrashCanIcon from '../../TrashCanIcon/TrashCanIcon';

interface IProps {
	multiple: boolean;
	register?: any;
	isSubmitted?: boolean;
	selectedFiles?: string;
	[x: string]: any;
}

export default function InputFile({
	multiple,
	register,
	isSubmitted,
	selectedFiles,
	...props
}: IProps) {
	const [selectedFile, setSelectedFile] = useState(selectedFiles);
	const handleDelete = () => setSelectedFile('');
	useEffect(() => {
		if (isSubmitted) {
			setSelectedFile('');
		}
	}, [isSubmitted]);

	return (
		<div className='flex justify-between'>
			<div className='relative cursor-pointer'>
				<div className='flex gap-3 items-center'>
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
			{selectedFile && (
				<TrashCanIcon
					className='w-5 h-4 cursor-pointer'
					onClick={handleDelete}
				/>
			)}
		</div>
	);
}
