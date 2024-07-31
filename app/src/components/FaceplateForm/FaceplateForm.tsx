'use client';
import { cn, Radio, RadioGroup } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const CustomRadio = (props: any) => {
	const { children, ...otherProps } = props;
	return (
		<Radio
			{...otherProps}
			classNames={{
				base: cn(
					'max-w-none grow group border-1 border-light m-0 px-3 py-[10px] cursor-pointer data-[selected=true]:border-accent data-[selected=true]:bg-accent'
				),
				wrapper: cn('hidden'),
				labelWrapper: cn('m-0 p-0 w-full text-center'),
				description: cn('hidden'),
				label: cn(`text-xs group-data-[selected=true]:text-white`),
			}}
		>
			{children}
		</Radio>
	);
};

export default function FaceplateForm() {
	const [selectedW, setSelectedW] = useState('0');
	const [selectedS, setSelectedS] = useState('0');
	const [selectedC, setSelectedC] = useState('1');
	const baseCost = 12.88;
	const [value, setValue] = useState(baseCost)
	useEffect(() => {
		const wCost = baseCost / 100 * Number(selectedW);
		const sCost = baseCost / 100 * Number(selectedS);
		const onePlateCost = baseCost + wCost + sCost;
		const result = onePlateCost - (onePlateCost / 100 * Number(selectedC))
		setValue(Math.ceil(result * 100) / 100);
	}, [selectedW, selectedC, selectedS])

	return (
		<div className={''}>
			<div className={'border-1 border-light'}>
				<div className={'px-6 py-4'}>
					<h2 className={'text-xl font-semibold'}>Aluminum Faceplate</h2>
					<RadioGroup
						className={'mt-2'}
						label={'Complexity'}
						classNames={{
							wrapper: cn('flex flex-row gap-0 w-full '),
						}}
						value={selectedW}
						onValueChange={setSelectedW}
					>
						<CustomRadio value='0'>Simple</CustomRadio>
						<CustomRadio value='5.2'>Moderate</CustomRadio>
						<CustomRadio value='57'>Heavy</CustomRadio>
					</RadioGroup>

					<RadioGroup
						className={'mt-2'}
						label={'Part Size'}
						classNames={{
							wrapper: cn('flex flex-row gap-0 '),
						}}
						value={selectedS}
						onValueChange={setSelectedS}
					>
						<CustomRadio value='0'>Small</CustomRadio>
						<CustomRadio value='14.1'>Medium</CustomRadio>
						<CustomRadio value='36.4'>Large</CustomRadio>
					</RadioGroup>

					<RadioGroup
						className={'mt-2'}
						label={'Quantity'}
						classNames={{
							wrapper: cn('flex flex-row gap-0 '),
						}}
						value={selectedC}
						onValueChange={setSelectedC}
					>
						<CustomRadio value='1'>1</CustomRadio>
						<CustomRadio value='70'>100</CustomRadio>
						<CustomRadio value='75'>500</CustomRadio>
						<CustomRadio value='80'>1000</CustomRadio>
						<CustomRadio value='85'>10 000</CustomRadio>
					</RadioGroup>
				</div>
			</div>
			<div
				className={
					'px-6 py-4 w-full flex justify-between border-l-1 border-r-1 border-light border-b-4 border-b-accent rounded-b-sm'
				}
			>
				<span>Estimated Cost Per Part:</span>

				<span className={'text-accent'}>€{value}</span>
			</div>
			{/* <button type='submit' className={'w-full relative mt-10'}>
					<div className={'relative z-10 bg-accent px-12 rounded-sm'}>
						<div
							className={
								'py-[16px] text-white text-sm flex gap-3.5 justify-center items-center '
							}
						>
							<span className={'font-medium'}>Get an instant quote</span>
							<ArrowIcon color={'#FFFFFF'} />
						</div>
					</div>
					<div
						className={
							'w-full h-full absolute z-0 bg-accent-dark px-[48px] top-[4px] left-[4px] rounded-sm'
						}
					/>
				</button> */}
		</div>
	);
}
