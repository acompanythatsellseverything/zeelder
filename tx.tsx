import Image from 'next/image';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import SendOfferForm, { SendOfferFormValues } from './SendOfferForm';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import { useRouter } from '@/navigation';
import { fetchSendEmail } from '@/api/fetchSendEmail';

interface IProps {
	isOpen: boolean;
	onOpenChange: () => void;
	productsIds: string[];
	translations: {
		send_offer: string;
		sendmail_p1: string;
		sendmail_p2: string;
		home: string;
		sendmail_sp1: string;
		sendmail_sp2: string;
		cancel: string;
		send: string;
	};
}

export default function SendOfferModal({
	isOpen,
	onOpenChange,
	productsIds,
	translations,
}: IProps) {
	const router = useRouter();
	const [isOfferSend, setIsOfferSend] = useState<boolean>(false);

	const handleSubmitForm = async (value: SendOfferFormValues, action: any) => {
		const data = {
			...value,
			ids: productsIds,
		};

		fetchSendEmail(data)
			.then((res) => {
				setIsOfferSend(true);
			})
			.catch();
	};

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			backdrop='blur'
			className='flex justify-center items-center'
			closeButton={
				<div className='h-8 w-8 order-1 md:order-last'>
					<Image src='/icons/close.svg' alt='' width={32} height={32} />
				</div>
			}
		>
			<ModalContent className='bg-white border-2 border-white150 absolute top-1/4'>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1 text-2xl font-normal mt-5'>
							{translations.send_offer}
						</ModalHeader>
						<ModalBody className='pb-11'>
							{!isOfferSend ? (
								<>
									<p>{translations.sendmail_p1}</p>
									<p>{translations.sendmail_p2}</p>
									<SendOfferForm
									translations={{
										send: translations.send,
										cancel: translations.cancel
									}}
										handleSubmit={handleSubmitForm}
										onClose={onClose}
									/>
								</>
							) : (
								<>
									<p>{translations.sendmail_sp1}</p>
									<p>{translations.sendmail_sp2}</p>
									<Button
										onClick={() => {
											router.push('/');
										}}
										styles='text-white bg-black950 uppercase mt-4'
									>
										{translations.home}
									</Button>
								</>
							)}
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
