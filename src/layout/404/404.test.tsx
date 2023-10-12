import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import _404 from './404';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

describe('404 Component', () => {
    test('renders _404 component', () => {
        const { getByText } = render(
            <MantineProvider theme={mockTheme}>
                <MemoryRouter>
                    <_404 />
                </MemoryRouter>
            </MantineProvider>
        );

        const titleElement = getByText('You have found a secret place');

        expect(titleElement).toBeInTheDocument();
    });
});
