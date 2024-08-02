import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { useState } from 'react';
import { Modal, ModalContent } from '@nextui-org/react';
import CollaborateForm from '../CollaborateForm/CollaborateForm';
import ContactUsForm from '../ContactUsForm/ContactUsForm';
interface IProps {
	to?: string;
	text: string;
}
export default function ArrowButton({ to, text }: IProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<div
				onClick={() => setIsOpen(true)}
				className={'overflow-visible relative cursor-pointer'}
			>
				<div
					className={
						'w-full flex justify-center relative z-10 bg-accent px-12 rounded-sm'
					}
				>
					<div
						className={
							'py-[16px] text-white text-sm flex gap-3.5 items-center '
						}
					>
						<span className={'font-medium'}>{text}</span>
						<ArrowIcon color={'#FFFFFF'} />
					</div>
				</div>
				<div
					className={
						'w-full h-full absolute z-0 bg-accent-dark px-[48px] top-[4px] left-[4px] rounded-sm'
					}
				/>
			</div>
			<Modal
				isOpen={isOpen}
				size='xl'
				onOpenChange={setIsOpen}
				className='rounded-sm lg:min-w-[560px]'
			>
				<ModalContent>
					<div className='py-10 px-12'>
						<p className='w-full text-center text-2xl font-semibold'>Collaborate with an engineer</p>
						<p className='mt-4 w-full text-center'>
							Get in touch with our engineering team and discuss your order{' '}
						</p>
						<ContactUsForm />
					</div>
				</ModalContent>
			</Modal>
		</>
	);
}
