'use client';
import Container from '../Container/Container';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ArticleSubTitle from '../ArticleSubTitle/ArticleSubTitle';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import Image from 'next/image';
import slideImage from '@/images/slide-02-image.png';
import FaceplateForm from '../FaceplateForm/FaceplateForm';
import ArticleScroll from '../ArticleScroll/ArticleScroll';
import { useMemo, useState } from 'react';

const fabricationStats = [
	{ title: 'Dimensional accuracy', preciseInfo: '±0.13mm' },
	{ title: 'Max part size', preciseInfo: '3000x1500x25mm' },
	{ title: 'Min part size', preciseInfo: '15x15x0.4mm' },
	{ title: 'Min feature size', preciseInfo: 'ISO-9001, ITAR' },
	{ title: 'Min lead time', preciseInfo: 'Same day' },
];

type TProductionStats = {
	title: string;
	preciseInfo: string;
};

type TProductionTypes =
	| 'Laser cutting'
	| 'Laser engraving'
	| 'Metal bending'
	| 'Powder coating'
	| 'Welding'
	| '3D printing';

type TProductionTypesMap = {
	[prop in TProductionTypes]: TProductionStats[];
};

export default function SecondArticle() {
	const [type, setType] = useState<TProductionTypes>('Laser cutting');

	const productionTypesMap = useMemo(() => {
		const map: TProductionTypesMap = {
			'Laser cutting': [
				{ title: 'Dimensional accuracy', preciseInfo: '± 0.1-0.2 mm' },
				{ title: 'Table size', preciseInfo: '3000x1500' },
				{
					title: 'Carbon steel max cutting thickness',
					preciseInfo: '10 mm',
				},
				{
					title: 'Stainless steel max cutting thickness',
					preciseInfo: '6 mm',
				},
			],
			'Laser engraving': [
				{ title: 'Table size', preciseInfo: '3000x1500' },
				{ title: 'Marking depth', preciseInfo: '≤ 0.2 mm' },
				{ title: 'Repeatability accuracy', preciseInfo: '± 0.001 mm' },
				{ title: 'Minimum line thickness', preciseInfo: '0.01 mm' },
				{ title: 'Minimum character size', preciseInfo: ' 0.2 mm' },
			],
			'Metal bending': [
				{ title: 'Maximum product length', preciseInfo: '1300 mm' },
				{
					title: 'Maximum sheet thickness',
					preciseInfo: ' 4 mm (for carbon steel and stainless steel)',
				},
			],
			'Powder coating': [
				{ title: 'Maximum product size', preciseInfo: '?? mm' },
				{ title: 'Dimensional variation', preciseInfo: 'within ± 0.005 mm' },
				{ title: 'Coating thickness', preciseInfo: 'from 0.016 microns' },
				{ title: 'Color', preciseInfo: 'upon request' },
			],
			Welding: [
				{ title: 'Welding types', preciseInfo: 'TIG, MIG' },
				{
					title: 'Weldable materials',
					preciseInfo: 'carbon steel, stainless steel, aluminum',
				},
			],
			'3D printing': [
				{ title: 'Printing technology', preciseInfo: 'FDM' },
				{ title: 'Maximum part size', preciseInfo: '256x256x256 mm' },
				{ title: 'Minimum layer thickness', preciseInfo: '0.08 mm' },
				{
					title: 'Materials',
					preciseInfo:
						'PLA, PETG, TPU, ABS, ASA, PVA, PET, PA, PC, Carbon/Glass fiber.',
				},
			],
		};
		return map;
	}, []);

	return (
		<Container className={'pt-20 relative'} id='hardware-build'>
			<>
				{/* <div className='hidden xl:flex absolute h-full top-2 left-16 flex-col justify-center items-center'>
					<span className={'text-accent text-center text-xs'}>02</span>
					<div className={'w-0.5 h-40 bg-accent mt-2.5 rounded-t-md'}></div>
					<div className={'w-0.5 h-full bg-light rounded-b-md'}></div>
				</div> */}
				<ArticleScroll title='02' className='mt-20' coloredLineHeight='32' />
				<article className={'relative md:grid md:grid-cols-5'}>
					<div
						className={
							'md:row-start-1 md:col-start-1 md:col-span-6 md:row-span-2 lg:col-span-3'
						}
					>
						<ArticleTitle className='max-w-xl'>
							Effortless cloud production technology accelerating your hardware
							build.
						</ArticleTitle>
						<ArticleSubTitle>
							Enterprises, startups, maintenance, and repair shops rely on our
							innovative online prototyping & manufacturing service.
						</ArticleSubTitle>
						<div className={'mt-4 text-base font-bold'}>
							Sheet Metal Fabrication
						</div>
						<div className={'mt-3 text-xs'}>
							Fiber laser cutting & engraving, bending & tapping, using 250+
							metals.
						</div>
					</div>
					<span className={'mt-4 block w-full h-0.5 bg-light md:hidden'} />

					<ul
						className={
							'mt-3.5 flex flex-wrap gap-5 md:col-span-3 md:row-span-1'
						}
					>
						{productionTypesMap[type].map((e) => (
							<li key={e.title}>
								<span className={'text-sm md:text-base'}>{e.title}</span>
								<div
									className={
										'mt-2 w-full h-7.5 rounded-sm flex gap-3  overflow-hidden'
									}
								>
									<div className={'w-1.5 h-7.5 bg-accent'}></div>
									<div className={'border-1 grow border-light border-l-0'}>
										{e.preciseInfo}
									</div>
								</div>
							</li>
						))}
					</ul>

					<div
						className={
							'mt-4 max-w-80 md:grid md:grid-cols-2 md:row-start-4 md:row-span-1 md:col-span-3 lg:col-span-2'
						}
					>
						{Object.keys(productionTypesMap).map((e, index) => (
							<div
								key={index}
								onClick={() => setType(e as TProductionTypes)}
								className={'flex items-center gap-2.5 cursor-pointer'}
							>
								<div className={'text-[14px] font-semibold'}>{e}</div>
								<ArrowIcon />
							</div>
						))}
						{/* <div onClick={() => setType('Laser cutting')} className={'flex items-center gap-2.5'}>
							<div className={'text-[14px] font-semibold'}>
								Laser cutting
							</div>
							<ArrowIcon />
						</div>
						<div onClick={() => setType('Laser engraving')} className={'flex items-center gap-2.5'}>
							<div className={'text-[14px] font-semibold'}>
								Laser engraving
							</div>
							<ArrowIcon />
						</div>
						<div onClick={() => setType('Metal bending')} className={'flex items-center gap-2.5'}>
							<div className={'text-[14px] font-semibold'}>
								Metal bending
							</div>
							<ArrowIcon />
						</div>
						<div onClick={() => setType('Powder coating')} className={'flex items-center gap-2.5'}>
							<div className={'text-[14px] font-semibold'}>
								Powder coating
							</div>
							<ArrowIcon />
						</div>
						<div onClick={() => setType('Welding')} className={'flex items-center gap-2.5'}>
							<div className={'text-[14px] font-semibold'}>
								Welding
							</div>
							<ArrowIcon />
						</div>
						<div className={'flex items-center gap-2.5'}>
							<div className={'text-[14px] font-semibold'}>
								3D printing
							</div>
							<ArrowIcon />
						</div> */}
					</div>

					<div
						className={
							'mt-5 max-w-96 md:row-span-1 md:col-span-3 lg:row-start-4 lg:col-start-3'
						}
					>
						<Image src={slideImage} alt='' />
					</div>

					<div
						className={
							'mt-2.5 md:row-start-3 md:row-span-3 md:col-start-4 md:col-span-3 lg:row-start-1 lg:row-span-3'
						}
					>
						<FaceplateForm />
					</div>
				</article>
			</>
		</Container>
	);
}
