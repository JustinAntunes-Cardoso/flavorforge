import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import AnchorButton from './AnchorButton';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

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