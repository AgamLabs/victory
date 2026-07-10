# Victory International Design Intent

Date: 2026-07-09
Repo: `AgamLabs/victory`
Working copy: `/Users/nandy/Documents/Victory DMC/victory`

## Purpose

Redesign Victory International from a travel template into a premium Thailand DMC product system: a public buyer journey, a high-intent proposal funnel, and a CMS/admin surface that can grow into a full-stack operating platform.

The design should feel like an expert operating partner in Thailand, not a generic tourism brochure.

Figma Make prompt: [Victory International Clean DMC Design](figma-make-victory-clean-design-prompt.md).

## Grounding Sources

### Current Victory App

- Active routes: `/`, `/about`, `/destination`, `/destination/:id`, `/blog`, `/blog/:id`, `/contact`.
- Stack: Create React App, React Router, static assets, Swiper, Bootstrap-like grid, Font Awesome, local JSON data, and `src/cms/content.js`.
- Current visual base: image-heavy travel site with carousel hero, destination slider, blog cards, decorative shapes, bright cyan accent, `Manrope`/`Inter`, and a decorative script font.
- Current live homepage signal: large Thailand imagery exists, but the mobile menu exposes unused template paths, hidden login/register content appears in page headings, and key CTAs are weak or missing.
- Current content debt: placeholder destinations and copy still exist in active or near-active code, including Maldives, Dubai, Switzerland, Netherlands, Realar Residence, generic lorem-style copy, and non-Thailand booking options.

### Market And DMC References

