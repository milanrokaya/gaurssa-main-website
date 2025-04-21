'use client';

import { Text } from '@/components/ui/text';
import { useScreenSize } from '@/hooks/useScreenSize';
import Image from 'next/image';

export const NextHorizon = () => {
	const largeScreen = useScreenSize(1024, 'min');
	return (
		<div className="py-4 px-4 h-screen flex flex-col justify-between md:py-20">
			<h3 className="text-h2 font-dm-serif text-neutral-50 mb-8">
				Next Horizon
			</h3>

			<ul className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:w-1/2 lg:flex-row lg:flex  overflow-x-auto [scrollbar-width:none] lg:pr-20 md:pr-10  py-8">
				<NextHorizoncard />
				<NextHorizoncard />
				<NextHorizoncard />
				<NextHorizoncard />
			</ul>

			{largeScreen && (
				// <div className=" h-full ">
				<Image
					src="/about-us/horizon-1.png"
					alt="About us"
					width={1000}
					height={1000}
					className="object-contain w-fit  absolute right-0 top-0  h-full"
				/>
				// </div>
			)}
		</div>
	);
};

const NextHorizoncard = () => {
	return (
		<li className=" p-2 h-[9.3rem] lg:h-[24rem] flex flex-col justify-between border border-primary-950  lg:w-[16rem] lg:min-w-[16rem] w-full min-w-full max-w-full">
			<h4 className="text-h3 text-primary-200">Excellence</h4>
			<Text className="text-gray-50">
				We pursue the highest standards in every endeavor, constantly striving
				to exceed expectations.
			</Text>
		</li>
	);
};
