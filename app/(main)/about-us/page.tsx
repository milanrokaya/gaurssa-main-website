import { NextHorizon } from '@/components/about-us/next-horizon/NextHorizon';
import { PrincipleSection } from '@/components/about-us/principle-section/PrincipleSection';
import { PurposeSection } from '@/components/about-us/purpose-section/PurposeSection';
import { HighlightedText } from '@/components/shared/highlighted-text/HighlightedText';
import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';
import { Text } from '@/components/ui/text';
import { GlASS_DATA } from '@/constants/about-us/about-us';
import Image from 'next/image';

const page = () => {
	return (
		<article>
			<section className="md:sticky top-0  lg:px-20 px-4 z-100 bg-neutral-50 py-4">
				<ScrollableHeader className="">
					<h1>Why Does GCG Exist?</h1>
				</ScrollableHeader>
			</section>

			<section className="w-full">
				<div className="px-4 lg:px-20 max-w-[110rem] mx-auto ">
					<Text className="max-w-[41.8rem] mr-auto lg:mb-20 md:mb-16 mb-10">
						We&apos;re building a sustainable and{' '}
						<HighlightedText>connecting tomorrow</HighlightedText>, driving
						towards transformative innovation, focused on{' '}
						<HighlightedText>energy efficiency</HighlightedText> and
						environmental responsibility. We push technological boundaries to
						advance global mobility,{' '}
						<HighlightedText>minimize our carbon footprint</HighlightedText>,
						and foster energy independence,{' '}
						<HighlightedText>
							ensuring sustainable growth for all
						</HighlightedText>
						.
					</Text>
				</div>
			</section>

			<section className="flex ">
				<Image
					src="/industries/gcg-eyewear/gcg-eyewear-6.png"
					alt="About us"
					width={1000}
					height={1000}
					className="h-full w-1/3 object-cover object-center"
				/>
				<Image
					src="/industries/gcg-eyewear/gcg-eyewear-6.png"
					alt="About us"
					width={1000}
					height={1000}
					className="h-full w-1/3 object-cover object-center"
				/>
				<Image
					src="/industries/gcg-eyewear/gcg-eyewear-6.png"
					alt="About us"
					width={1000}
					height={1000}
					className="h-full w-1/3 object-cover object-center"
				/>
			</section>

			<section className="w-full relative flex justify-center">
				<PurposeSection />
			</section>

			<section className="max-w-[110rem] mx-auto lg:px-20 px-4 py-24">
				<PrincipleSection />
			</section>

			<section className="bg-[#070705]  relative">
				<NextHorizon />
			</section>

			<section className="w-full py-20">
				<ul className="max-w-[110rem] mx-auto lg:px-20 px-4 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
					{GlASS_DATA.map((glass) => (
						<li className="flex flex-col gap-2" key={glass.id}>
							<div className="block  md:h-[24rem]  lg:h-[30rem]" key={glass.id}>
								<Image
									src="/about-us/haribansha-acharya.png"
									alt="Man with glass"
									width={1000}
									height={1000}
									className="w-full object-center object-cover h-full"
								/>
							</div>

							<div>
								<p className="text-gray-800 md:text-text text-sm line-clamp-1">
									{glass.title}
								</p>
								<p className="md:text-text text-[12px] text-gray-400 !font-light">
									{glass.label}
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};

export default page;
