export const MenuIcon = (props: React.ComponentProps<'svg'>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			strokeWidth={2}
			{...props}
		>
			<path d="M3 12h18" />
			<path d="M3 18h18" />
			<path d="M3 6h18" />
		</svg>
	);
};
