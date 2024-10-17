'use client';
import addFileIcon from '@/images/utils/add-file.svg';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import TrashCanIcon from '../../icons/TrashCanIcon/TrashCanIcon';

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
	const [unsuitableFiles, setUnsuitableFiles] = useState<File[]>([]);

	useEffect(() => {
		setFiles(fileList);
		if (removeFilesHandler && fileList.length === 0) {
			removeFilesHandler();
		}
	}, [fileList]);

	useEffect(() => {
		if (isSubmitted) {
			setTimeout(() => {
				setFileList([]);
			}, 1000);
		}
	}, [isSubmitted]);

	const handleOnAdd = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		setUnsuitableFiles([]);

		const files = Array.from(event.target.files);
		const maximumSize = 30 * 1024 * 1024;
		setFileList((prev) => {
			const provedFiles = files.filter((file) => {
				if (file.size <= maximumSize) {
					return true;
				} else {
					setUnsuitableFiles((prev) => [...prev, file]);
					return false;
				}
			});

			if (!prev) {
				return [...provedFiles];
			}
			return [...prev, ...provedFiles];
		});
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
					<div className='h-full flex items-center gap-1'>
						<div className='min-w-16'>Add file</div>
						{unsuitableFiles.length ? (
							<div className='text-xs md:text-sm text-red-500'>
								{unsuitableFiles.map((e) => e.name).join(', ')} exceed the size
								limit
							</div>
						) : (
							<div className='text-xs md:text-sm text-gray-500'>
								(Max file size 30Mb)
							</div>
						)}
					</div>
				</div>
				<input
					{...props}
					onChange={handleOnAdd}
					accept='.3dm,.3dxml,.3mf,.ai,.dxf,.eps,.iges,.igs,.ipt,.obj,.pdf,.prt,.sat,.sldprt,.step,.stl,.stp,.svg,.x_t'
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
