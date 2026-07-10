# GStack Autoplan: Victory DMC

Date: 2026-07-09
Repo: `AgamLabs/victory`
Working copy: `/Users/nandy/Documents/Victory DMC/victory`

## Plan Summary

Victory should become a premium Thailand DMC commerce and operations platform, not a prettier travel template. The current React app is a useful public-site base, but the winning wedge is an enquiry-to-proposal workflow backed by real Thailand destination content, a CMS, and operator tools.

Recommended direction: stabilize the existing site first, then migrate to a full-stack Next.js/Payload/Postgres architecture in vertical slices. Do not begin with a broad rewrite that delays visible product improvement.

## Current Signals

- The app is a Create React App frontend with React Router.
- The active site already has Thailand positioning, image assets, destinations, blog, about, and contact routes.
- A starter `src/cms/content.js` exists, but active content is split across hardcoded JSX, JSON files, and CMS-like constants.
- There is no backend, auth, real CMS admin, database, enquiry persistence, proposal workflow, or operations dashboard.
- Build passes, but it has unused import warnings and npm audit issues.
- Many inactive or semi-active template components still contain placeholder copy, non-Thailand destinations, real estate references, and old social links.

## User Challenges

### Challenge 1: "Full-stack CMS" is necessary, but not the first visible win

You want full-stack capabilities and CMS baked in. Correct. But the first shippable win should be the buyer journey and content contract, not installing a CMS into messy content. If the CMS arrives before the content model is clean, editors inherit the template sprawl.

Decision: do Sprint 1 cleanup and content schema first, then the CMS spike.

### Challenge 2: Do not let the CMS become the whole backend

A DMC app needs editorial content and operational state. Those are different domains. Destinations, blog posts, testimonials, and FAQs belong in CMS collections. Enquiries, lead status, proposal versions, suppliers, pricing notes, and audit logs belong in application tables with stricter workflow logic.

Decision: use one database, but separate CMS collections from operations tables.

### Challenge 3: Agentic itinerary generation must stay draft-only at first

Agents can create high leverage for DMC proposal drafting, but travel promises are high trust. Generated itineraries should cite source content and supplier records, then require human approval before sending to clients.

Decision: agent output is draft/reviewable until the product has enough evaluations and operator trust.

## Taste Decisions

### Choice 1: Payload vs Sanity/Strapi

Recommendation: Payload CMS embedded with Next.js.

Why: it keeps CMS configuration, app code, admin UI, and types close together. That suits a small team moving fast with Codex/GStack. Sanity is excellent for editorial teams, and Strapi is familiar, but both add more external surface area for this stage.

### Choice 2: Incremental migration vs greenfield rewrite

Recommendation: vertical-slice migration.

Start with the current CRA site, clean active routes, define content contracts, then create a Next.js/Payload proof of concept. Move one route and one workflow at a time.

### Choice 3: Public site vs operations dashboard first

Recommendation: public enquiry funnel first, operations dashboard second.

The fastest business value is better qualified inbound leads. The operations dashboard becomes powerful once real enquiries and content models exist.

### Choice 4: Design direction

Recommendation: premium operator confidence, not travel-blog maximalism.

The site should look stunning, but buyers of DMC services care about reliability, local access, speed, and proof. Use cinematic Thailand visuals, but pair them with dense, credible content: sample itineraries, support coverage, segment pages, supplier confidence, and clear proposal CTAs.

## Review Scores

| Area | Current | Target | Why |
|---|---:|---:|---|
| Product clarity | 5/10 | 9/10 | DMC value exists but is buried inside template sections. |
| Visual/design maturity | 6/10 | 9/10 | Strong assets, but needs a more ownable premium DMC system. |
| Engineering foundation | 4/10 | 9/10 | Static frontend only; no backend contracts yet. |
| CMS readiness | 3/10 | 9/10 | Starter content file exists, but content is not normalized. |
| Agent readiness | 2/10 | 8/10 | Needs structured data, citations, approval states, and evals. |
| Developer experience | 4/10 | 8/10 | CRA basics work; missing repo-specific docs, tests, architecture notes. |

## Cross-Phase Themes

- Content model before CMS: every phase points at the same prerequisite.
- Buyer trust before flashy features: "stunning" should mean credible and premium, not decorative.
- Separate public content from operations data.
- Make agent workflows explicit, cited, and approval-gated.
- Keep migration incremental so the current site remains usable.

## Recommended Architecture

