import { render } from '@testing-library/react';
import NotFound from './NotFound';
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

describe('404 Component', () => {
    test('renders NotFound page', () => {
        const { getByText } = render(
            <MantineProvider theme={mockTheme}>
                <NotFound />
            </MantineProvider>
        );

        const headerText = getByText('You have found a secret place');
        const footerText = getByText('© 2023 FlavourForge. All rights reserved.');

        // Assert that the expected elements are present in the rendered component
        expect(headerText).toBeInTheDocument();
        expect(footerText).toBeInTheDocument();

    });
});