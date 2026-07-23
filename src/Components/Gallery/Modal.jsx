import React, { useEffect, useRef, useState } from 'react';

const Modal = ({
    isOpen,
    closeModal,
    imageSrc,
    imageAlt = 'Expanded gallery view',
    onPrevious,
    onNext,
    positionLabel,
}) => {
    const [visible, setVisible] = useState(false);
    const closeButtonRef = useRef(null);
    const dialogRef = useRef(null);
    const previousFocusRef = useRef(null);

    useEffect(() => {
        let visibilityTimer;
        let focusTimer;

        if (isOpen) {
            previousFocusRef.current = document.activeElement;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            visibilityTimer = window.setTimeout(() => {
                setVisible(true);
            }, 10);
            focusTimer = window.setTimeout(() => {
                closeButtonRef.current?.focus({ preventScroll: true });
            }, 80);

            return () => {
                window.clearTimeout(visibilityTimer);
                window.clearTimeout(focusTimer);
                document.body.style.overflow = previousOverflow;
                previousFocusRef.current?.focus?.();
            };
        } else {
            setVisible(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
            if (event.key === 'ArrowLeft') onPrevious?.();
            if (event.key === 'ArrowRight') onNext?.();

            if (event.key === 'Tab') {
                const focusableElements = dialogRef.current?.querySelectorAll('button:not(:disabled)');
                if (!focusableElements?.length) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeModal, isOpen, onNext, onPrevious]);

    if (!isOpen) return null;

    return (
        <div
            ref={dialogRef}
            className={`modal-overlay victory-lightbox ${visible ? 'show' : ''}`}
            onClick={closeModal}
            onTransitionEnd={(event) => {
                if (event.target === event.currentTarget && visible) {
                    closeButtonRef.current?.focus({ preventScroll: true });
                }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery viewer"
        >
            <div className={`modal-content ${visible ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeButtonRef}
                    type="button"
                    className="close-btn victory-lightbox__close"
                    onClick={closeModal}
                    aria-label="Close image viewer"
                >
                    <i className="fa-regular fa-xmark" aria-hidden="true" />
                </button>
                <img src={imageSrc} alt={imageAlt} className="modal-image" />
            </div>
            {onPrevious && (
                <button
                    type="button"
                    className="victory-lightbox__nav victory-lightbox__nav--previous"
                    onClick={(event) => {
                        event.stopPropagation();
                        onPrevious();
                    }}
                    aria-label="View previous image"
                >
                    <i className="fa-regular fa-arrow-left" aria-hidden="true" />
                </button>
            )}
            {onNext && (
                <button
                    type="button"
                    className="victory-lightbox__nav victory-lightbox__nav--next"
                    onClick={(event) => {
                        event.stopPropagation();
                        onNext();
                    }}
                    aria-label="View next image"
                >
                    <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                </button>
            )}
            {positionLabel && <p className="victory-lightbox__position" aria-live="polite">{positionLabel}</p>}
        </div>
    );
};

export default Modal;
