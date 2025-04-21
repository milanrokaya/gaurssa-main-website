import { SearchIcon } from '@/assets/icons/SearchIcon';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface SearchProps extends React.ComponentProps<'input'> {
	className?: string;
	disableIcon?: boolean;
}

export const Search = ({
	className,
	disableIcon = false,
	...props
}: SearchProps) => {
	return (
		<div className="relative w-full font-outfit">
			<Input
				id="portfolioLink"
				className={cn(
					'border-none rounded-r-full py-1    px-4 bg-gray-50 focus-visible::border-none text-gray-600 placeholder:text-gray-400 placeholder:text-sm font-light  text-sm',
					className
				)}
				type="text"
				{...props}
			/>

			{!disableIcon ? (
				<SearchIcon className="w-6 h-6 stroke-1 stroke-gray-400 absolute top-1.5 right-2 " />
			) : null}
		</div>
	);
};
