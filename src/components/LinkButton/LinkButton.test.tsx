import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import LinkButton from './LinkButton';
import { globalTheme as mockTheme } from '../../utils/constants/theme';

describe('LinkButton', () => {
    it('renders a button with the correct text and link', () => {
        const text = 'Click me';
        const to = '/some-page';

        const { getByRole } = render(
            <MantineProvider theme={mockTheme}>
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
            <MantineProvider theme={mockTheme}>
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