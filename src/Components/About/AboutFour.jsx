import { Link } from 'react-router-dom';
import CMS from '../../cms/content';
import ImageGallerySlider from '../Gallery/ImageGallerySlider';

function AboutFour() {
   const { about } = CMS;
   const storyImages = [
      { src: about.images.main1, alt: "Long-tail boat beside Thailand's limestone cliffs" },
      { src: about.images.main2, alt: 'Illuminated Thai temple in Bangkok' },
      { src: about.images.main3, alt: 'Quiet tropical bay framed by limestone cliffs' },
   ];

   return (
      <main className="victory-about">
         <section className="victory-about-story" aria-labelledby="victory-about-title">
            <div className="container victory-about-story__layout">
               <div className="victory-about-story__media" aria-label="Thailand destinations coordinated by Victory International">
                  <ImageGallerySlider
                     images={storyImages}
                     ariaLabel="Thailand destinations coordinated by Victory International"
                     variant="portrait"
                     priorityFirst
                  />
               </div>

               <div className="victory-about-story__content">
                  <p className="victory-section-eyebrow">{about.eyebrow}</p>
                  <h2 id="victory-about-title">{about.heading}</h2>
                  <p>{about.intro1}</p>
                  <p>{about.intro2}</p>

                  <ol className="victory-about-principles">
                     {about.principles.map((principle, index) => (
                        <li key={principle.title}>
                           <span>{String(index + 1).padStart(2, '0')}</span>
                           <div>
                              <h3>{principle.title}</h3>
                              <p>{principle.text}</p>
                           </div>
                        </li>
                     ))}
                  </ol>

                  <Link to={about.cta.href} className="th-btn victory-about-story__cta">
                     {about.cta.text}
                     <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                  </Link>
               </div>
            </div>
         </section>

         <section className="victory-about-capabilities" aria-labelledby="victory-capabilities-title">
            <div className="container">
               <div className="victory-about-capabilities__heading">
                  <div>
                     <p className="victory-section-eyebrow">{about.capabilities.eyebrow}</p>
                     <h2 id="victory-capabilities-title">{about.capabilities.heading}</h2>
                  </div>
                  <p>{about.capabilities.intro}</p>
               </div>

               <ol className="victory-about-capabilities__list">
                  {about.capabilities.items.map((capability, index) => (
                     <li key={capability.title}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <div>
                           <h3>{capability.title}</h3>
                           <p>{capability.text}</p>
                        </div>
                     </li>
                  ))}
               </ol>
            </div>
         </section>

         <section className="victory-about-process" aria-labelledby="victory-process-title">
            <div className="container victory-about-process__layout">
               <div className="victory-about-process__content">
                  <p className="victory-section-eyebrow">{about.process.eyebrow}</p>
                  <h2 id="victory-process-title">{about.process.heading}</h2>
                  <p className="victory-about-process__intro">{about.process.intro}</p>

                  <ol className="victory-about-process__steps">
                     {about.process.steps.map((step, index) => (
                        <li key={step.title}>
                           <span>{String(index + 1).padStart(2, '0')}</span>
                           <div>
                              <h3>{step.title}</h3>
                              <p>{step.text}</p>
                           </div>
                        </li>
                     ))}
                  </ol>

                  <Link to="/contact" className="victory-text-link">
                     Share your brief
                     <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                  </Link>
               </div>

               <div className="victory-about-process__media">
                  <img
                     src={about.images.process}
                     alt="Bangkok's Chao Phraya River and city skyline"
                     loading="lazy"
                  />
                  <div className="victory-about-process__caption">
                     <span>Based in Bangkok</span>
                     <strong>Connected planning across Thailand</strong>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}

export default AboutFour;
