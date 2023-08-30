export interface FooterLink {
	label: string;
	link: string;
}

export interface FooterLinksProps {
	data: {
		title: string;
		links: FooterLink[];
	}[];
}
