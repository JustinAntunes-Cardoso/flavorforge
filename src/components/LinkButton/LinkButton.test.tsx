import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import LinkButton from './LinkButton';

const mockTheme: MantineThemeOverride = {
    colors: {
        brand: ['#E65100', '#EF6C00', '#F57C00', '#FB8C00', '#FF9800', '#FFA726', '#FFB74D', '#FFE082', '#FFECB3'],
        secondary: ['#33691E', '#558B2F', '#689F38', '#7CB342', '#8BC34A', '#9CCC65', '#AED581', '#E6EE9C', '#DCEDC8'],
        accents: ['#F57F17', '#F9A825', '#FBC02D', '#FBC02D', '#FFEB3B', '#FFEE58', '#FFEE58', '#FFF59D', '#FFF9C4'],
    },
    primaryColor: 'brand',
};

describe('LinkButton', () => {
    it('renders a button with the correct text and link', () => {
        const text = 'Click me';
        const to = '/some-page';

        const { getByRole } = render(
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mockTheme}>
                <MemoryRouter>
                    <LinkButton text={text} to={to} />
                </MemoryRouter>
            </MantineProvider>
        );

        // Use getByRole again to locate the anchor element within the button
        const buttonElement = getByRole('link', { name: text });

        // Assert that the button element exists
        expect(buttonElement).toBeInTheDocument();

        // Assert the 'href' attribute for the link
        expect(buttonElement).toHaveAttribute('href', to);
    });

    it('renders a button with a left icon when provided', () => {
        const text = 'Click me';
        const to = '/some-page';
        const leftIcon = <span className="icon">🔍</span>;

        const { container } = render(
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mockTheme}>
                <MemoryRouter>
                    <LinkButton text={text} to={to} leftIcon={leftIcon} />
                </MemoryRouter>
            </MantineProvider >
        );

        // Assert the presence of the left icon
        const leftIconElement = container.querySelector('.icon');
        expect(leftIconElement).toBeInTheDocument();
    });
});