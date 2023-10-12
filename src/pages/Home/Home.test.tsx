import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

describe('Home Component', () => {
    test('renders Home page', () => {
        const { getByText } = render(
            <MantineProvider theme={mockTheme}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </MantineProvider>
        );

        const heroText = getByText(/Your Recipe Magic Wand/i);
        const footerText = getByText('© 2023 FlavourForge. All rights reserved.');

        // Assert that the expected elements are present in the rendered component
        expect(heroText).toBeInTheDocument();
        expect(footerText).toBeInTheDocument();

    });
});