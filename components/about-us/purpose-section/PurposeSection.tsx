import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const PurposeSection = () => {
	return (
		<>
			<div className=" w-full h-[50vh] md:h-full mt-40 md:mt-0 ">
				<div
					className={cn(
						' w-full h-full bg-[linear-gradient(to_top,_transparent_0%_,transparent_20%_,white_70%)] absolute z-[10] top-0 flex flex-col self-end'
					)}
				></div>

				<Image
					src="/about-us/purpose-img-1.png"
					alt="About us"
					// layout="fill"
					// fill
					width={1200}
					height={1200}
					className="w-full h-full object-center object-cover "
				/>
			</div>
			<PurposePicture />
		</>
	);
};

const PurposePicture = () => {
	return (
		<div className="max-w-[35.8rem] mx-auto px-4 flex flex-col gap-4 absolute top-0 z-10 lg:pt-40 pt-12 ">
			<h2 className="text-h2  font-dm-serif text-primary-600 text-center">
				Let&apos;s talk purpose
			</h2>
			<Text className="text-center lg:text-reading text-base">
				We&apos;re building a future where technology and sustainability move in
				sync — powering industries with advanced mobility and helping reduce
				environmental impact, one breakthrough at a time.
			</Text>
		</div>
	);
};
