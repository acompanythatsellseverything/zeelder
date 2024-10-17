'use client';
import { Modal, ModalContent } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import SuccessIcon from '@/components/icons/SuccessIcon/SuccessIcon';

interface IProps {
	isSuccessSubmit: boolean;
}

export default function SuccessSubmitPopUp({ isSuccessSubmit }: IProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	
	useEffect(() => {
		setIsOpen(isSuccessSubmit);
	}, [isSuccessSubmit]);

	return (
		<Modal
			isOpen={isOpen}
			size='xl'
			onOpenChange={setIsOpen}
			className='rounded-sm w-full lg:min-w-[560px]'
		>
			<ModalContent>
				<div className='flex flex-col justify-center items-center py-5 md:py-10 px-6 md:px-12'>
					<SuccessIcon />
					<p className='w-full mt-4 text-center text-lg md:text-xl font-semibold'>
						Your submission has been received. We’ll review your information and
						get back to you shortly.
					</p>
				</div>
			</ModalContent>
		</Modal>
	);
}