- DMCs are valued for local expertise, logistics, transport, accommodation, activities, excursions, venues, themed events, gala dinners, meetings, incentives, and language support. Source: [Destination management](https://en.wikipedia.org/wiki/Destination_management).
- EXO Thailand positions around destination expertise, service categories like Tailormade, Luxury, Adventure, Events, Groups, and explicit paths for partner/enquiry contact. Source: [EXO Thailand](https://www.exotravel.com/destinations/thailand/).
- Asian Trails Thailand combines destination storytelling, MICE, responsible travel, technology, agent/tour operator content, real-time B2B rates, and many specific Thailand trails. Source: [Asian Trails Thailand](https://www.asiantrails.travel/destination/thailand/).
- TCEB shows how serious Thailand business-events UX works: support pathways, event classification, smart search, event calendar, sustainability, and MICE-specific proof. Source: [Thailand Convention & Exhibition Bureau](https://www.businesseventsthailand.com/).

## Product North Star

Victory International should become the proposal-ready Thailand DMC partner for agencies, MICE planners, luxury advisors, and group travel buyers.

The first impression must answer four questions in under 10 seconds:

1. What does Victory do?
2. Who does Victory serve?
3. Why trust Victory in Thailand?
4. How do I request a useful proposal?

## Primary Audiences

### Travel Agencies And Tour Operators

Need fast partner confidence, itinerary ideas, destination coverage, supplier reliability, and clear enquiry handoff.

### Corporate And MICE Planners

Need event logistics credibility, transfers, venues, incentives, gala dinners, delegate support, sustainability, and fast feasibility conversations.

### Luxury And Leisure Advisors

Need taste, privacy, high-touch service, vetted experiences, hotels, guides, and custom itinerary flow.

### Internal Victory Operators And Editors

Need a future CMS/admin surface for enquiries, destinations, experiences, itineraries, suppliers, media, SEO, and draft proposals.

## UX Principles

- Lead with B2B clarity before travel inspiration.
- Make proposal request the main conversion, not generic search.
- Show local depth through logistics, destination facts, sample itineraries, and proof.
- Keep Thailand specific: Bangkok, Chiang Mai, Chiang Rai, Phuket, Krabi, Koh Samui, Pattaya, Hua Hin, Ayutthaya, Kanchanaburi, Khao Sok, Phi Phi, Phang Nga, and niche regions where Victory can credibly operate.
- Separate public marketing from operations: public pages sell and qualify; admin pages manage content, leads, and proposal work.
- Use agentic features as draft assistance: itinerary drafts, SEO packs, enquiry summaries, and missing-field checks should require human review.

## Information Architecture

Recommended primary nav:

- Why Victory
- Services
- Destinations
- Experiences
- Insights
- Contact
- Request Proposal

Recommended service segments:

- Travel Agencies
- Corporate And MICE
- Incentive Groups
- Luxury Leisure
- Weddings And Celebrations
- Custom Thailand Itineraries

Remove or hide from public navigation until real:

- Login/Register
- Home variants
- Tour/Guide/Resort/Activities template families
- Dead `/service` route
- Generic booking search

## Core Buyer Flow

1. Land on homepage or segment page.
2. Understand Victory's Thailand DMC role, audiences, and proof.
3. Explore destinations, services, or sample itineraries.
4. Start a structured request proposal flow.
5. Submit destination, dates, group size, audience, budget, service needs, and urgency.
6. Receive a confirmation that sets expectations for a human DMC follow-up.

## Required Figma Frames

1. Desktop homepage, 1440px wide.
2. Mobile homepage, 390px wide.
3. Destination detail page.
4. Services/audience page with segmented tabs.
5. Request proposal multi-step flow.
6. CMS/admin dashboard concept.
7. Design system page with tokens, type, buttons, forms, cards, tabs, table rows, itinerary day cards, and status badges.

## Homepage Intent

Hero:

- Full-bleed Thailand image or video still.
- First viewport must say `Victory International` visibly, not just in the logo.
- Headline direction: `Thailand DMC for agencies, groups, and business events`.
- Support copy: local design, logistics, suppliers, guides, transfers, venues, and proposal-ready itineraries.
- Primary CTA: `Request proposal`.
- Secondary CTA: `Explore services`.
- No text card over the hero. Use strong readable overlay treatment.

Follow-up sections:

- Trust strip: Thailand-based team, response time, destination coverage, group logistics, partner support.
- Audience selector: Agencies, MICE, Incentives, Luxury, Groups.
- How Victory works: brief, design, operate, support.
- Destination expertise: Thailand map/list hybrid with operational notes.
- Signature experiences: culture, islands, food, wellness, adventure, events.
- Sample itinerary module: day-by-day preview with inclusions and CTA.
- Proof: testimonials, partner logos when available, certifications or responsible travel commitments.
- Sustainability and safety: responsible supplier network, emergency support, local community respect.
- Insights: curated articles, not generic blog clutter.
- Final CTA: short proposal prompt with WhatsApp/LINE/email paths.

## Destination Detail Intent

Destination detail pages should become sales tools, not template articles.

Required sections:

- Hero with destination name and buyer-relevant summary.
- Best for: MICE, luxury, families, incentives, island leisure, culture, adventure.
- Operating notes: airports, transfer times, best seasons, group-size fit, event suitability.
- Experience highlights with real Thailand content.
- Sample 3-day or 5-day itinerary.
- Recommended pairings with nearby destinations.
- Logistics and supplier confidence.
- FAQs.
- Sticky `Request proposal for this destination` CTA.

## Request Proposal Flow

Use a calm multi-step wizard, not a generic contact form.

Steps:

1. Trip profile: agency/corporate/leisure, destination interest, travel dates, flexibility.
2. Group details: travellers/delegates, rooms, accessibility, language needs.
3. Services needed: hotels, transfers, guides, venues, activities, restaurants, gala dinner, flights, visa support.
4. Experience style: culture, wellness, luxury, adventure, family, nightlife, food, CSR, team building.
5. Budget and urgency.
6. Contact and consent.

Confirmation page:

- Summarize the brief.
- Show expected response window.
- Offer WhatsApp/LINE follow-up.
- Tell the user a human DMC specialist will review before proposal delivery.

## CMS/Admin Intent

Admin should look operational, not decorative.

Core dashboard widgets:

- New enquiries.
- Leads by status.
- Draft proposals waiting for review.
- Destinations missing SEO/media fields.
- Recent CMS edits.
- Supplier records needing update.
- Agent-generated drafts requiring approval.

Core collections:

- Destinations
- Experiences
- Itineraries
- Suppliers
- Blog posts
- Testimonials
- FAQs
- Media assets
- Pages
- Enquiries
- Leads
- Proposal drafts

## Visual Direction

Positioning: premium operator confidence.

Keep:

- Image-rich Thailand atmosphere.
- Spacious travel imagery.
- Clear destination browsing.
- Warm human tone.

Replace:

- Bright template cyan dominance.
- Decorative script in critical UI.
- Generic cards with identical travel copy.
- Floating gimmicks, excessive shapes, and template blobs.
- Centered-only brochure layout.

Palette direction:

- Ivory: `#F7F3EA`
- Charcoal teak: `#182321`
- Deep green: `#173F35`
- Muted jade: `#6E9C87`
- Brass accent: `#B98B45`
- Warm clay: `#B66B4D`
- Soft sky/sea accent: `#A8D5DD`

Type direction:

- Editorial display serif for page titles and destination moments.
- Humanist sans for UI, forms, nav, and admin.
- Avoid using a decorative script for primary messaging.
- Current `Manrope` can remain as a bridge for UI if needed, but the Figma direction should feel more ownable.

Layout direction:

- Dense but calm for business buyers.
- Strong scan lines, real tabs, real filters, sticky CTAs, and comparison-friendly content.
- Cards only for repeated items or contained tools.
- Admin UI should use tables, status chips, filters, drawers, forms, and compact panels.

## Figma Make Prompt

Create a world-class product design for `Victory International`, a premium Thailand Destination Management Company.

This is not a travel blog and not a ThemeForest tourism template. Design it as a high-trust B2B DMC platform for travel agencies, corporate/MICE planners, incentive groups, luxury advisors, and internal operators. Victory designs and operates Thailand itineraries, transfers, guides, venues, events, activities, suppliers, and proposal-ready travel programs.

Ground the design in these facts:

- Current app routes are Home, About, Destinations, Destination Detail, Blog, Blog Detail, and Contact.
- Current app has strong Thailand imagery but weak conversion and template leftovers.
- Replace generic search with a structured `Request Proposal` flow.
- Make services clear: Travel Agencies, Corporate And MICE, Incentives, Luxury Leisure, Groups, Weddings, and Custom Thailand Itineraries.
- Build toward a CMS/admin future for destinations, experiences, itineraries, suppliers, media, enquiries, leads, and proposal drafts.
- Competitor patterns to learn from: EXO uses service segmentation and partner/enquiry paths; Asian Trails uses destination trails, responsible travel, technology, and agent tools; TCEB uses MICE support, event classification, smart search, event calendar, and sustainability.

Create these high-fidelity Figma frames:

1. Desktop homepage at 1440px.
2. Mobile homepage at 390px.
3. Destination detail page.
4. Services/audience page with tabs for Agencies, MICE, Incentives, Luxury, and Groups.
5. Multi-step Request Proposal flow.
6. CMS/admin dashboard concept.
7. Design system page with tokens and reusable components.

Homepage requirements:

- Full-bleed hero with real Thailand imagery, readable overlay, and no card around the hero text.
- First viewport must visibly feature the name `Victory International`.
- Hero headline: `Thailand DMC for agencies, groups, and business events`.
- Primary CTA: `Request proposal`.
- Secondary CTA: `Explore services`.
- Include a trust strip directly under the hero.
- Include audience selector cards/tabs, destination expertise, how Victory works, sample itinerary preview, proof/testimonials, responsible travel, insights, and final CTA.

Destination detail requirements:

- Destination hero with buyer-relevant summary.
- Include best-for tags, operating notes, airport/transfer facts, best season, group fit, sample itinerary, experience highlights, FAQs, and sticky proposal CTA.
- Use real Thailand destinations and avoid Maldives/Dubai/Switzerland placeholders.

Request Proposal requirements:

- Use a multi-step wizard with progress indicator.
- Capture trip profile, dates, destinations, group size, rooms, services, experience style, budget, urgency, contact details, and consent.
- Show a confirmation summary after submission.

CMS/admin requirements:

- Design a compact operational dashboard, not a marketing page.
- Show enquiry inbox, lead pipeline, proposal drafts, content quality, media/SEO gaps, supplier updates, and agent drafts awaiting review.
- Use tables, filters, status badges, drawers, tabs, and compact metrics.

Visual style:

- Premium, editorial, calm, Thailand-specific, operationally credible.
- Palette: ivory, charcoal teak, deep green, muted jade, brass, warm clay, and very sparing soft sky/sea blue.
- Typography: editorial serif for major titles, humanist sans for UI. Do not use decorative script for critical copy.
- Avoid purple gradients, generic SaaS blob backgrounds, emoji, bubbly cards, excessive rounded corners, stock-looking people images, and one-note color palettes.
- Use real travel photography, map/list hybrids, clean tabs, precise forms, and strong whitespace.

Deliver:

- Named frames.
- Auto-layout-ready sections.
- Reusable component set.
- Design tokens.
- Prototype connections for homepage to services, destination, and request proposal.
- Annotation notes explaining UX decisions and CMS/backend implications.

## Acceptance Criteria For The Design

- A B2B buyer can understand Victory's DMC offer in under 10 seconds.
- The design makes `Request proposal` the obvious next action.
- Public pages feel Thailand-specific and operational, not generic.
- Mobile navigation contains only real product paths.
- Destination pages are useful for SEO and sales.
- CMS/admin frames make the future full-stack product tangible.
- The design can be mapped to Payload CMS collections and operational tables later.

## Immediate Implementation Implications

- Remove unused public paths from the mobile menu.
- Remove public login/register UI until admin auth exists.
- Replace all active-route placeholders with Thailand DMC content.
- Replace generic booking search with request-proposal intake.
- Normalize content into a schema before installing a CMS.
- Preserve useful assets, but replace decorative template shapes with purposeful layout.
