import { IMenu } from "./menu.interface";

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'New desserts',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Popular now',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}


