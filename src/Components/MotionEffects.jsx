import { useEffect } from 'react';

const revealItemSelector = [
  '.victory-home-insight',
  '.victory-destination-card',
  '.victory-insights-list__item',
  '.victory-related-destinations article',
  '.victory-about-principles li',
  '.victory-about-capabilities__list li',
  '.victory-about-process__steps li',
].join(',');

function MotionEffects({ routeKey }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;

    const frame = window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll('section:not(.victory-gallery-carousel)');
      const items = document.querySelectorAll(revealItemSelector);
      const revealElements = [...sections, ...items];

      sections.forEach((section) => section.classList.add('victory-reveal'));
      items.forEach((item, index) => {
        item.classList.add('victory-reveal', 'victory-reveal--item');
        item.style.setProperty('--victory-reveal-order', index % 6);
      });

      if (reducedMotion || !('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
        return;
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
      });

      revealElements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [routeKey]);

  return null;
}

export default MotionEffects;
