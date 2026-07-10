import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CMS from '../../cms/content';
import destinations from '../../cms/destinations';

const serviceOptions = [
    'Ground handling',
    'Hotels and accommodation',
    'Transport and transfers',
    'Tours and guides',
    'MICE and events',
    'Destination weddings',
];

const initialErrors = {};
const errorFieldIds = {
    name: 'inquiry-name',
    email: 'inquiry-email',
    groupSize: 'inquiry-group-size',
    brief: 'inquiry-brief',
    endDate: 'inquiry-end-date',
};

function GetInTouch() {
    const [searchParams] = useSearchParams();
    const requestedDestination = searchParams.get('destination') || '';
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        travellerType: 'Travel agency or tour operator',
        destination: requestedDestination,
        startDate: '',
        endDate: '',
        groupSize: '',
        services: [],
        brief: '',
    });
    const [errors, setErrors] = useState(initialErrors);
    const [submittedBrief, setSubmittedBrief] = useState(null);
    const successHeadingRef = useRef(null);
    const { contact } = CMS.site;

    useEffect(() => {
        if (!submittedBrief || !successHeadingRef.current) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        successHeadingRef.current.focus();
        successHeadingRef.current.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start',
        });
    }, [submittedBrief]);

    const updateField = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
    };

    const toggleService = (service) => {
        setFormData((current) => ({
            ...current,
            services: current.services.includes(service)
                ? current.services.filter((item) => item !== service)
                : [...current.services, service],
        }));
    };

    const validate = () => {
        const nextErrors = {};

        if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Enter a valid email address.';
        if (!formData.groupSize || Number(formData.groupSize) < 1) nextErrors.groupSize = 'Enter an estimated group size.';
        if (formData.brief.trim().length < 20) nextErrors.brief = 'Add a little more detail so we can understand the brief.';
        if (formData.startDate && formData.endDate && formData.endDate < formData.startDate) {
            nextErrors.endDate = 'End date must be after the start date.';
        }

        setErrors(nextErrors);
        const firstError = Object.keys(nextErrors)[0];
        if (firstError) {
            window.requestAnimationFrame(() => {
                document.getElementById(errorFieldIds[firstError])?.focus();
            });
        }
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;
        setSubmittedBrief({ ...formData });
    };

    const inquiryText = useMemo(() => {
        if (!submittedBrief) return '';

        return [
            `Victory International inquiry from ${submittedBrief.name}`,
            submittedBrief.company ? `Company: ${submittedBrief.company}` : null,
            `Email: ${submittedBrief.email}`,
            submittedBrief.phone ? `Phone/WhatsApp: ${submittedBrief.phone}` : null,
            `Enquiry type: ${submittedBrief.travellerType}`,
            submittedBrief.destination ? `Destination: ${submittedBrief.destination}` : 'Destination: Open to recommendations',
            `Travel dates: ${submittedBrief.startDate || 'Flexible'} to ${submittedBrief.endDate || 'Flexible'}`,
            `Estimated group size: ${submittedBrief.groupSize}`,
            `Services: ${submittedBrief.services.length ? submittedBrief.services.join(', ') : 'Open to recommendation'}`,
            '',
            'Brief:',
            submittedBrief.brief,
        ].filter((line) => line !== null).join('\n');
    }, [submittedBrief]);

    const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent('Thailand proposal request')}&body=${encodeURIComponent(inquiryText)}`;
    const whatsappHref = `${contact.whatsappHref}?text=${encodeURIComponent(inquiryText)}`;

    return (
        <main className="victory-inquiry">
            <section className="victory-inquiry__intro" aria-labelledby="inquiry-title">
                <div className="container victory-inquiry__heading">
                    <div>
                        <p className="victory-section-eyebrow">Start with the working brief</p>
                        <h1 id="inquiry-title">Tell us what the trip needs to achieve</h1>
                    </div>
                    <p>
                        Dates, group profile, and priorities are enough to begin. We will use them
                        to recommend the right route, services, and next conversation.
                    </p>
                </div>
            </section>

            <section className="victory-inquiry__workspace">
                <div className="container victory-inquiry__layout">
                    <div className="victory-inquiry__form-panel">
                        {submittedBrief ? (
                            <div className="victory-inquiry-success" role="status" aria-live="polite">
                                <p className="victory-section-eyebrow">Your brief is ready</p>
                                <h2 ref={successHeadingRef} tabIndex="-1">Send it to our Bangkok team</h2>
                                <p>
                                    Choose email or WhatsApp below. Your details stay in this browser
                                    until you choose how to send them.
                                </p>
                                <dl>
                                    <div><dt>Contact</dt><dd>{submittedBrief.name} · {submittedBrief.email}</dd></div>
                                    <div><dt>Destination</dt><dd>{submittedBrief.destination || 'Open to recommendations'}</dd></div>
                                    <div><dt>Group</dt><dd>{submittedBrief.groupSize} travellers</dd></div>
                                </dl>
                                <div className="victory-inquiry-success__actions">
                                    <a className="th-btn" href={mailtoHref}>
                                        Send by email
                                        <i className="fa-regular fa-envelope" aria-hidden="true" />
                                    </a>
                                    <a className="victory-text-link" href={whatsappHref} target="_blank" rel="noreferrer">
                                        Send on WhatsApp
                                        <i className="fab fa-whatsapp" aria-hidden="true" />
                                    </a>
                                </div>
                                <button type="button" className="victory-inquiry-edit" onClick={() => setSubmittedBrief(null)}>
                                    Edit inquiry details
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="victory-inquiry-form__section">
                                    <div className="victory-inquiry-form__section-heading">
                                        <span>01</span>
                                        <div><h2>Your details</h2><p>Who should our team reply to?</p></div>
                                    </div>
                                    <div className="victory-inquiry-form__grid">
                                        <div className="victory-field">
                                            <label htmlFor="inquiry-name">Name *</label>
                                            <input id="inquiry-name" name="name" value={formData.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'inquiry-name-error' : undefined} />
                                            {errors.name && <span id="inquiry-name-error" className="victory-field__error">{errors.name}</span>}
                                        </div>
                                        <div className="victory-field">
                                            <label htmlFor="inquiry-company">Company or agency</label>
                                            <input id="inquiry-company" name="company" value={formData.company} onChange={updateField} />
                                        </div>
                                        <div className="victory-field">
                                            <label htmlFor="inquiry-email">Email *</label>
                                            <input id="inquiry-email" type="email" name="email" value={formData.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'inquiry-email-error' : undefined} />
                                            {errors.email && <span id="inquiry-email-error" className="victory-field__error">{errors.email}</span>}
                                        </div>
                                        <div className="victory-field">
                                            <label htmlFor="inquiry-phone">Phone or WhatsApp</label>
                                            <input id="inquiry-phone" type="tel" name="phone" value={formData.phone} onChange={updateField} />
                                        </div>
                                        <div className="victory-field victory-field--wide">
                                            <label htmlFor="inquiry-type">I am enquiring as</label>
                                            <select id="inquiry-type" name="travellerType" value={formData.travellerType} onChange={updateField}>
                                                <option>Travel agency or tour operator</option>
                                                <option>Corporate or MICE planner</option>
                                                <option>Group organiser</option>
                                                <option>Private traveller</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="victory-inquiry-form__section">
                                    <div className="victory-inquiry-form__section-heading">
                                        <span>02</span>
                                        <div><h2>Trip shape</h2><p>Give us the practical outline.</p></div>
                                    </div>
                                    <div className="victory-inquiry-form__grid">
                                        <div className="victory-field victory-field--wide">
                                            <label htmlFor="inquiry-destination">Preferred destination</label>
                                            <select id="inquiry-destination" name="destination" value={formData.destination} onChange={updateField}>
                                                <option value="">Open to recommendations</option>
                                                {destinations.map((destination) => <option key={destination.slug}>{destination.name}</option>)}
                                            </select>
                                        </div>
                                        <div className="victory-field">
                                            <label htmlFor="inquiry-start-date">Start date</label>
                                            <input id="inquiry-start-date" type="date" name="startDate" value={formData.startDate} onChange={updateField} />
                                        </div>
                                        <div className="victory-field">
                                            <label htmlFor="inquiry-end-date">End date</label>
                                            <input id="inquiry-end-date" type="date" name="endDate" value={formData.endDate} onChange={updateField} aria-invalid={Boolean(errors.endDate)} aria-describedby={errors.endDate ? 'inquiry-end-error' : undefined} />
                                            {errors.endDate && <span id="inquiry-end-error" className="victory-field__error">{errors.endDate}</span>}
                                        </div>
                                        <div className="victory-field victory-field--wide">
                                            <label htmlFor="inquiry-group-size">Estimated group size *</label>
                                            <input id="inquiry-group-size" type="number" min="1" inputMode="numeric" name="groupSize" value={formData.groupSize} onChange={updateField} aria-invalid={Boolean(errors.groupSize)} aria-describedby={errors.groupSize ? 'inquiry-group-error' : undefined} />
                                            {errors.groupSize && <span id="inquiry-group-error" className="victory-field__error">{errors.groupSize}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="victory-inquiry-form__section">
                                    <div className="victory-inquiry-form__section-heading">
                                        <span>03</span>
                                        <div><h2>Services and priorities</h2><p>Select any known needs, then describe the outcome.</p></div>
                                    </div>
                                    <fieldset className="victory-service-options">
                                        <legend>Services needed</legend>
                                        {serviceOptions.map((service) => (
                                            <label key={service}>
                                                <input type="checkbox" checked={formData.services.includes(service)} onChange={() => toggleService(service)} />
                                                <span>{service}</span>
                                            </label>
                                        ))}
                                    </fieldset>
                                    <div className="victory-field victory-field--wide">
                                        <label htmlFor="inquiry-brief">What should this trip achieve? *</label>
                                        <textarea id="inquiry-brief" name="brief" rows="5" value={formData.brief} onChange={updateField} aria-invalid={Boolean(errors.brief)} aria-describedby={errors.brief ? 'inquiry-brief-error' : undefined} placeholder="Tell us about the group, pace, must-haves, and anything that could make or break the program." />
                                        {errors.brief && <span id="inquiry-brief-error" className="victory-field__error">{errors.brief}</span>}
                                    </div>
                                </div>

                                <button type="submit" className="th-btn victory-inquiry-submit">
                                    Prepare my inquiry
                                    <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                </button>
                            </form>
                        )}
                    </div>

                    <aside className="victory-inquiry__aside" aria-labelledby="contact-team-title">
                        <p className="victory-section-eyebrow">Direct contact</p>
                        <h2 id="contact-team-title">Victory International, Bangkok</h2>
                        <p>Use the form for a structured brief, or contact the team directly.</p>
                        <address>{contact.address}</address>
                        <div className="victory-inquiry__direct-links">
                            <a href={contact.landlineHref}><span>Landline</span>{contact.landline}</a>
                            <a href={contact.mobileHref}><span>Mobile</span>{contact.mobile}</a>
                            <a href={contact.emailHref}><span>Email</span>{contact.email}</a>
                        </div>
                        <h3>Services we coordinate</h3>
                        <ul>
                            <li>Transport and ground handling</li>
                            <li>Hotels and accommodation</li>
                            <li>Tailor-made tours and guides</li>
                            <li>Events, MICE, and incentive groups</li>
                            <li>Destination weddings and special projects</li>
                        </ul>
                    </aside>
                </div>
            </section>
        </main>
    );
}

export default GetInTouch;
