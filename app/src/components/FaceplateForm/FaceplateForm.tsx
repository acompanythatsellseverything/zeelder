'use client';
import { cn, Radio, RadioGroup } from '@nextui-org/react';
import { useEffect, useState } from 'react';




const costOfPlate = {
	"simple" : {
		"small": {
			"1": 12.88,
			"100": 0.85,
			"500": 0.57,
			"1000": 0.52,
			"10000": 0.36
		},
		"medium": {
			"1": 14.70,
			"100": 1.80,
			"500": 1.44,
			"1000": 1.24,
			"10000": 0.80
		},
		"large": {
			"1": 17.57,
			"100": 3.16,
			"500": 2.47,
			"1000": 2.29,
			"10000": 1.43
		},
	},
	"moderate": {
		"small": {
			"1": 13.55,
			"100": 1.01,
			"500": 0.81,
			"1000": 0.71,
			"10000": 0.46
		},
		"medium": {
			"1": 16.05,
			"100": 2.36,
			"500": 1.81,
			"1000": 1.61,
			"10000": 0.96
		},
		"large": {
			"1": 19.59,
			"100": 3.92,
			"500": 3.00,
			"1000": 2.79,
			"10000": 1.59
		},
	},
	"heavy": {
		"small": {
			"1": 20.22,
			"100": 3.45,
			"500": 2.47,
			"1000": 2.15,
			"10000": 1.07
		},
		"medium": {
			"1": 29.42,
			"100": 6.33,
			"500": 4.70,
			"1000": 4.02,
			"10000": 1.93
		},
		"large": {
			"1": 30.39,
			"100": 9.71,
			"500": 6.92,
			"1000": 5.88,
			"10000": 3.15
		},
	}
}

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
	const [selectedW, setSelectedW] = useState<'simple' | 'moderate' | 'heavy'>('simple');
	const [selectedS, setSelectedS] = useState<'small' | 'medium' | 'large'>('small');
	const [selectedC, setSelectedC] = useState<'1' | '100' | '500' | '1000' | '10000'>('1');
	const baseCost = 12.88;
	const [value, setValue] = useState(baseCost)
	useEffect(() => {
		// const wCost = baseCost / 100 * Number(selectedW);
		// const sCost = baseCost / 100 * Number(selectedS);
		// const onePlateCost = baseCost + wCost + sCost;
		// const result = onePlateCost - (onePlateCost / 100 * Number(selectedC))
		// setValue(Math.ceil(result * 100) / 100);
		setValue(costOfPlate[selectedW][selectedS][selectedC])
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
						//@ts-ignore
						onValueChange={setSelectedW}
					>
						<CustomRadio value='simple'>Simple</CustomRadio>
						<CustomRadio value='moderate'>Moderate</CustomRadio>
						<CustomRadio value='heavy'>Heavy</CustomRadio>
					</RadioGroup>

					<RadioGroup
						className={'mt-2'}
						label={'Part Size'}
						classNames={{
							wrapper: cn('flex flex-row gap-0 '),
						}}
						value={selectedS}
						//@ts-ignore
						onValueChange={setSelectedS}
					>
						<CustomRadio value='small'>Small</CustomRadio>
						<CustomRadio value='medium'>Medium</CustomRadio>
						<CustomRadio value='large'>Large</CustomRadio>
					</RadioGroup>

					<RadioGroup
						className={'mt-2'}
						label={'Quantity'}
						classNames={{
							wrapper: cn('flex flex-row gap-0 '),
						}}
						value={selectedC}
						//@ts-ignore
						onValueChange={setSelectedC}
					>
						<CustomRadio value='1'>1</CustomRadio>
						<CustomRadio value='100'>100</CustomRadio>
						<CustomRadio value='500'>500</CustomRadio>
						<CustomRadio value='1000'>1000</CustomRadio>
						<CustomRadio value='10000'>10 000</CustomRadio>
					</RadioGroup>
				</div>
			</div>
			<div
				className={
					'px-6 py-4 w-full flex justify-between border-l-1 border-r-1 border-light border-b-4 border-b-accent rounded-b-sm'
				}
			>
				<span>Estimated Cost Per Part:</span>

				<span className={'text-accent'}>€{value.toFixed(2)}</span>
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
