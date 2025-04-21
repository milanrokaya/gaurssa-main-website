'use client';

import { CategoryButton } from '@/components/shared/category-button/CategoryButton';
import { NEWS_CATEGORY } from '@/constants/news-and-information/news';
import { useState } from 'react';

export const NewsCategory = () => {
	const [activeButton, setActiveButton] = useState<number | null>(null);

	return (
		<div className="flex items-center gap-3 w-full  [scrollbar-width:none] overflow-x-scroll">
			{NEWS_CATEGORY.map((location) => (
				<CategoryButton
					label={location.label}
					isActive={location.id === activeButton}
					handleIsActive={() => setActiveButton(location.id)}
					key={location.id}
				/>
			))}
		</div>
	);
};
