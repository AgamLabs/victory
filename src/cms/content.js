/*
  Simple raw CMS-style content file
  - Centralizes text and image sources used across the site
  - Pure JS object, easy for non-devs to edit
  - Import with: import CMS from "../cms/content";

  Editing guidelines for content managers:
  1) Update text directly in the fields below.
  2) For images, put files under public/assets/img/... and reference with the web path, e.g. "/assets/img/normal/about1.avif".
  3) Do not remove keys; if something is not used, leave it or set to empty string.
*/

const CMS = {
  site: {
    name: "Victory International",
    logo: {
      primary: "/assets/img/logo_1.png",
      white: "/assets/img/logo-white.svg",
    },

  galleries: {
    galleryOne: [
      "/assets/img/gallery/gallery_1_1.jpg",
      "/assets/img/gallery/gallery_1_2.jpg",
      "/assets/img/gallery/gallery_1_3.jpg",
      "/assets/img/gallery/gallery_1_4.jpg",
      "/assets/img/gallery/gallery_1_5.jpg",
      "/assets/img/gallery/gallery_1_6.jpg",
      "/assets/img/gallery/gallery_1_7.jpg",
    ],
    galleryTwo: {
      bg: "/assets/img/bg/gallery_bg_1.jpg",
      items: [
        "/assets/img/gallery/gallery_2_1.jpg",
        "/assets/img/gallery/gallery_2_2.jpg",
        "/assets/img/gallery/gallery_2_3.jpg",
        "/assets/img/gallery/gallery_2_4.jpg",
        "/assets/img/gallery/gallery_2_5.jpg",
        "/assets/img/gallery/gallery_2_6.jpg",
      ],
    },
    galleryThree: [
      "/assets/img/gallery/gallery_3_1.jpg",
      "/assets/img/gallery/gallery_3_2.jpg",
      "/assets/img/gallery/gallery_3_3.jpg",
      "/assets/img/gallery/gallery_3_4.jpg",
      "/assets/img/gallery/gallery_3_5.jpg",
      "/assets/img/gallery/gallery_3_6.jpg",
    ],
    galleryEight: [
      "/assets/img/gallery/gallery_8_1.jpg",
      "/assets/img/gallery/gallery_8_2.jpg",
      "/assets/img/gallery/gallery_8_3.jpg",
      "/assets/img/gallery/gallery_8_4.jpg",
      "/assets/img/gallery/gallery_8_5.jpg",
      "/assets/img/gallery/gallery_8_6.jpg",
      "/assets/img/gallery/gallery_8_7.jpg",
      "/assets/img/gallery/gallery_8_8.jpg",
    ],
    galleryFourCarousel: [
      "/assets/img/gallery/gallery_4_1.jpg",
      "/assets/img/gallery/gallery_4_2.jpg",
      "/assets/img/gallery/gallery_4_3.jpg",
      "/assets/img/gallery/gallery_4_4.jpg",
      "/assets/img/gallery/gallery_4_5.jpg",
    ],
  },
    contact: {
      landline: "+66 2 120 4305",
      landlineHref: "tel:+6621204305",
      mobile: "+66 62 463 8671",
      mobileHref: "tel:+66624638671",
      email: "dinesh@victoryint.asia",
      emailHref: "mailto:dinesh@victoryint.asia",
      whatsappHref: "https://wa.me/66624638671",
      address: "1119, 2nd Floor, Soi Charoen Krung 43, Bang Rak, Bangkok 10500, Thailand",
    },
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/",
      whatsapp: "https://www.whatsapp.com/",
      instagram: "https://instagram.com/",
      // twitter intentionally omitted site-wide per PRD
    },
  },

  header: {
    heroText: {
      heading: "Thailand's Premier Destination Management Company",
      subheading: "Tailored experiences with local expertise",
    },
  },

  banners: {
    bannerOne: {
      featured: {
        image: "/assets/img/hero/hero_bg3.avif",
        imageAlt: "Thai temple reflected in a calm lake",
        eyebrow: "Bangkok-based destination management",
        title: "Thailand, planned with local confidence",
        summary:
          "Tailor-made journeys, reliable ground handling, and thoughtful local coordination for travel partners, groups, and special events.",
        primaryAction: {
          label: "Start a proposal",
          href: "/contact",
        },
        secondaryAction: {
          label: "Explore Thailand",
          href: "/destination",
        },
      },
      slides: [
        {
          img: "/assets/img/hero/hero_bg1.avif",
          subtitle: "Your Partner for Incredible Thailand Experiences",
          title: "Travel is Always Changing, We Keep You Moving Forward",
        },
        {
          img: "/assets/img/hero/hero_bg3.avif",
          subtitle: "Your Partner for Incredible Thailand Experiences",
          title: "With Local Expertise, Every Journey is Smoother",
        },
        {
          img: "/assets/img/hero/hero_bg3.avif",
          subtitle: "Your Partner for Incredible Thailand Experiences",
          title: "Discover Thailand's Hidden Gems & Cultural Treasures",
        },
      ],
    },
    bannerThree: {
      slides: [
        { img: "/assets/img/hero/hero_bg_3_1.jpg", title: "Discover The World with Our Guide" },
        { img: "/assets/img/hero/hero_bg_3_2.jpg", title: "Discover The World Best Destination" },
        { img: "/assets/img/hero/hero_bg_3_3.jpg", title: "Capture Wonder Of The World" },
        { img: "/assets/img/hero/hero_bg_3_4.jpg", title: "Explore the world with Victory International" },
      ],
      thumbs: [
        "/assets/img/hero/hero_bg_3_1.jpg",
        "/assets/img/hero/hero_bg_3_2.jpg",
        "/assets/img/hero/hero_bg_3_3.jpg",
        "/assets/img/hero/hero_bg_3_4.jpg",
        "/assets/img/hero/hero_bg_3_5.jpg",
      ],
      video: "/assets/img/hero/hero-video3.mp4",
    },
    bannerFour: {
      bg: "/assets/img/bg/hero_bg_4_1.png",
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Victory International. All rights reserved.`,
    showNewsletter: false,
    showTwitterIcon: false,
  },

  about: {
    breadcrumbTitle: "About Victory International",
    eyebrow: "Bangkok-based Thailand DMC",
    heading: "A local team for Thailand on the ground",
    intro1:
      "Victory International Group Co., Ltd. coordinates tailor-made journeys and operational services across Thailand for travel partners, groups, corporate planners, and private clients.",
    intro2:
      "We bring route knowledge, local supplier coordination, and one accountable point of contact together, so every program is practical to operate and considered for the people travelling.",
    principles: [
      {
        title: "Built around the brief",
        text: "Objectives, traveller profile, pace, and priorities shape the route from the start.",
      },
      {
        title: "Coordinated locally",
        text: "Transport, stays, guides, venues, and experiences are brought into one operating plan.",
      },
      {
        title: "Clear through delivery",
        text: "One Bangkok-based team keeps the details connected from proposal to arrival.",
      },
    ],
    cta: {
      text: "Start a conversation",
      href: "/contact",
    },
    capabilities: {
      eyebrow: "What we coordinate",
      heading: "One Thailand partner across the moving parts",
      intro:
        "Engage Victory for a focused service or a complete program. We shape the scope around what your team already has and where local coordination adds value.",
      items: [
        {
          title: "Transport and ground handling",
          text: "Airport movements, private vehicles, group logistics, and day-to-day operational coordination.",
        },
        {
          title: "Hotels and accommodation",
          text: "Property selection and reservations matched to location, group profile, and program flow.",
        },
        {
          title: "Tailor-made tours and guides",
          text: "Routes, local experiences, and guiding arranged around the interests and pace of each group.",
        },
        {
          title: "MICE, events, and incentives",
          text: "Venue, movement, activity, and guest coordination for meetings, events, and reward travel.",
        },
        {
          title: "Destination weddings",
          text: "Local planning support for guest logistics, stays, venues, and surrounding experiences.",
        },
        {
          title: "Special projects and line production",
          text: "Location-aware coordination for non-standard briefs that need practical support in Thailand.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      heading: "A practical path from first brief to arrival",
      intro:
        "Good programs are built by resolving the important questions early, then carrying the decisions through one connected plan.",
      steps: [
        {
          title: "Align the brief",
          text: "We clarify objectives, dates, group profile, budget context, and the non-negotiables.",
        },
        {
          title: "Shape the program",
          text: "We develop the route, service mix, supplier options, and operating logic for review.",
        },
        {
          title: "Coordinate delivery",
          text: "Confirmed details are brought together for clear communication and on-ground execution.",
        },
      ],
    },
    images: {
      main1: "/assets/img/normal/about1.avif",
      main2: "/assets/img/normal/about2.avif",
      main3: "/assets/img/normal/about3.png",
      process: "/assets/img/gallery/gallery_4_3.jpg",
      shapes: {
        s1: "/assets/img/shape/shape_2_1.png",
        s2: "/assets/img/shape/shape_2_2.png",
        s3: "/assets/img/shape/shape_2_3.png",
        s4: "/assets/img/shape/shape_2_4.png",
      },
    },
    testimonials: {
      showOnAbout: true,
      title: "What our clients say",
    },
  },

  blog: {
    details: {
      heroImage: "/assets/img/blog/blog_hero.avif", // can be changed back to a JPG if preferred
      showNeedHelpBanner: false,
      showCommentsList: false,
      showReplyForm: true,
    },
  },

  destination: {
    headerImage: "/assets/img/destination/destinations_header.avif",
    showSidebars: false, // per PRD: hide sidebars and keep main content
    backgrounds: {
      linePattern2: "/assets/img/bg/line-pattern2.png",
      linePattern3: "/assets/img/bg/line-pattern3.png",
    },
    shapes: {
      s2_1: "/assets/img/shape/shape_2_1.png",
      s2_2: "/assets/img/shape/shape_2_2.png",
      s2_3: "/assets/img/shape/shape_2_3.png",
      s2_4: "/assets/img/shape/shape_2_4.png",
    },
    lists: {
      popularList: [
        { id: 1, name: "Bangkok", listings: 45, image: "/assets/img/destination/destination_1_1.jpg" },
        { id: 2, name: "Chiang Mai", listings: 32, image: "/assets/img/destination/destination_1_2.jpg" },
        { id: 3, name: "Phuket", listings: 38, image: "/assets/img/destination/destination_1_3.jpg" },
        { id: 4, name: "Koh Samui", listings: 28, image: "/assets/img/destination/destination_1_4.jpg" },
        { id: 5, name: "Krabi", listings: 25, image: "/assets/img/destination/destination_1_5.jpg" },
      ],
      gridList: [
        { id: 1, name: "Dubai, UAE", image: "/assets/img/destination/destination_3_1.jpg" },
        { id: 2, name: "Japan", image: "/assets/img/destination/destination_3_2.jpg" },
        { id: 3, name: "Switzerland", image: "/assets/img/destination/destination_3_3.jpg" },
        { id: 4, name: "Brazil", image: "/assets/img/destination/destination_3_4.jpg" },
      ],
      featuredList: [
        { name: "Thailand", image: "destination_2_1.jpg", listings: 28 },
        { name: "Belgium", image: "destination_2_2.jpg", listings: 15 },
        { name: "Island", image: "destination_2_3.jpg", listings: 22 },
        { name: "Maldives", image: "destination_2_4.jpg", listings: 25 },
      ],
    },
    details: {
      innerImage: "/assets/img/destination/destination-inner-1.jpg",
      gallery6: [
        "/assets/img/gallery/gallery_6_1.jpg",
        "/assets/img/gallery/gallery_6_2.jpg",
        "/assets/img/gallery/gallery_6_3.jpg",
        "/assets/img/gallery/gallery_6_4.jpg",
      ],
      widgetBg: "/assets/img/bg/widget_bg_1.jpg",
    },
  },

  contact: {
    breadcrumbTitle: "Contact Us",
    showBookATour: false, // toggled off per changes
    map: {
      enabled: true,
    },
  },

  dmc: {
    titleArea: {
      subtitle: "Our DMC Network",
      title: "Trusted Destination Management Partners",
    },
    partners: [
      { name: "East Africa DMC", url: "#" },
      { name: "Europe DMC", url: "#" },
      { name: "Middle East DMC", url: "#" },
      { name: "South Asia DMC", url: "#" },
      { name: "Americas DMC", url: "#" },
      { name: "Oceania DMC", url: "#" },
    ],
    // Optional: map partner images if available
    images: {
      // example: eastAfrica: "/assets/img/dmc/east-africa.avif",
    },
  },

  images: {
    // A general filename map for non-developers
    // Update paths here and reference by key in components
    about: {
      a1: "/assets/img/normal/about1.avif",
      a2: "/assets/img/normal/about2.avif",
      a3: "/assets/img/normal/about3.png",
    },
    blog: {
      hero: "/assets/img/blog/blog_hero.avif",
    },
    destination: {
      header: "/assets/img/destination/destinations_header.avif",
    },
    logo: {
      primary: "/assets/img/logo_1.png",
    },
  },
};

export default CMS;
