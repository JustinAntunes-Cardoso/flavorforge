interface HeaderLink {
  link: string;
  label: string;
}

export interface NavBarProps {
  links: {
    link: string;
    label: string;
    links?: HeaderLink[];
  }[];
}
