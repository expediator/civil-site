// ===================================================================
// ALL SITE CONTENT AND PRICING LIVES HERE.
// Edit this file to update text, prices, contact info, or services.
// ===================================================================

export const siteConfig = {
  // ─── Business Identity ──────────────────────────────────────────
  business: {
    name: "Plinth Civil Consultancy",
    tagline: "Built Right. From the Ground Up.",
    email: "250102005@HBTU.AC.IN",
    phone: "+91 94514 46690",
    whatsappNumber: "919451446690",
    whatsappMessage:
      "Hi! I found Plinth Civil Consultancy online and would like a free consultation for my project.",
    location: "Kanpur Nagar, Uttar Pradesh",
    serviceArea: "Kanpur Nagar, UP",
    founder: {
      name: "Akshansh Yadav",
      title: "Founder & Principal Consultant",
      education: "B.Tech Civil Engineering",
      university: "Harcourt Butler Technical University (HBTU), Kanpur",
      initials: "AY",
    },
    social: {
      linkedin: "https://linkedin.com/in/akshansh-yadav-554926304",
      github: "https://github.com/expediator",
      instagram: "",
    },
  },

  // ─── SEO ────────────────────────────────────────────────────────
  seo: {
    title: "Plinth Civil Consultancy | Site Consultation & Planning – Kanpur",
    description:
      "Professional civil engineering consultation for residential construction in Kanpur Nagar. Site visits, layout planning, architectural drawings, and material estimation.",
    keywords:
      "civil engineering consultant Kanpur, site consultation Kanpur, architectural drawings Kanpur, material estimation UP, site supervision Kanpur Nagar",
    ogTitle: "Plinth Civil Consultancy — Civil Engineering Consultants, Kanpur",
    ogDescription:
      "Practical civil engineering consultation for home construction and site projects in Kanpur Nagar.",
  },

  // ─── Google Analytics ───────────────────────────────────────────
  ga: {
    measurementId: "",
  },

  // ─── Web3Forms ──────────────────────────────────────────────────
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

  // ─── Hero Section ───────────────────────────────────────────────
  hero: {
    badge: "Civil Engineering Consultancy · Kanpur Nagar",
    locationBadge: "Kanpur Nagar, Uttar Pradesh",
    description:
      "Expert site consultation, layout planning, architectural drawings, and material estimation for your home construction project — practical civil engineering knowledge, honestly delivered.",
    ctaText: "Get a Free Consultation",
    ctaLink: "#contact",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  // ─── About Section ──────────────────────────────────────────────
  about: {
    heading: "About Plinth Civil Consultancy",
    subheading: "Practical civil engineering expertise for Kanpur's homebuilders",
    firm: {
      description: [
        "Plinth Civil Consultancy was founded to bring technical civil engineering knowledge directly to homeowners and site managers across Kanpur Nagar — without the cost or complexity of large commercial firms.",
        "We focus on residential and small-scale construction where clear advice, accurate planning, and honest assessment make the most difference. Every project receives the same rigorous attention, whether it is a 1,000 sq ft plot or a multi-floor build.",
        "Our approach is straightforward: assess your site thoroughly, plan it carefully, document it clearly, and tell you exactly what we can deliver and what falls outside our scope.",
      ],
      credentialNote:
        "We are not a licensed structural design firm. For stamped structural designs or statutory approvals, we will always tell you when you need a registered professional. For everything else — site consultation, layout planning, drawings, estimation, and supervision — we bring genuine engineering value.",
    },
    founder: {
      name: "Akshansh Yadav",
      title: "Founder & Principal Consultant",
      education: "B.Tech Civil Engineering",
      university: "Harcourt Butler Technical University (HBTU), Kanpur",
      bio: "Akshansh founded Plinth Civil Consultancy to translate formal engineering training into practical, affordable consultation for families building in the Kanpur region. He has assisted on real construction projects — from satellite plot analysis to architectural layout planning and material estimation — bringing both classroom knowledge and ground-level experience to every engagement.",
    },
    stats: [
      { label: "Base", value: "Kanpur" },
      { label: "Focus", value: "Residential" },
      { label: "Approach", value: "Hands-On" },
      { label: "First Call", value: "Free" },
    ],
    competencies: [
      "Surveying & Site Analysis",
      "Geotechnical Assessment",
      "Building Materials & Construction",
      "Strength of Materials",
      "Structural Analysis",
      "Architectural Drawing",
      "Environmental Engineering",
      "Material Estimation",
    ],
  },

  // ─── Services Section ────────────────────────────────────────────
  services: {
    heading: "Services",
    subheading: "Practical civil engineering support for your construction project",
    items: [
      {
        id: "consultation",
        icon: "Phone",
        title: "Site Consultation",
        description:
          "Call, WhatsApp, or in-person — get expert advice on layout, materials, construction process, or any technical question about your project.",
      },
      {
        id: "satellite",
        icon: "Satellite",
        title: "Satellite / Google Earth Analysis",
        description:
          "Detailed remote analysis of your plot using Google Earth and satellite tools — boundaries, topography, access routes, and surrounding features.",
      },
      {
        id: "layout",
        icon: "LayoutDashboard",
        title: "Basic Layout & Planning",
        description:
          "Site layout and room arrangement tailored to your plot dimensions, vastu preferences if needed, and practical construction requirements.",
      },
      {
        id: "drawings",
        icon: "Ruler",
        title: "Architectural Drawings",
        description:
          "Clear, readable floor plans and basic elevations — delivered digitally (PDF) or as printed hard copies. Easy to share with your contractor.",
      },
      {
        id: "estimation",
        icon: "Calculator",
        title: "Material Estimation",
        description:
          "Itemised material estimate — cement, sand, aggregate, bricks, steel — so you can budget your project with confidence and avoid surprises.",
      },
      {
        id: "supervision",
        icon: "HardHat",
        title: "Site Supervision",
        description:
          "Periodic on-site visits to check construction quality, workmanship, and material usage — keeping your project on track and on budget.",
      },
    ],
  },

  // ─── PRICING — 3 packages, advantages listed per package ─────────
  pricing: {
    heading: "Pricing",
    subheading: "Transparent packages. First consultation always free.",
    disclaimer:
      "Starting rates shown. Final pricing depends on plot size, project complexity, and scope. Get an exact quote after your free consultation.",
    ctaText: "Get Custom Quote",
    ctaLink: "#contact",
    items: [
      {
        service: "Initial Consultation",
        startingAt: 0,
        unit: "first session",
        highlight: false,
        advantages: [
          "30–60 min call or WhatsApp chat",
          "Full project scope review",
          "Honest advice on what you need",
          "No commitment, completely free",
        ],
      },
      {
        service: "Site Analysis & Planning",
        startingAt: 2000,
        unit: "starting rate",
        highlight: true,
        advantages: [
          "Satellite / Google Earth analysis",
          "Basic layout plan (PDF, soft copy)",
          "Itemised material estimation report",
          "Written site summary & notes",
          "WhatsApp follow-up support",
        ],
      },
      {
        service: "Full Service Package",
        startingAt: 5000,
        unit: "starting rate",
        highlight: false,
        advantages: [
          "In-person site visit (Kanpur Nagar)",
          "Architectural drawings — plans & elevations",
          "Detailed material & cost breakdown",
          "Hard copy set delivered within Kanpur",
          "Site supervision — up to 3 visits",
        ],
      },
    ],
  },

  // ─── Past Work / Projects ────────────────────────────────────────
  projects: {
    heading: "Past Work",
    subheading: "Real projects, real experience",
    items: [
      {
        id: 1,
        title: "Residential Layout Planning",
        location: "Kanpur Nagar, UP",
        description:
          "Basic layout and room arrangement for a family residence — 1,200 sq ft plot, optimised for ventilation and practical flow.",
      },
      {
        id: 2,
        title: "Satellite Site Analysis",
        location: "Unnao, UP",
        description:
          "Remote plot analysis using Google Earth — boundary identification, access route mapping, and topography notes.",
      },
      {
        id: 3,
        title: "Material Estimation Report",
        location: "Kanpur, UP",
        description:
          "Detailed material estimate for a 2-floor home construction — itemised quantities and cost breakdown for cement, steel, and bricks.",
      },
    ],
  },

  // ─── Process ─────────────────────────────────────────────────────
  process: {
    heading: "How We Work Together",
    subheading: "Simple, transparent, practical — from first call to final delivery",
    steps: [
      {
        number: "01",
        icon: "MessageSquare",
        title: "Free Consultation",
        description:
          "Tell us about your project via WhatsApp, call, or the form below. No cost, no commitment — just a conversation.",
      },
      {
        number: "02",
        icon: "Globe",
        title: "Site & Satellite Analysis",
        description:
          "We assess your site — in-person for Kanpur projects, or via satellite and Google Earth tools for remote locations.",
      },
      {
        number: "03",
        icon: "FileText",
        title: "Plan & Estimate",
        description:
          "We prepare your layout plan, architectural drawings, or material estimate based on your specific needs and plot details.",
      },
      {
        number: "04",
        icon: "CheckCircle",
        title: "Delivery & Supervision",
        description:
          "Deliverables sent digitally or as printed hard copy. Ongoing supervision available per visit if required.",
      },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────────────
  testimonials: {
    heading: "What Clients Say",
    subheading: "Feedback from real projects",
    items: [
      {
        id: 1,
        name: "Ramesh Kumar",
        location: "Kanpur Nagar",
        role: "Homeowner",
        rating: 5,
        quote:
          "Akshansh helped us plan the layout for our house. Very practical suggestions — saved us space and money. Highly recommended for anyone building in Kanpur.",
      },
      {
        id: 2,
        name: "Priya Sharma",
        location: "Unnao, UP",
        role: "Property Owner",
        rating: 5,
        quote:
          "The satellite site analysis was surprisingly detailed. We got clear notes on boundaries and access routes before even visiting the site. Very helpful.",
      },
      {
        id: 3,
        name: "Suresh Yadav",
        location: "Fatehpur, UP",
        role: "Construction Client",
        rating: 5,
        quote:
          "The material estimation report was well-organised and accurate. Helped us budget better and avoid over-purchasing. Will definitely use again.",
      },
    ],
  },

  // ─── Contact Section ─────────────────────────────────────────────
  contact: {
    heading: "Get in Touch",
    subheading: "First consultation is free — no commitment required",
    description:
      "WhatsApp or calling works fastest. Fill the form if you prefer a written record of your enquiry.",
    services: [
      "Site Consultation (Call/Chat)",
      "Site Visit + Consultation",
      "Satellite / Google Earth Analysis",
      "Basic Layout Plan",
      "Architectural Drawing",
      "Material Estimation Report",
      "Site Supervision",
      "Multiple Services / Bundle",
      "Other / Not Sure Yet",
    ],
  },
};
