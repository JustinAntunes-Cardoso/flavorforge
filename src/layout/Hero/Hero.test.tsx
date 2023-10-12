import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Hero from './Hero';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

describe('Hero Component', () => {

    test('displays the welcome title', () => {
        const { getByText } = render(
            <MantineProvider theme={mockTheme}>
                <MemoryRouter>
                    <Hero />
                </MemoryRouter>
            </MantineProvider>
        );

        const welcomeText = getByText(/Welcome/i);
        expect(welcomeText).toBeInTheDocument();
    });

});