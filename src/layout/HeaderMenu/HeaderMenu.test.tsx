import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import HeaderMenu from './HeaderMenu'; // Import your component
import { linkData as mockLinkData } from '../../utils/constants/globals';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

describe('HeaderMenu Component', () => {
    it('renders HeaderMenu component with links', () => {
        render(
            <MantineProvider theme={mockTheme}>
                <HeaderMenu links={mockLinkData.links} />
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