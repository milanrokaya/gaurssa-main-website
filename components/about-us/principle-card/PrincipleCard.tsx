import { Text } from '@/components/ui/text';
import { PrinciplePoweringUsType } from '@/constants/about-us/about-us';
import Image from 'next/image';

export const PrincipleCard = ({ data }: { data: PrinciplePoweringUsType }) => {
	return (
		<li className="flex flex-col gap-2">
			<div className="h-[12.8rem] w-full overflow-hidden">
				<Image
					src={data.image}
					alt={data.title}
					width={1000}
					height={1000}
					className="w-full h-full object-cover object-center"
				/>
			</div>

			<h3 className="text-h3 text-black">{data.title}</h3>

			<Text>{data.description}</Text>
		</li>
	);
};
