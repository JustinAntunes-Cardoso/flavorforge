import { render, screen } from '@testing-library/react';
import HeaderMenu from './HeaderMenu'; // Import your component
import { HeaderSearchProps } from '../../utils/types/types';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';

const mockTheme: MantineThemeOverride = {
    colors: {
        brand: [
            '#E65100',
            '#EF6C00',
            '#F57C00',
            '#FB8C00',
            '#FF9800',
            '#FFA726',
            '#FFB74D',
            '#FFE082',
            '#FFECB3',
            '#FFF6E1',
        ],
        secondary: [
            '#33691E',
            '#558B2F',
            '#689F38',
            '#7CB342',
            '#8BC34A',
            '#9CCC65',
            '#AED581',
            '#E6EE9C',
            '#DCEDC8',
            '#F2FCE8',
        ],
        accents: [
            '#F57F17',
            '#F9A825',
            '#FBC02D',
            '#FBC02D',
            '#FFEB3B',
            '#FFEE58',
            '#FFEE58',
            '#FFF59D',
            '#FFF9C4',
            '#FFFEE0',
        ],
    },
    primaryColor: 'brand',
};

// Mock the props data
const mockLinks: HeaderSearchProps = {
    links: [
        {
            label: 'Menu 1',
            link: '/menu1',
            links: [
                { label: 'Submenu 1', link: '/submenu1' },
                { label: 'Submenu 2', link: '/submenu2' },
            ],
        },
        { label: 'Menu 2', link: '/menu2' },
    ],
};

describe('HeaderMenu Component', () => {
    it('renders HeaderMenu component with links', () => {
        render(
            <MantineProvider theme={mockTheme}>
                <HeaderMenu links={mockLinks.links} />
            </MantineProvider>
        );

        // You can use screen queries to check if elements are rendered as expected
        const menu1 = screen.getByText(/Menu 1/i);
        const menu2 = screen.getByText(/Menu 2/i);

        // Ensure that your elements are in the document
        expect(menu1).toBeInTheDocument();
        expect(menu2).toBeInTheDocument();

    });
});