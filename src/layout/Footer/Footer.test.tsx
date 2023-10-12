import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import Footer from './Footer';
import { linkData as mockLinkData } from '../../utils/constants/globals';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

describe('Footer Component', () => {
    it('should render the footer text', () => {
        render(
            <MantineProvider theme={mockTheme}>
                <Footer links={mockLinkData.links} />
            </MantineProvider>
        );
        const footerElement = screen.getByText(/© 2023 Bluefin. All rights reserved./i);
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the links from props', () => {
        render(
            <MantineProvider theme={mockTheme}>
                <Footer links={mockLinkData.links} />
            </MantineProvider>
        );

        // Check if each link label is present in the rendered output
        mockLinkData.links.forEach((link) => {
            const linkElement = screen.getByText(link.label);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', link.link);
        });
    });
});