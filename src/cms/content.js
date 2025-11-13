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
    contact: {
      phone: "+256 214 203 215",
      email: "info@victory.example",
      address: "Bangkok, Thailand",
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

  footer: {
    copyright: `© ${new Date().getFullYear()} Victory International. All rights reserved.`,
    showNewsletter: false,
    showTwitterIcon: false,
  },

  about: {
    breadcrumbTitle: "About Victory International",
    heading: "Thailand's Premier Destination Management Company",
    intro1:
      "What sets us apart is our focus on designing travel experiences that truly stand out. Whether you want to explore Thailand's rich culture, embark on thrilling adventures, or something in between, we tailor every itinerary to bring authenticity, excitement, and flawless execution to your trip.",
    intro2:
      "We understand that no two clients are the same. We avoid one-size-fits-all trips — because every traveller is different. We take the time to understand your needs and craft itineraries that truly matter. Choose Victory DMC — let's turn your travel plans into amazing experiences you'll never forget.",
    bullets: [
      {
        title: "Group Tours & Activities",
        text: "From corporate incentive programs to personalised leisure journeys or niche group tours, we handle every detail.",
        icon: "/assets/img/icon/about_1_1.svg",
      },
      {
        title: "Hassle-Free Corporate Trips",
        text: "We provide international travel agencies and corporations with innovative and reliable travel solutions in Thailand.",
        icon: "/assets/img/icon/about_1_2.svg",
      },
      {
        title: "Local Knowledge",
        text: "We leverage our extensive local knowledge and connections to create memorable experiences you'll remember for years to come.",
        icon: "/assets/img/icon/about_1_3.svg",
      },
    ],
    cta: {
      text: "Contact With Us",
      href: "/contact",
    },
    images: {
      main1: "/assets/img/normal/about1.avif",
      main2: "/assets/img/normal/about2.avif",
      main3: "/assets/img/normal/about3.png",
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
