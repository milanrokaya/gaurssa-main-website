'use client';

import { ArrowDownPointIcon } from '@/assets/icons/ArrowDownPointIcon';
import { CrossIcon } from '@/assets/icons/CrossIcon';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { OutIcon } from '@/assets/icons/outIcon';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BUSINESS_MEGAMENU, COMMUNITY_MEGAMENU } from '@/constants/home/navbar';
import { useOutsideEventListener } from '@/hooks/useOutsideEventListeners';
import { cn } from '@/lib/utils';
import { useNavControllerStore } from '@/store/useNavControllerStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { NavbarMegaMenu } from './NavbarMegaMenu';

interface NavItem {
	id: number;
	name: string;
	href: string;
	current?: boolean;
	node?: React.ReactNode;
}

const navigation: NavItem[] = [
	{
		id: 1,
		name: 'Business',
		href: '/industries',
		current: true,
		node: <NavbarMegaMenu data={BUSINESS_MEGAMENU} />,
	},
	{
		id: 2,
		name: 'Community',
		href: '/industries',
		current: false,
		node: <NavbarMegaMenu data={COMMUNITY_MEGAMENU} />,
	},
	// { id: 3, name: 'Investor Relation', href: '#industries', current: false },
	{ id: 4, name: 'NewsRoom', href: '/news-and-information', current: false },
	{ id: 5, name: 'Careers', href: '/careers', current: false },
];

interface NavbarRootprops extends React.ComponentProps<'header'> {
	children: React.ReactNode;
}

const NavbarRoot = ({ children, className }: NavbarRootprops) => {
	const { activeMenu, isScrolled, setIsScrolled, isNavWhite, setIsNavWhite } =
		useNavControllerStore();

	const pathname = usePathname();
	// console.log('PATH NAME', pathname);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		setIsNavWhite(pathname === '/');

		if (pathname === '/') {
			handleScroll();
			window.addEventListener('scroll', handleScroll);
		}
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [pathname]);

	const headerClasses = cn(
		'fixed w-full right-0 top-0 z-50 transition-all border-b duration-700 border-neutral-50/20',
		`backdrop-blur-lg flex z-[9999] items-center justify-between px-4 lg:px-20 h-16 `,
		isScrolled && isNavWhite ? 'shadow-md  bg-[#0d0d0dcb]' : '',
		activeMenu !== null ? 'bg-neutral-50' : '',
		!isNavWhite ? 'bg-neutral-50' : '',
		className
	);

	return <header className={headerClasses}>{children}</header>;
};

const NavLink = ({
	className,
	href,
	...props
}: React.ComponentProps<typeof Link>) => {
	return (
		<Link
			href={href}
			className={cn(
				`flex items-center flex-shrink-0 relative z-[200]`,
				className
			)}
			{...props}
		/>
	);
};

const List = ({ className }: React.ComponentProps<'li'>) => {
	return <li className={cn(className)} />;
};

const OpenButton = () => {
	const { setIsOpen, isNavWhite } = useNavControllerStore();
	return (
		<Button
			variant={'transparent'}
			size={'fit'}
			className="md:hidden flex items-center"
			onClick={() => setIsOpen(true)}
		>
			<MenuIcon
				width={28}
				height={28}
				className={`${isNavWhite ? ' stroke-neutral-50' : 'stroke-gray-600'}   transition-all duration-300 `}
			/>
		</Button>
	);
};

const CloseButton = () => {
	const { setIsOpen } = useNavControllerStore();
	return (
		<Button
			variant={'transparent'}
			size={'fit'}
			className="md:hidden flex items-center"
			onClick={() => setIsOpen(false)}
		>
			<CrossIcon
				width={24}
				height={24}
				className=" stroke-gray-600   transition-all duration-300 stroke-1"
			/>
		</Button>
	);
};

const TextWithHoverEffect = ({
	text,
	textColor,
}: {
	text: string;
	textColor: string;
}) => (
	<span className={`relative block overflow-hidden ${textColor}`}>
		<span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full">
			{text}
		</span>
		<span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
			{text}
		</span>
	</span>
);

