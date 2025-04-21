export interface MegaMenuType {
	id: number;
	label: string;
	link: string;
	image: string;
}

export const BUSINESS_MEGAMENU: MegaMenuType[] = [
	{
		id: 1,
		label: 'Eyewear',
		link: '/industries',
		image: '/mega-menu/eyeware.jpeg',
	},
	{
		id: 2,
		label: 'Textile',
		link: '/industries',
		image: '/mega-menu/textile.jpeg',
	},
	{
		id: 3,
		label: 'Automative',
		link: '/industries',
		image: '/mega-menu/automative.jpeg',
	},
	{
		id: 4,
		label: 'Energy',
		link: '/industries',
		image: '/mega-menu/energy.jpeg',
	},
	{
		id: 5,
		label: 'Healthcare',
		link: '/industries',
		image: '/mega-menu/healthcare.jpeg',
	},
];

export const COMMUNITY_MEGAMENU: MegaMenuType[] = [
	{
		id: 1,
		label: 'Healthcare',
		link: '/industries',
		image: '/mega-menu/doc-saheb.png',
	},
	{
		id: 2,
		label: 'Environment',
		link: '/industries',
		image: '/mega-menu/jhaar-paat.jpeg',
	},
	{
		id: 3,
		label: 'Education',
		link: '/industries',
		image: '/mega-menu/pustak.jpeg',
	},
	{
		id: 5,
		label: 'Community Development',
		link: '/industries',
		image: '/mega-menu/hands.jpeg',
	},
	{
		id: 4,
		label: 'Child Welfare',
		link: '/industries',
		image: '/home/nivaran-3.jpeg',
	},
];
