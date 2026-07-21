import { render } from '@testing-library/react';
import MotionEffects from './MotionEffects';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: () => ({ matches: false }),
  });
  Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: (callback) => callback(),
  });
  Object.defineProperty(window, 'cancelAnimationFrame', {
    writable: true,
    value: jest.fn(),
  });

  class ImmediateIntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }

    observe(element) {
      this.callback([{ target: element, isIntersecting: true }]);
    }

    unobserve() {}

    disconnect() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: ImmediateIntersectionObserver,
  });
});

test('reveals page sections and repeated content as they enter the viewport', () => {
  const { container } = render(
    <>
      <MotionEffects routeKey="/" />
      <section>
        <article className="victory-home-insight">Thailand insight</article>
      </section>
    </>,
  );

  expect(container.querySelector('section')).toHaveClass('victory-reveal', 'is-visible');
  expect(container.querySelector('article')).toHaveClass(
    'victory-reveal',
    'victory-reveal--item',
    'is-visible',
  );
});