const DesktopMenu = () => {
	const { setActiveMenu, activeMenu, isScrolled, isNavWhite } =
		useNavControllerStore();

	return (
		<nav className="hidden md:flex items-center gap-4 h-full">
			<ul className="flex items-center h-full gap-2">
				{navigation.map((item) => {
					// Regular link without dropdown
					if (!item.node) {
						return (
							<li key={item.name} className="group px block">
								<Link
									href={item.href}
									className={`text-sm uppercase group-hover:text-primary-400 ${isNavWhite ? 'text-neutral-50 ' : 'text-gray-400'} cursor-pointer px-2 lg:px-6 block font-light`}
									aria-current={item.current ? 'page' : undefined}
								>
									<TextWithHoverEffect
										text={item.name}
										textColor={activeMenu !== null ? 'text-gray-400' : ''}
									/>
								</Link>
							</li>
						);
					}

					// Dropdown menu item
					const getLinkTextColor = () => {
						if (activeMenu === null)
							return ` [&>svg]:text-neutral-50 ${isNavWhite ? 'text-neutral-50' : 'text-gray-400'}`;
						return activeMenu === item.id
							? `text-primary-600 [&>svg]:stroke-primary-600 [&>svg]:-rotate-180`
							: `text-gray-400 [&>svg]:stroke-gray-400 `;
					};

					const getDropdownStyles = () => {
						const baseClasses =
							'absolute bg-neutral-50 w-screen inset-0 shadow-md transition-all overflow-hidden';
						const topPositionClass = isScrolled ? 'top-12' : 'top-16';
						const visibilityClasses =
							activeMenu === item.id && item.node
								? 'duration-500 visible h-96 z-100'
								: 'h-0 z-[80] invisible duration-700 pointer-events-none';

						return cn(baseClasses, topPositionClass, visibilityClasses);
					};

					const contentStyles = {
						opacity: activeMenu === item.id ? 1 : 0,
						transition: 'opacity 300ms',
						transitionDelay: activeMenu === item.id ? '200ms' : '0ms',
					};

					return (
						<li
							className="group h-full flex items-center px-2 lg:px-6 cursor-pointer"
							onMouseEnter={() => setActiveMenu(item.id)}
							onMouseLeave={() => setActiveMenu(null)}
							key={item.id}
						>
							<div
								className={cn(
									'relative overflow-hidden text-sm uppercase cursor-pointer flex items-center font-light',
									'[&>svg]:transition-transform [&>svg]:duration-300',
									getLinkTextColor()
								)}
							>
								<TextWithHoverEffect text={item.name} textColor="" />
								<ArrowDownPointIcon
									className={`w-4 h-4 ml-1 stroke-1 ${isNavWhite ? 'stroke-neutral-50' : 'stroke-gray-400'} group-hover:stroke-primary-600 transition-colors duration-300 fill-none`}
								/>
							</div>

							<div className={getDropdownStyles()}>
								<div className="w-full h-full" style={contentStyles}>
									{item.node}
								</div>
							</div>
						</li>
					);
				})}
			</ul>

			<Button className="flex items-center gap-2 py-0.5 relative z-[200]">
				<OutIcon className="stroke-neutral-50 fill-none w-6 h-6 stroke-1" />
				<span className="uppercase font-light">Investor Login</span>
			</Button>
		</nav>
	);
};

const MobileMenu = () => {
	const { setIsOpen, isOpen } = useNavControllerStore();
	const ref = useOutsideEventListener(() => setIsOpen(false));
	return (
		<>
			<div
				className={`bg-black/70  w-full min-h-screen top-0 right-0 fixed duration-1000 transition-all ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} `}
			></div>
			<div
				className={`md:hidden transition-transform duration-1000 w-[80vw] p-6 ${isOpen ? 'translate-x-0 ' : 'translate-x-200 '} bg-white shadow-lg fixed h-screen  top-0 right-0 z-[300]`}
				ref={ref as never}
			>
				<div className="w-full flex justify-between ">
					<Link href="/" className="text-2xl font-bold text-gray-800">
						Gaurssa
					</Link>
					<CloseButton />
				</div>
				<nav className="h-full flex flex-col justify-between pb-6">
					<Accordion type="single" className="min-w-full mt-4" collapsible>
						{navigation.map((item) => (
							<AccordionItem
								value={String(item.id)}
								key={item.id}
								className="border-b border-neutral-200 w-full  py-1 px-0"
							>
								{item.node ? (
									<AccordionTrigger
										className={`font-light uppercase text-base text-gray-400 no-underline data-[state=open]:no-underline hover:no-underline cursor-pointer py-4  w-full flex justify-between  ${item.node ? '[&>svg]:block' : '[&>svg]:hidden'}`}
										// onClick={() => setIsOpen(false)}
									>
										{item.name}
									</AccordionTrigger>
								) : (
									<Link
										href="/home"
										className="font-light uppercase text-base text-gray-400 no-underline data-[state=open]:no-underline hover:no-underline cursor-pointer  w-full flex justify-between py-4 "
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								)}
								<AccordionContent
									className="text-gray-800  text-base font-light max-w-full"
									onClick={() => setIsOpen(false)}
								>
									{item.node}
								</AccordionContent>
							</AccordionItem>
						))}
						{/* */}
					</Accordion>
					<Button className="flex items-center gap-2 py-0.5 relative z-[200] w-fit self-end">
						<OutIcon className="stroke-neutral-50 fill-none w-6 h-6 stroke-1" />
						<span className="uppercase font-light">Investor Login</span>
					</Button>
				</nav>
			</div>
		</>
	);
};

export const Navbar = {
	Root: NavbarRoot,
	Link: NavLink,
	List,
	OpenButton,
	CloseButton,
	MobileMenu,
	DesktopMenu,
};
