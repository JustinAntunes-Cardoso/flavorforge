interface HeaderLink {
	link: string;
	label: string;
}

export interface HeaderSearchProps {
	links: {
		link: string;
		label: string;
		links?: HeaderLink[];
	}[];
}

interface FooterLink {
	label: string;
	link: string;
}

export interface FooterLinksProps {
	data: {
		title: string;
		links: FooterLink[];
	}[];
}
