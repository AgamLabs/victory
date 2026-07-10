# Victory DMC Full-Stack and CMS Roadmap

## Context

GStack has been installed from `https://github.com/garrytan/gstack` using `./setup --host codex`. The installer linked the generated `gstack-*` skills into `~/.codex/skills`; a Codex restart may be needed before they appear as first-class slash skills in the app. This roadmap applies the GStack planning model to the current repo: product framing, design critique, engineering review, DX review, explicit decisions, and small verified implementation loops.

Related design artifact: [Victory International Design Intent](victory-design-intent.md).

## Product North Star

Make Victory International feel like the operating system for premium Thailand destination management, not just a travel brochure.

The app should serve three audiences:

1. Travel agencies and corporate buyers who need fast, trustworthy DMC proposals.
2. Internal Victory operators who manage itineraries, suppliers, media, and enquiries.
3. Content editors who need to publish destination, blog, gallery, and package content without developer help.

## Current Repo Snapshot

- Frontend: Create React App with React Router and static assets.
- Content: mixed hardcoded JSX, local JSON files, and a starter `src/cms/content.js`.
- Backend: none.
- CMS: no admin UI or persisted content model yet.
- Forms: booking/contact-like UI exists, but submissions are local-only and do not persist.
- Data quality: several template leftovers remain, including non-Thailand destinations, lorem-style copy, Realar real estate references, Twitter links, and placeholder contact details.
- Visual foundation: strong image-heavy travel template with good raw material, but not yet a distinct premium DMC product experience.

## Recommended Target Architecture

### Application

- Next.js App Router with TypeScript for full-stack routes, SSR/ISR, image optimization, metadata, and API handlers.
- Keep the existing visual assets and page structure at first, but migrate route by route.
- Tailwind plus a restrained component layer only if the current CSS becomes a blocker; do not rewrite the design system on day one.

### CMS

- Payload CMS embedded in the app for a repo-native admin panel and strongly typed content collections.
- PostgreSQL as the source of truth.
- S3-compatible storage for media, such as Cloudflare R2, AWS S3, or Supabase Storage.
- Role-based access for admin, editor, sales, and operations users.

### Backend Modules

- Enquiry intake and lead management.
- Destination, experience, itinerary, supplier, hotel, transfer, guide, and blog content APIs.
- Itinerary builder with quote/proposal generation.
- Email workflows for enquiry confirmation and internal assignment.
- Audit logs for CMS and lead changes.

### Agentic Layer

- Content agent: converts raw destination knowledge into CMS-ready entries.
- Itinerary agent: drafts day-by-day proposals from destination, budget, traveller type, and dates.
- Supplier agent: checks supplier records, missing rates, seasonal constraints, and contact freshness.
- Sales agent: scores enquiries and drafts follow-up emails.
- SEO agent: creates metadata, internal links, FAQs, and schema markup.
- QA agent: runs route, accessibility, responsive, and visual regression checks.

## Core Data Model

### CMS Collections

- `Destinations`: Bangkok, Phuket, Chiang Mai, Krabi, Koh Samui, Pattaya, Hua Hin, Ayutthaya, Kanchanaburi, Chiang Rai.
- `Experiences`: cultural tours, MICE, incentives, luxury leisure, family travel, wellness, adventure, dining, nightlife, island hopping.
- `Itineraries`: reusable multi-day packages with day plans, inclusions, exclusions, seasonal notes, price bands, and target segment.
- `Suppliers`: hotels, guides, venues, transport providers, restaurants, activity operators.
- `BlogPosts`: travel articles with author, tags, SEO, hero media, related destinations.
- `Testimonials`: client quotes, source segment, logo/media, permission status.
- `MediaAssets`: alt text, rights status, destination tags, usage notes.
- `FAQs`: grouped by destination, visa, corporate travel, safety, transfers, payments.
- `Pages`: homepage, about, contact, destination landing, service pages.

### Operational Tables

- `Enquiries`: contact details, travel dates, group size, budget, interests, source, consent.
- `Leads`: status, owner, score, next follow-up, notes.
- `ProposalRequests`: structured version of an enquiry for itinerary generation.
- `GeneratedProposals`: agent draft, human-edited copy, version history, export status.
- `Users`: auth identity, role, permissions.
- `ActivityLogs`: admin and operator changes.

## Product Experience Upgrades

### Public Site

- Premium first viewport with Thailand-specific positioning, strong CTA, and proof points.
- Destination pages with real Thailand content, not generic tour template copy.
- Segment landing pages: Travel Agencies, Corporate and MICE, Luxury Leisure, Groups, Weddings, Incentives.
- Experience finder that routes users by trip type, traveller profile, season, and budget.
- Interactive itinerary preview: day cards, map highlights, inclusions, and enquiry CTA.
- Trust layer: client logos, testimonials, local licenses, emergency support, operating regions.
- SEO-rich destination and experience content with structured data.

### CMS/Admin

- Dashboard with pending enquiries, recent content edits, missing SEO fields, and draft proposals.
- Media library with required alt text and rights metadata.
- Destination editor with sections for hero, overview, best time to visit, highlights, logistics, FAQs, and related experiences.
- Itinerary editor with day-by-day builder, inclusions, pricing notes, and PDF/export readiness.
- Lead pipeline with status, assignment, notes, and follow-up reminders.

### Agentic Workflows

- "Generate itinerary draft" from lead requirements.
- "Improve this destination page" from a content quality checklist.
- "Create SEO pack" for title, meta description, FAQs, schema, and internal links.
- "Summarize enquiry" for sales team handoff.
- "Find missing CMS fields" before publishing.
- "Draft response email" using lead data and selected itinerary.

## Implementation Phases

### Phase 0: Stabilize the Current React App

