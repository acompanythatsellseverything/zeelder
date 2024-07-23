'use client';
import './style.css';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useCallback, useEffect, useState } from 'react';
import image_1 from '@/images/slider/image_1.png';
import image_2 from '@/images/slider/image_2.png';
import image_3 from '@/images/slider/image_3.png';
import image_4 from '@/images/slider/image_4.png';
import image_5 from '@/images/slider/image_5.png';

const slides = [image_1, image_2, image_3, image_4, image_5, image_1, image_2, image_3, image_4, image_5];

export default function AutoPlaySlider() {
	const options = { loop: true };
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		AutoScroll({ playOnInit: true, speed: 1}),
	]);

	const [isPlaying, setIsPlaying] = useState(false);

	const onButtonAutoplayClick = useCallback(
		(callback: () => void) => {
			const autoScroll = emblaApi?.plugins()?.autoScroll;
			if (!autoScroll) return;

			const resetOrStop =
				autoScroll.options.stopOnInteraction === false
					? autoScroll.reset
					: autoScroll.stop;

			resetOrStop();
			callback();
		},
		[emblaApi]
	);

	useEffect(() => {
		const autoScroll = emblaApi?.plugins()?.autoScroll;
		if (!autoScroll) return;

		emblaApi
			.on('autoScroll:play', () => setIsPlaying(true))
			.on('autoScroll:stop', () => setIsPlaying(false))
			.on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
	}, [emblaApi]);

	return (
		<div className='mt-16'>
			<div className='embla'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{slides.map((value, index) => (
							<div className='embla__slide' key={index}>
									<Image src={value} alt='img' />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
