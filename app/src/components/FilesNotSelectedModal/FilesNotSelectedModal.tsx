import { Modal, ModalContent } from '@nextui-org/react';
import SuccessIcon from '@/components/icons/SuccessIcon/SuccessIcon';
import { useState } from 'react';

interface IProps {
	onChange: () => void;
}

export default function FilesNotSelectedModal({ onChange }: IProps) {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const handleChange = (value: boolean) => {
		onChange();
		setIsOpen(value);
	};
	return (
		<Modal
			isOpen={isOpen}
			size='xl'
			onOpenChange={handleChange}
			className='rounded-sm w-full lg:min-w-[560px]'
		>
			<ModalContent>
				<div className='flex flex-col justify-center items-center py-5 md:py-10 px-6 md:px-12'>
					<p className='w-full mt-4 text-center text-lg md:text-xl font-semibold'>
						Are you sure you want to send the form without uploaded files ?
					</p>
				</div>
			</ModalContent>
		</Modal>
	);
}
