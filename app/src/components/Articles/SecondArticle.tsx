'use client';
import ArticleScroll from '@/components/ArticleScroll/ArticleScroll';
import ArticleSubTitle from '@/components/ArticleSubTitle/ArticleSubTitle';
import ArticleTitle from '@/components/ArticleTitle/ArticleTitle';
import Container from '@/components/Container/Container';
import FaceplateForm from '@/components/FaceplateForm/FaceplateForm';
import ArrowIcon from '@/components/icons/ArrowIcon/ArrowIcon';
import slideImage from '@/images/slide-02-image.png';
import Image from 'next/image';
import { useMemo, useState } from 'react';

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
	[prop in TProductionTypes]: {
		textData: TProductionStats[];
		imageUrl?: string;
	};
};

export default function SecondArticle() {
	const [type, setType] = useState<TProductionTypes>('Laser cutting');

	const productionTypesMap = useMemo(() => {
		const map: TProductionTypesMap = {
			'Laser cutting': {
				textData: 	[
				{ title: 'Dimensional accuracy', preciseInfo: '± 0.1 mm' },
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
			imageUrl: '/productionTypes/2.png'
		},
			'Laser engraving': {
				textData: [
					{ title: 'Table size', preciseInfo: '3000x1500' },
					{ title: 'Marking depth', preciseInfo: '≤ 0.2 mm' },
					{ title: 'Repeatability accuracy', preciseInfo: '± 0.001 mm' },
					{ title: 'Minimum line thickness', preciseInfo: '0.01 mm' },
					{ title: 'Minimum character size', preciseInfo: ' 0.2 mm' },
				],
			},
			'Metal bending': {
				textData: [
					{ title: 'Maximum product length', preciseInfo: '1300 mm' },
					{
						title: 'Maximum sheet thickness',
						preciseInfo: ' 4 mm (for carbon steel and stainless steel)',
					},
				],
				imageUrl: '/productionTypes/3.png'
			},
			'Powder coating': {
				textData: [
					{ title: 'Maximum product size', preciseInfo: '?? mm' },
					{ title: 'Dimensional variation', preciseInfo: 'within ± 0.005 mm' },
					{ title: 'Coating thickness', preciseInfo: 'from 0.016 microns' },
					{ title: 'Color', preciseInfo: 'upon request' },
				],
				imageUrl: '/productionTypes/1.png'
			},
			Welding: {
				textData: [
					{ title: 'Welding types', preciseInfo: 'TIG, MIG' },
					{
						title: 'Weldable materials',
						preciseInfo: 'carbon steel, stainless steel, aluminum',
					},
				],
				imageUrl: '/productionTypes/5.png'
			},
			'3D printing': {
				textData: [
					{ title: 'Printing technology', preciseInfo: 'FDM' },
					{ title: 'Maximum part size', preciseInfo: '256x256x256 mm' },
					{ title: 'Minimum layer thickness', preciseInfo: '0.08 mm' },
					{
						title: 'Materials',
						preciseInfo:
							'PLA, PETG, TPU, ABS, ASA, PVA, PET, PA, PC, Carbon/Glass fiber.',
					},
				],
				imageUrl: '/productionTypes/4.png'
			}
		};
		return map;
	}, []);

	return (
		<Container className={'pt-20 mb-20 relative'} id='hardware-build'>
			<ArticleScroll title='02' className='mt-20' coloredLineHeight='8.5rem' />
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
					<div className={'mt-4 text-base font-bold'}>Metal Fabrication</div>
					<div className={'mt-3 text-xs'}>
						Fiber laser cutting & engraving, bending & tapping, using 250+
						metals.
					</div>
				</div>
				<span className={'mt-4 block w-full h-0.5 bg-light md:hidden'} />

				<ul
					className={'mt-3.5 flex flex-wrap gap-5 md:col-span-3 md:row-span-1'}
				>
					{productionTypesMap[type].textData.map((e) => (
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
						'mt-4 max-w-80 grid gap-2 grid-cols-1 md:grid-cols-2 md:row-start-4 md:row-span-1 md:col-span-3 lg:col-span-2'
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
					<div className={'flex items-center gap-2.5'}>
						<div className={'text-[14px] font-semibold'}>CNC lathe</div>
						<ArrowIcon />
					</div>

					<div className={'flex items-center gap-2.5'}>
						<div className={'text-[14px] font-semibold'}>CNC milling</div>
						<ArrowIcon />
					</div>
				</div>
				<div
					className={
						'flex items-center justify-center mt-5 max-w-96 md:row-span-1 md:col-span-3 lg:row-start-4 lg:col-start-3 w-full md:w-[300px] h-[300px] '
					}
				>
					<Image src={productionTypesMap[type].imageUrl|| slideImage} alt='' width={300} height={300} className='object-contain'/>
				</div>
				<div
					className={
						'mt-2.5 md:row-start-3 md:row-span-3 md:col-start-4 md:col-span-3 lg:row-start-1 lg:row-span-3'
					}
				>
					<FaceplateForm />
				</div>
			</article>
		</Container>
	);
}
