const destinations = [
  {
    slug: "bangkok",
    name: "Bangkok",
    region: "Central Thailand",
    regionKey: "central",
    image: "/assets/img/gallery/gallery_4_3.jpg",
    imageAlt: "Long-tail boat crossing Bangkok's Chao Phraya River",
    summary: "Thailand's energetic gateway for culture, dining, meetings, and high-impact group programs.",
    bestFor: ["MICE and events", "Culinary programs", "First-time Thailand"],
    facts: {
      bestTime: "Year-round; November to February is cooler",
      idealStay: "2 to 4 nights",
      access: "Suvarnabhumi and Don Mueang airports",
    },
    intro: [
      "Bangkok combines major venues and international connectivity with neighbourhood-level experiences that feel distinctly Thai. It works equally well as a first arrival point, a standalone city program, or the anchor for a multi-region itinerary.",
      "Victory coordinates airport services, transport, hotels, dining, guides, venues, and timed cultural experiences as one joined-up ground program.",
    ],
    experiences: [
      "Private river journeys and temple programs",
      "Street-food, market, and chef-led dining experiences",
      "Meeting, incentive, and gala-event logistics",
      "Creative neighbourhood and contemporary culture routes",
    ],
    gallery: [
      "/assets/img/gallery/gallery_4_3.jpg",
      "/assets/img/hero/hero_bg3.avif",
      "/assets/img/normal/about2.avif",
    ],
  },
  {
    slug: "chiang-mai-north",
    name: "Chiang Mai & the North",
    region: "Northern Thailand",
    regionKey: "north",
    image: "/assets/img/gallery/gallery_4_4.jpg",
    imageAlt: "A mountain road crossing the green landscape of northern Thailand",
    summary: "Heritage, mountain landscapes, craft traditions, and slower-paced programs with depth.",
    bestFor: ["Culture and craft", "Soft adventure", "Incentive travel"],
    facts: {
      bestTime: "November to February for cooler weather",
      idealStay: "3 to 5 nights",
      access: "Chiang Mai International Airport",
    },
    intro: [
      "Northern Thailand offers a calmer counterpoint to Bangkok, with historic neighbourhoods, mountain scenery, distinctive food, and strong craft traditions.",
      "Programs can balance cultural interpretation, active days, considered community visits, and memorable private settings without feeling over-scheduled.",
    ],
    experiences: [
      "Old-city temples and Lanna heritage",
      "Craft workshops and artisan-led visits",
      "Mountain viewpoints and soft-adventure days",
      "Northern dining and private group settings",
    ],
    gallery: [
      "/assets/img/gallery/gallery_4_4.jpg",
      "/assets/img/normal/about1.avif",
      "/assets/img/normal/about3.png",
    ],
  },
  {
    slug: "ayutthaya",
    name: "Ayutthaya",
    region: "Central Thailand",
    regionKey: "central",
    image: "/assets/img/destination/destination_1_4.jpg",
    imageAlt: "Historic temple ruins in Ayutthaya",
    summary: "A former royal capital that adds history, architecture, and river experiences to a Bangkok stay.",
    bestFor: ["Heritage", "Day programs", "Private groups"],
    facts: {
      bestTime: "November to February for comfortable touring",
      idealStay: "Day trip or 1 night",
      access: "Road or rail from Bangkok",
    },
    intro: [
      "Ayutthaya is an easy way to add historical perspective to a Bangkok program. Temple ruins, riverside communities, and former royal sites create a strong narrative for both first-time and returning visitors.",
      "Victory can shape it as a focused day journey, an overnight extension, or part of a route north toward Chiang Mai.",
    ],
    experiences: [
      "Guided UNESCO historic-park visits",
      "River approaches and private dining",
      "Local market and food stops",
      "Bang Pa-In and wider central-region extensions",
    ],
    gallery: [
      "/assets/img/destination/destination_1_4.jpg",
      "/assets/img/hero/hero_bg3.avif",
      "/assets/img/normal/about2.avif",
    ],
  },
  {
    slug: "pattaya-east",
    name: "Pattaya & the East",
    region: "Eastern Seaboard",
    regionKey: "east",
    image: "/assets/img/gallery/gallery_4_1.jpg",
    imageAlt: "Landscaped Thai gardens at Nong Nooch near Pattaya",
    summary: "Accessible coastal venues, gardens, islands, and flexible programs close to Bangkok.",
    bestFor: ["Large groups", "MICE programs", "Coastal extensions"],
    facts: {
      bestTime: "November to February for drier conditions",
      idealStay: "2 to 3 nights",
      access: "Road from Bangkok and U-Tapao airport",
    },
    intro: [
      "Pattaya and the eastern seaboard combine substantial hotel and event capacity with easy access to gardens, coastal activities, and nearby islands.",
      "The region suits groups that need operational flexibility while still offering varied off-site experiences and relaxed extensions.",
    ],
    experiences: [
      "Nong Nooch gardens and cultural programming",
      "Island and coastal days",
      "Large-group dining and event venues",
      "Eastern-seaboard industrial and business visits",
    ],
    gallery: [
      "/assets/img/gallery/gallery_4_1.jpg",
      "/assets/img/blog/blog_hero.avif",
      "/assets/img/gallery/gallery_4_2.jpg",
    ],
  },
  {
    slug: "krabi-railay",
    name: "Krabi & Railay",
    region: "Andaman Coast",
    regionKey: "andaman",
    image: "/assets/img/destination/destination_1_2.jpg",
    imageAlt: "Aerial view of Railay's beach and limestone cliffs in Krabi",
    summary: "Limestone landscapes, island access, and active coastal programs with a relaxed base.",
    bestFor: ["Nature", "Soft adventure", "Beach stays"],
    facts: {
      bestTime: "November to April for typical Andaman conditions",
      idealStay: "3 to 5 nights",
      access: "Krabi International Airport",
    },
    intro: [
      "Krabi is defined by dramatic limestone scenery, clear-water island routes, and a calmer pace than Thailand's largest resort centres.",
      "It is well suited to groups that want active options, strong scenery, and enough flexibility for private beach or boat-led experiences.",
    ],
    experiences: [
      "Railay and limestone-coast exploration",
      "Private island and snorkelling routes",
      "Kayaking and soft-adventure programs",
      "Beach dinners and relaxed group time",
    ],
    gallery: [
      "/assets/img/destination/destination_1_2.jpg",
      "/assets/img/gallery/gallery_4_5.jpg",
      "/assets/img/destination/destination_1_1.jpg",
    ],
  },
  {
    slug: "phuket-phi-phi",
    name: "Phuket & Phi Phi",
    region: "Andaman Coast",
    regionKey: "andaman",
    image: "/assets/img/destination/destination_1_3.jpg",
    imageAlt: "Long-tail boats among the limestone cliffs of the Phi Phi islands",
    summary: "Resort choice, direct access, island programs, and polished settings for groups and celebrations.",
    bestFor: ["Incentive groups", "Weddings", "Island programs"],
    facts: {
      bestTime: "November to April for typical Andaman conditions",
      idealStay: "3 to 6 nights",
      access: "Phuket International Airport",
    },
    intro: [
      "Phuket offers Thailand's broadest resort and venue choice on the Andaman coast, with straightforward air access and a deep supplier network.",
      "Victory combines the right base with carefully timed island days, dining, events, and transfers so the program feels seamless rather than packaged.",
    ],
    experiences: [
      "Private Phi Phi and Phang Nga Bay routes",
      "Old Phuket Town and local food experiences",
      "Destination weddings and private celebrations",
      "Resort-based incentives and off-site events",
    ],
    gallery: [
      "/assets/img/destination/destination_1_3.jpg",
      "/assets/img/destination/destination_1_1.jpg",
      "/assets/img/destination/destination_1_2.jpg",
    ],
  },
  {
    slug: "samui-gulf-islands",
    name: "Samui & the Gulf Islands",
    region: "Gulf of Thailand",
    regionKey: "gulf",
    image: "/assets/img/destination/destination_1_5.jpg",
    imageAlt: "Turquoise water and a sandbar among the Gulf of Thailand islands",
    summary: "Island retreats, wellness, private celebrations, and unhurried leisure programs.",
    bestFor: ["Wellness", "Retreats", "Celebrations"],
    facts: {
      bestTime: "Seasonality differs from the Andaman coast; match dates to the brief",
      idealStay: "4 to 6 nights",
      access: "Samui Airport and mainland ferry gateways",
    },
    intro: [
      "Koh Samui and the Gulf islands work well for programs centred on privacy, wellness, villas, and a more settled island rhythm.",
      "Because Gulf weather patterns differ from the Andaman coast, Victory matches the island and travel window to the group's priorities before confirming the route.",
    ],
    experiences: [
      "Wellness and resort-led retreats",
      "Private island and marine programs",
      "Villa events and destination celebrations",
      "Koh Tao and Ang Thong extensions",
    ],
    gallery: [
      "/assets/img/destination/destination_1_5.jpg",
      "/assets/img/gallery/gallery_4_2.jpg",
      "/assets/img/destination/destination_1_3.jpg",
    ],
  },
];

export const destinationRegions = [
  { key: "all", label: "All regions" },
  { key: "central", label: "Central" },
  { key: "north", label: "North" },
  { key: "east", label: "East" },
  { key: "andaman", label: "Andaman" },
  { key: "gulf", label: "Gulf islands" },
];

const legacyDestinationSlugs = {
  "1": "bangkok",
  "2": "chiang-mai-north",
  "3": "ayutthaya",
  "4": "pattaya-east",
  "5": "krabi-railay",
  "6": "phuket-phi-phi",
  "7": "samui-gulf-islands",
};

export const getDestination = (slug) => {
  const normalizedSlug = legacyDestinationSlugs[slug] || slug;
  return destinations.find((destination) => destination.slug === normalizedSlug);
};

export default destinations;
