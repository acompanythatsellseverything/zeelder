'use client';
import addFileIcon from '@/images/utils/add-file.svg';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import TrashCanIcon from '../../TrashCanIcon/TrashCanIcon';

interface IProps {
	multiple: boolean;
	isSubmitted?: boolean;
	selectedFiles?: File[];
	setFiles: (files: File[]) => void;
	removeFilesHandler?: () => void;
	[x: string]: any;
}

export default function InputFile({
	multiple,
	isSubmitted,
	selectedFiles,
	removeFilesHandler,
	setFiles,
	...props
}: IProps) {
	const [fileList, setFileList] = useState<File[]>(selectedFiles || []);

	useEffect(() => {
		setFiles(fileList);
		if(removeFilesHandler && fileList.length === 0) {
			removeFilesHandler()
		}
	}, [fileList]);

	useEffect(() => {
		if (isSubmitted) {
			setFileList([]);
		}
	}, [isSubmitted]);

	const handleOnAdd = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) {
			return;
		}
		const files = Array.from(event.target.files);
		if (files) {
			setFileList((prev) => {
				if (!prev) {
					return [...files];
				}
				return [...prev, ...files];
			});
		}
		//@ts-ignore
		event.target.value = null;
	};

	const handleDelete = (index: number) => {
		setFileList((prev) => prev.filter((_, i) => i != index));
	};

	return (
		<div className='flex flex-col gap-2'>
			<div className='relative cursor-pointer'>
				<div className='flex gap-3 items-center'>
					<Image src={addFileIcon} alt={''} />
					<div>Add file</div>
				</div>
				<input
					{...props}
					onChange={handleOnAdd}
					type='file'
					multiple={multiple}
					className='absolute top-0 opacity-0 cursor-pointer w-full'
				/>
			</div>
			{fileList &&
				fileList.map((file, index) => (
					<div key={`${file.name}-${index}`} className='flex gap-2'>
						<div>{file.name}</div>
						<TrashCanIcon
							className='w-5 h-4 cursor-pointer'
							onClick={() => handleDelete(index)}
						/>
					</div>
				))}
		</div>
	);
}
