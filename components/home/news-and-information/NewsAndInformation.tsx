import { NewsAndInformationCard } from './NewsAndInformationCard';

export const NewsAndInformation = () => {
	return (
		<>
			<h2 className="text-[32px] md:text-[44px] font-dm-serif px-4 md:px-20">
				News & Information
			</h2>

			<div className="overflow-x-auto [scrollbar-width:none] w-full">
				<div className="flex  sm:flex-row flex-col  py-10  max-w-[110rem] mx-auto gap-6 sm:gap-4  justify-start px-4  ">
					<NewsAndInformationCard />
					<NewsAndInformationCard />
					<NewsAndInformationCard />
				</div>
			</div>
		</>
	);
};
