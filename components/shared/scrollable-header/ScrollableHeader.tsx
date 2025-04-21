'use client';

import { useScreenSize } from '@/hooks/useScreenSize';
import { useScrollingEffect } from '@/hooks/useScrollingEffect';
import { cn } from '@/lib/utils';

export const ScrollableHeader = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const { isScrolled } = useScrollingEffect({
		scrollingValue: 5,
	});

	const isLargeScreen = useScreenSize(640, 'min');

	return (
		<div
			className={cn(
				`text-black font-normal font-dm-serif   transition-all duration-1000       ease-in-out bg-neutral-50 ${isLargeScreen && isScrolled ? ' text-[2rem]  mt-6 md:mt-10  ' : 'text-[2rem] sm:text-[4rem] lg:text-[7rem] md:text-[5rem] md:h-[20rem]   sm:h-[16rem] h-fit mt-10 md:mt-20 transition-all duration-1000'}`,
				className
			)}
		>
			{children}
		</div>
	);
};
