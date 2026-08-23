// ===================================================================
// ALL SITE CONTENT AND PRICING LIVES HERE.
// Edit this file to update text, prices, contact info, or services.
// No need to touch any component or layout file for copy/price changes.
// ===================================================================

export const siteConfig = {
  // ─── Business Identity ──────────────────────────────────────────
  business: {
    name: "Akshansh Yadav",
    tagline: "Civil Engineering Student & Hands-On Site Consultant",
    email: "akshanshyadav26220.dpskln@gmail.com",
    phone: "+91 94514 46690",
    // For WhatsApp: country code (91) + number, no spaces, no +
    whatsappNumber: "919451446690",
    whatsappMessage:
      "Hi Akshansh! I found your website and would like a free consultation for my project.",
    location: "Kanpur Nagar, Uttar Pradesh",
    serviceArea: "Kanpur Nagar & nearby districts (Unnao, Fatehpur, Rae Bareli, Etawah)",
    education: "B.Tech Civil Engineering",
    university: "Harcourt Butler Technical University (HBTU), Kanpur",
    semester: "3rd Semester",
    social: {
      linkedin: "https://linkedin.com/in/akshansh-yadav-554926304",
      github: "https://github.com/expediator",
      instagram: "", // add Instagram URL here when ready
    },
  },

  // ─── SEO ────────────────────────────────────────────────────────
  seo: {
    title: "Akshansh Yadav | Civil Engineering Consultant – Kanpur",
    description:
      "Site consultation, architectural drawings, material estimation & site supervision in Kanpur Nagar, UP. B.Tech Civil Engineering student at HBTU Kanpur with hands-on construction experience.",
    keywords:
      "civil engineering consultant Kanpur, site consultation Kanpur, architectural drawings Kanpur, material estimation UP, site supervision Kanpur Nagar, HBTU civil engineering",
    ogTitle: "Akshansh Yadav — Civil Engineering Consultant, Kanpur",
    ogDescription:
      "Practical civil engineering consultation for home construction and site projects in Kanpur Nagar & nearby districts.",
  },

  // ─── Google Analytics ───────────────────────────────────────────
  // Paste your GA4 Measurement ID here to activate (e.g. "G-XXXXXXXXXX")
  // Leave empty string "" to keep GA disabled
  ga: {
    measurementId: "",
  },

  // ─── Web3Forms ──────────────────────────────────────────────────
  // Get your free access key at https://web3forms.com
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

  // ─── Hero Section ───────────────────────────────────────────────
  hero: {
    badge: "B.Tech Civil Engineering · HBTU Kanpur · 3rd Semester",
    locationBadge: "Kanpur Nagar, Uttar Pradesh",
    description:
      "Practical site advice, layout planning, architectural drawings, and material estimation for your home construction project — serving Kanpur Nagar and nearby districts with technical knowledge and honest guidance.",
    ctaText: "Get a Free Consultation",
    ctaLink: "#contact",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  // ─── About Section ──────────────────────────────────────────────
  about: {
    heading: "About Me",
    subheading: "Technical knowledge meets real-world experience",
    bio: [
      "I'm a 3rd-semester B.Tech Civil Engineering student at Harcourt Butler Technical University (HBTU), Kanpur — one of the oldest and most respected technical institutions in Uttar Pradesh.",
      "Beyond the classroom, I've assisted on real house-construction projects for family and relatives in and around Kanpur — from architectural layout planning to satellite and Google Earth site analysis. I understand the ground realities of construction in our region.",
      "I'm not yet a licensed or chartered engineer — for stamped structural designs or statutory approvals, I'll always be upfront about when you need a registered professional. But for site consultation, layout planning, material estimation, satellite analysis, and ongoing site supervision, I bring genuine value to your project.",
    ],
    credentialNote:
      "Honest expertise, transparently delivered — I tell you exactly what I can do and what you'll need someone else for.",
    stats: [
      { label: "Semester", value: "3rd Sem" },
      { label: "University", value: "HBTU Kanpur" },
      { label: "Service Area", value: "Kanpur Nagar" },
      { label: "Experience", value: "Real Projects" },
    ],
    coursework: [
      "Surveying",
      "Geotechnical Engineering",
      "Building Materials & Construction",
      "Fluid Mechanics",
      "Strength of Materials",
      "Structural Analysis",
      "Environmental Engineering",
      "Transportation Engineering",
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
          "Itemized material estimate — cement, sand, aggregate, bricks, steel — so you can budget your project with confidence and avoid surprises.",
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

  // ─── PRICING — edit all numbers and labels here ─────────────────
  pricing: {
    heading: "Pricing",
    subheading: "Transparent, affordable starting rates",
    disclaimer:
      "All prices shown are starting rates. Final pricing depends on plot size, project complexity, travel distance, and deliverable scope. Get an exact quote after a free consultation — no hidden charges.",
    ctaText: "Get Custom Quote",
    ctaLink: "#contact",
    items: [
      {
        service: "Basic Consultation (Call / Chat)",
        startingAt: 200,
        unit: "per session",
        note: "30–60 min call or WhatsApp consultation",
        highlight: false,
      },
      {
        service: "Site Visit + Consultation",
        startingAt: 500,
        unit: "per visit",
        note: "In-person visit within Kanpur Nagar",
        highlight: true,
      },
      {
        service: "Satellite / Google Earth Analysis",
        startingAt: 300,
        unit: "per site",
        note: "Includes written notes & summary report",
        highlight: false,
      },
      {
        service: "Basic Layout Plan (Soft Copy)",
        startingAt: 1500,
        unit: "per plan",
        note: "PDF / DWG digital delivery",
        highlight: false,
      },
      {
        service: "Basic Layout Plan (+ Hard Copy Delivered)",
        startingAt: 2000,
        unit: "per plan",
        note: "Printed & delivered within Kanpur",
        highlight: false,
      },
      {
        service: "Architectural Drawing (Soft Copy)",
        startingAt: 3000,
        unit: "per set",
        note: "Floor plans + elevations, PDF format",
        highlight: false,
      },
      {
        service: "Architectural Drawing (+ Hard Copy Delivered)",
        startingAt: 3800,
        unit: "per set",
        note: "Printed set delivered within Kanpur",
        highlight: false,
      },
      {
        service: "Material Estimation Report",
        startingAt: 1000,
        unit: "per report",
        note: "Itemized material & cost breakdown",
        highlight: false,
      },
      {
        service: "Site Supervision",
        startingAt: 800,
        unit: "per visit",
        note: "On-site quality check + visit report",
        highlight: false,
      },
    ],
  },

  // ─── Growing Expertise ───────────────────────────────────────────
  expertise: {
    heading: "Growing Expertise",
    subheading:
      "Every semester adds more technical depth to the practical experience I already bring to your project",
    intro:
      "My formal engineering training at HBTU runs in parallel with the real-world work I already do. Here is the full specialisation arc:",
    phases: [
      {
        year: "Year 2",
        label: "Current",
        status: "current",
        description: "Core engineering fundamentals + hands-on lab work",
        subjects: [
          "Strength of Materials",
          "Fluid Mechanics",
          "Surveying",
          "Building Materials & Construction",
          "Geotechnical Engineering I",
          "Structural Analysis I",
          "Design of Concrete Structures I",
          "Environmental Engineering I",
          "Transportation Engineering I",
        ],
      },
      {
        year: "Year 3",
        label: "Upcoming",
        status: "upcoming",
        description: "Advanced structural & specialised engineering",
        subjects: [
          "Structural Analysis II",
          "Design of Concrete Structures II",
          "Geotechnical Engineering II",
          "Transportation Engineering II",
          "Environmental Engineering II",
          "Design of Steel Structures",
          "Engineering Hydrology",
          "Estimation & Construction Management",
          "Irrigation & Hydraulic Design",
          "Earthquake Resistant Design",
        ],
      },
      {
        year: "Year 4",
        label: "Final Year",
        status: "future",
        description: "Specialisation electives, industrial training & B.Tech major project",
        subjects: [
          "Specialised Electives",
          "Industrial Training (6 months)",
          "B.Tech Major Project",
        ],
      },
    ],
  },

  // ─── Past Work / Projects ────────────────────────────────────────
  // To add real photos: put images in /public/images/ and update
  // the imageFile field with the filename (e.g. "project-1.jpg")
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
        imageFile: "", // e.g. "project-layout.jpg"
      },
      {
        id: 2,
        title: "Satellite Site Analysis",
        location: "Unnao, UP",
        description:
          "Remote plot analysis using Google Earth — boundary identification, access route mapping, and topography notes.",
        imageFile: "",
      },
      {
        id: 3,
        title: "Material Estimation Report",
        location: "Kanpur, UP",
        description:
          "Detailed material estimate for a 2-floor home construction — itemised quantities and cost breakdown for cement, steel, and bricks.",
        imageFile: "",
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
          "Tell me about your project via WhatsApp, call, or the form below. No cost, no commitment — just a conversation.",
      },
      {
        number: "02",
        icon: "Globe",
        title: "Site & Satellite Analysis",
        description:
          "I assess your site — in-person for Kanpur projects, or via satellite and Google Earth tools for remote locations.",
      },
      {
        number: "03",
        icon: "FileText",
        title: "Plan & Estimate",
        description:
          "I prepare your layout plan, architectural drawings, or material estimate based on your specific needs and plot details.",
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
    subheading: "Free consultation — no commitment required",
    description:
      "WhatsApp or calling works fastest. Fill the form if you prefer a written record of your enquiry.",
    // These options appear in the "Service Interested In" dropdown
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
