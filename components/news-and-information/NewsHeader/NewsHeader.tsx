'use client';

import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';
import { NewsCategory } from '../NewsCategory/NewsCategory';
import { NewsSearch } from '../NewsSearch/NewsSearch';

export const NewsHeader = () => {
	return (
		<>
			<ScrollableHeader className="">
				<h1 className="lg:leading-28 leading-20">News and Information</h1>
				<div className="flex md:flex-row flex-col gap-4  justify-between md:items-center ">
					<NewsCategory />
					<NewsSearch />
				</div>
			</ScrollableHeader>
		</>
	);
};
