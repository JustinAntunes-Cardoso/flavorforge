import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';

const mockTheme: MantineThemeOverride = {
    colors: {
        brand: ['#E65100', '#EF6C00', '#F57C00', '#FB8C00', '#FF9800', '#FFA726', '#FFB74D', '#FFE082', '#FFECB3'],
        secondary: ['#33691E', '#558B2F', '#689F38', '#7CB342', '#8BC34A', '#9CCC65', '#AED581', '#E6EE9C', '#DCEDC8'],
        accents: ['#F57F17', '#F9A825', '#FBC02D', '#FBC02D', '#FFEB3B', '#FFEE58', '#FFEE58', '#FFF59D', '#FFF9C4'],
    },
    primaryColor: 'brand',
};

//Data prop
const data = [
    {
        title: 'Group 1',
        links: [
            { label: 'Link 1', link: '/link1' },
            { label: 'Link 2', link: '/link2' },
        ],
    },
    {
        title: 'Group 2',
        links: [
            { label: 'Link 3', link: '/link3' },
            { label: 'Link 4', link: '/link4' },
        ],
    },
];



describe('Footer Component', () => {
    it('should render the footer text', () => {
        render(
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mockTheme}>
                <Footer data={data} />
            </MantineProvider>
        );
        const footerElement = screen.getByText(/© 2023 FlavourForge. All rights reserved./i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the links from props', () => {
        render(
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mockTheme}>
                <Footer data={data} />
            </MantineProvider>
        );

        // Check if each link label is present in the rendered output
        data.forEach((group) => {
            group.links.forEach((link) => {
                const linkElement = screen.getByText(link.label);
                expect(linkElement).toBeInTheDocument();
                expect(linkElement).toHaveAttribute('href', link.link);
            });
        });
    });
});