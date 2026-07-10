import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
    useSearchParams: () => [new URLSearchParams('destination=Bangkok')],
}), { virtual: true });

import GetInTouch from './GetInTouch';

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        }),
    });
    Object.defineProperty(window, 'requestAnimationFrame', {
        writable: true,
        value: (callback) => callback(),
    });
    Element.prototype.scrollIntoView = jest.fn();
});

beforeEach(() => {
    Element.prototype.scrollIntoView.mockClear();
});

test('prefills the destination and prepares a sendable inquiry', () => {
    render(<GetInTouch />);

    const name = screen.getByLabelText(/^Name/);
    expect(screen.getByLabelText(/Preferred destination/i)).toHaveValue('Bangkok');

    fireEvent.click(screen.getByRole('button', { name: /Prepare my inquiry/i }));
    expect(name).toHaveFocus();
    expect(screen.getAllByText(/Please|Enter|Add a little more detail/)).toHaveLength(4);

    fireEvent.change(name, { target: { value: 'Arun Mehta' } });
    fireEvent.change(screen.getByLabelText(/^Email/), { target: { value: 'arun@example.com' } });
    fireEvent.change(screen.getByLabelText(/Estimated group size/i), { target: { value: '18' } });
    fireEvent.change(screen.getByLabelText(/What should this trip achieve/i), {
        target: {
            value: 'A six-night Thailand incentive program with meetings, dining, and cultural experiences.',
        },
    });
    fireEvent.click(screen.getByRole('button', { name: /Prepare my inquiry/i }));

    const successHeading = screen.getByRole('heading', { name: /Send it to our Bangkok team/i });
    expect(successHeading).toHaveFocus();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    expect(screen.getByRole('link', { name: /Send by email/i })).toHaveAttribute(
        'href',
        expect.stringContaining('mailto:dinesh@victoryint.asia'),
    );
    expect(screen.getByRole('link', { name: /Send on WhatsApp/i })).toHaveAttribute(
        'href',
        expect.stringContaining('https://wa.me/66624638671'),
    );
});
