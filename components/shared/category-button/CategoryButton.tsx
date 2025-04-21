'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CategoryButtonProps extends React.ComponentProps<'button'> {
	isActive?: boolean;
	handleIsActive?: () => void;
	className?: string;
	label: string;
}

export const CategoryButton = ({
	isActive,
	handleIsActive,
	className,
	label,
	...props
}: CategoryButtonProps) => {
	// const [activeButton, setActiveButton] = useState<number | null>(null);
	return (
		<Button
			className={cn(
				`bg-gray-100 text-gray-800 font-light h-fit px-3 py-1  hover:bg-primary-400 hover:text-neutral-50 cursor-pointer transition-all duration-300 `,
				isActive ? 'bg-primary-400 text-neutral-50' : '',
				className
			)}
			// key={location.id}
			onClick={handleIsActive}
			{...props}
		>
			{label}
		</Button>
	);
};