```text
Public Web App (Next.js)
  |
  |-- CMS-rendered content
  |-- Enquiry and proposal forms
  |-- SEO pages and media
  |
App/API Layer
  |
  |-- Auth and roles
  |-- Enquiry API
  |-- Proposal draft API
  |-- Agent orchestration endpoints
  |
Data Layer (Postgres)
  |
  |-- CMS collections
  |-- Operational tables
  |-- Audit logs
  |
Workers / Integrations
  |
  |-- Email notifications
  |-- PDF proposal export
  |-- Media processing
  |-- Agent draft generation
```

## Core Product Loops

### Buyer Loop

1. Buyer lands on segment/destination page.
2. Buyer sees proof, sample itinerary, services, and local expertise.
3. Buyer submits a structured DMC brief.
4. System creates an enquiry and internal lead.
5. Sales/operator reviews an agent-assisted proposal draft.
6. Human sends polished proposal.

### Editor Loop

1. Editor creates or updates destination, experience, blog, FAQ, or testimonial content.
2. CMS validates required SEO/media fields.
3. Preview renders the page.
4. Editor publishes.
5. SEO agent proposes metadata and internal links for review.

### Operator Loop

1. Operator receives qualified lead.
2. Operator selects destinations, experiences, hotels, guides, transfers, and notes.
3. Itinerary agent drafts day-by-day proposal from approved records.
4. Operator edits, approves, exports PDF, and sends.
5. Lead status and proposal history are tracked.

## First Implementation Packet

### Objective

Clean and normalize the current public site so it can become the source material for CMS migration.

### Scope

- Fix build warnings.
- Remove active-route placeholder/template copy.
- Replace destination JSON with Thailand-focused destination data.
- Move active homepage/about/contact/footer/header content into structured modules.
- Add a repo-specific README section with local setup, build, known warnings, and roadmap link.
- Add smoke tests or a lightweight route verification script.

### Out of Scope

- Full Next.js migration.
- CMS installation.
- Database/auth.
- Agent itinerary generation.
- Deployment changes.

### Acceptance Criteria

- `npm run build` passes with no warnings.
- Active routes do not show real estate placeholder copy, non-Thailand default destinations, or dead social links.
- The content model for active routes is documented.
- A future CMS migration can map each active content block to a named collection/field.

### Verification

```bash
npm run build
npm test -- --watchAll=false
```

## Implementation Tasks

- [ ] P1: Remove unused `TestimonialOne` imports from active pages.
- [ ] P1: Audit active routes for placeholder copy and replace with Thailand DMC copy.
- [ ] P1: Replace `data-destination.json` with Thailand destination entries or hide unused entries from active routes.
- [ ] P1: Convert contact details in `GetInTouch.jsx` and footer components to read from the CMS content module.
- [ ] P1: Create a `src/content/` or `src/cms/` schema draft for homepage, destinations, blog, contact, testimonials, and footer.
- [ ] P2: Add route smoke tests for `/`, `/about`, `/destination/1`, `/blog`, `/blog/1`, and `/contact`.
- [ ] P2: Add a CMS migration design note covering Payload collections and operational tables.
- [ ] P2: Add an enquiry form specification with fields needed for agent-assisted proposals.
- [ ] P3: Decide whether to retire unused template route families: tours, guides, resorts, activities, services.

## Decision Audit Trail

| # | Decision | Classification | Rationale | Rejected |
|---|---|---|---|---|
| 1 | Stabilize current app before CMS install | User challenge | CMS on top of messy static content creates editor pain. | Immediate CMS install |
| 2 | Use Payload + Next.js for the full-stack target | Taste decision | Best fit for repo-native CMS and typed app integration. | Sanity/Strapi first |
| 3 | Split editorial CMS and operational tables | Architecture decision | DMC operations need workflow integrity beyond page content. | CMS-only backend |
| 4 | Keep agents approval-gated | Product safety | Travel proposals affect real client expectations and supplier promises. | Fully autonomous sending |
| 5 | Public enquiry funnel before internal dashboard | Product sequencing | Qualified inbound leads create fastest visible business value. | Admin dashboard first |

## Next GStack Loop

After Sprint 1 cleanup, run the next GStack loop:

1. `/gstack-plan-design-review` on the redesigned homepage and enquiry flow.
2. `/gstack-plan-eng-review` on the Next.js/Payload/Postgres migration plan.
3. `/gstack-review` on the cleanup branch.
4. `/gstack-qa` against localhost before shipping.
