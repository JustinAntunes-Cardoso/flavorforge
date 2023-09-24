import { render } from '@testing-library/react';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import AnchorButton from './AnchorButton';

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

describe('AnchorButton', () => {
    it('renders a button with the correct text and attributes', () => {
        const text = 'Click me';
        const href = 'https://github.com/JustinAntunes-Cardoso';

        const { getByRole } = render(
            <MantineProvider theme={mockTheme}>
                <AnchorButton text={text} href={href} />
            </MantineProvider>
        );

        // Use getByRole again to locate the anchor element within the button
        const anchorElement = getByRole('link', { name: text });

        // Assert that the anchor element exists
        expect(anchorElement).toBeInTheDocument();

        // Assert that the anchor contains a tag attributes
        expect(anchorElement).toHaveAttribute('href', href);
        expect(anchorElement).toHaveAttribute('target', '_blank');
        expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
});