Goal: make the existing app clean enough to migrate safely.

Tasks:

- Remove unused imports and fix current build warnings.
- Replace remaining template content in active routes.
- Centralize active public content into a single typed source.
- Hide or remove unused routes/components from navigation.
- Add basic route smoke tests for `/`, `/about`, `/destination/1`, `/blog`, `/blog/1`, and `/contact`.
- Add a content audit checklist for image alt text, placeholder copy, and stale social links.

Acceptance:

- `npm run build` passes with no warnings.
- Active routes have no obvious placeholder real estate/travel-template copy.
- Every active form has a clear planned submission path, even before backend persistence exists.

### Phase 1: Design the DMC Product Surface

Goal: make the website feel like a premium DMC platform.

Tasks:

- Rework homepage information architecture around DMC buyer intent.
- Add service/segment pages for agencies, MICE, groups, luxury leisure, and custom itineraries.
- Create real destination detail structure for Thailand destinations.
- Add a high-intent enquiry form with fields needed for proposal generation.
- Add stronger conversion points: plan a trip, request proposal, WhatsApp, LINE, email.

Acceptance:

- A buyer can understand what Victory does in under 10 seconds.
- A buyer can submit a useful DMC brief without back-and-forth.
- Destination pages support SEO and sales conversations.

### Phase 2: Introduce Full-Stack Foundation

Goal: move from static React to a full-stack app without losing the current brand work.

Tasks:

- Create a Next.js TypeScript app shell.
- Migrate public routes incrementally.
- Add PostgreSQL and ORM migrations.
- Add auth and role model.
- Add API routes for enquiries and content reads.
- Add environment validation and deployment configuration.

Acceptance:

- Public pages render from the new app.
- Enquiries persist in the database.
- Admin-only routes are protected.
- CI runs build, lint, typecheck, and tests.

### Phase 3: CMS Baked In

Goal: give non-developers full control of content.

Tasks:

- Install and configure Payload CMS.
- Define collections for destinations, experiences, itineraries, blog posts, testimonials, media, FAQs, and pages.
- Migrate `src/cms/content.js` and JSON data into seed scripts.
- Replace hardcoded content reads with CMS queries.
- Add preview/draft publishing workflow.

Acceptance:

- Editors can update homepage, destination, blog, and testimonial content through admin.
- Public pages use CMS content.
- Seed data can recreate the initial content in a fresh environment.

### Phase 4: DMC Operations

Goal: make the app useful internally, not just beautiful publicly.

Tasks:

- Lead pipeline dashboard.
- Enquiry assignment and status tracking.
- Supplier records with regions, services, contacts, rates, and quality notes.
- Itinerary builder and proposal versions.
- PDF proposal export.
- Email notifications for new enquiries and assigned leads.

Acceptance:

- An enquiry can become a lead, then a draft proposal, then a client-facing itinerary.
- Internal staff can track owner, status, and next action.
- Operators can manage suppliers and itinerary building blocks.

### Phase 5: Agentic Acceleration

Goal: use agents where they create leverage without bypassing human judgment.

Tasks:

- Add structured prompts and schemas for itinerary generation.
- Add content quality agent checks for CMS entries.
- Add SEO generation and review workflows.
- Add sales reply draft generation.
- Add human approval before external sends or publishing.
- Add evaluation fixtures for proposal quality, hallucination checks, and tone consistency.

Acceptance:

- Agents produce drafts, not unsupervised published content.
- Every generated proposal cites the CMS records it used.
- Sales/editor users can approve, edit, or reject agent output.

## Agentic Development Workflow

Each implementation slice should start with a small spec and end with verification.

### Agent Roles

- Product agent: defines user story, acceptance criteria, and tradeoffs.
- Design agent: proposes UX structure and responsive behavior.
- Frontend agent: implements UI and route behavior.
- Backend agent: implements schema, API, auth, and persistence.
- CMS agent: implements collections, admin fields, seeds, and previews.
- QA agent: runs tests, browser checks, accessibility checks, and regression notes.
- Security agent: reviews auth, permissions, input validation, and data exposure.

### Work Packet Template

Use this for each branch or Codex thread:

```md
## Objective

## User Story

## Scope

## Out of Scope

## Data/Schema Changes

## UI States

## Agent Assistance

## Acceptance Criteria

## Verification Commands
```

## First Three Build Sprints

### Sprint 1: Foundation Cleanup

- Fix existing build warnings.
- Remove active-route placeholder copy.
- Centralize active content into typed modules.
- Add route smoke tests.
- Write destination/content schema draft.

### Sprint 2: Buyer-Facing DMC Upgrade

- Rebuild homepage messaging and CTAs.
- Add high-intent enquiry form.
- Add Thailand destination detail content model.
- Add segment pages for agencies, MICE, luxury, groups, and custom travel.

### Sprint 3: Full-Stack/CMS Spike

- Create Next.js/Payload/Postgres proof of concept in a branch.
- Model destinations, blog posts, media, testimonials, enquiries.
- Persist enquiry submissions.
- Render one destination page from CMS data.
- Document migration path from CRA to Next.js.

## Near-Term Decisions Needed

- Confirm whether to migrate to Next.js or keep CRA and add a separate backend first.
- Confirm CMS preference: Payload, Strapi, Sanity, or another system.
- Confirm hosting target: Vercel, Render/Fly, AWS, or self-hosted.
- Confirm database target: Supabase Postgres, Neon, RDS, or local-managed Postgres.
- Confirm whether agents can use OpenAI APIs in production workflows.
- Provide exact GStack plugin URL or id if there is a private/non-catalog plugin to install.

## Immediate Next Step

Start with Sprint 1 in this repo. It is low risk, improves quality immediately, and creates the clean content contracts needed for the full-stack migration.
