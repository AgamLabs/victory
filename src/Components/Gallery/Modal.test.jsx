import { act, fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

test('supports keyboard navigation and restores focus after closing', () => {
    jest.useFakeTimers();

    const sourceButton = document.createElement('button');
    document.body.appendChild(sourceButton);
    sourceButton.focus();

    const closeModal = jest.fn();
    const onPrevious = jest.fn();
    const onNext = jest.fn();
    const modalProps = {
        isOpen: true,
        closeModal,
        imageSrc: '/test-image.jpg',
        imageAlt: 'Thailand gallery view',
        onPrevious,
        onNext,
        positionLabel: '1 / 3',
    };

    const { rerender } = render(<Modal {...modalProps} />);

    act(() => {
        jest.advanceTimersByTime(100);
    });

    const dialog = screen.getByRole('dialog', { name: /image gallery viewer/i });
    const closeButton = screen.getByRole('button', { name: /close image viewer/i });
    const nextButton = screen.getByRole('button', { name: /view next image/i });

    fireEvent.transitionEnd(dialog);
    expect(closeButton).toHaveFocus();
    expect(document.body).toHaveStyle({ overflow: 'hidden' });

    fireEvent.keyDown(window, { key: 'Tab', shiftKey: true });
    expect(nextButton).toHaveFocus();
    fireEvent.keyDown(window, { key: 'Tab' });
    expect(closeButton).toHaveFocus();

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
    expect(closeModal).toHaveBeenCalledTimes(1);

    rerender(<Modal {...modalProps} isOpen={false} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body).toHaveStyle({ overflow: '' });
    expect(sourceButton).toHaveFocus();

    sourceButton.remove();
    jest.useRealTimers();
});
