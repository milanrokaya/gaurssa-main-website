'use client';

import { Search } from '@/components/shared/search/Search';
import { Select } from '@radix-ui/react-select';
import { useState } from 'react';
import {
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../ui/select';

export const NewsSearch = () => {
	const [selectedCategory, setSelectedCategory] = useState('');
	return (
		<div className="h-10 w-full md:w-1/2  flex items-center justify-end    ">
			<Select
				value={selectedCategory}
				onValueChange={(value) => setSelectedCategory(value)}
			>
				<SelectTrigger className="h-full w-1/2 rounded-l-full font-outfit bg-gray-50 border-none border-r border-r-gray-200 focus-visible:ring-1 focus-visible:ring-primary-200 text-gray-400 font-light">
					<SelectValue placeholder="Select Category" className="" />
				</SelectTrigger>

				<SelectContent className="bg-gray-50 border focus-visible:border-primary-200 relative z-[110]">
					<SelectGroup>
						{['News', 'Article', 'Story', 'Press Release'].map((category) => (
							<SelectItem
								value={category}
								key={category}
								className="text-gray-600 font-light"
							>
								{category}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<Search placeholder="Search Blogs..." />
		</div>
	);
};
