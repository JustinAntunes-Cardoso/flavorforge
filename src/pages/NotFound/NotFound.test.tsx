import { render } from '@testing-library/react';
import NotFound from './NotFound';
import { MantineProvider } from '@mantine/core';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

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