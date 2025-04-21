import { PRINCIPLE_EMPOWERING_US } from '@/constants/about-us/about-us';
import { PrincipleCard } from '../principle-card/PrincipleCard';

export const PrincipleSection = () => {
	return (
		<>
			<h2 className="text-h2 text-gray-950 font-dm-serif mb-10">
				The Principles That Empower Us
			</h2>
			{/* grid-cols-[repeat(auto-fit,minmax(23.7rem,1fr))] */}
			<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:gap-16 gap-4">
				{PRINCIPLE_EMPOWERING_US.map((principle) => (
					<PrincipleCard data={principle} key={principle.id} />
				))}
			</ul>
		</>
	);
};
