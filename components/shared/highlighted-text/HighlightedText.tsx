import { cn } from '@/lib/utils';
import React from 'react';

export const HighlightedText = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span className={cn('text-primary-600 font-semibold', className)}>
			{children}
		</span>
	);
};
