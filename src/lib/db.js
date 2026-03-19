import { url } from "inspector";

export const projects = [
  {
    projectId: "pharmacy-billing",
    name: "HMS3 Pharmacy Module",
    description:
      "A full-stack pharmacy billing module within a Hospital Management System for GNRC Hospitals, handling medicine issuance for multiple patient types across 4 hospital units with integrations to doctor prescription and indoor indenting modules.",
    logo: {
      url: "/logos/gnrc-hms.png",
      alt: "Pharmacy Billing Module Logo",
    },
    technologies: {
      language: [
        { name: "Javascript", icon: "/js.svg" },
        { name: "PHP", icon: "/php.svg" },
      ],
      framework: [
        { name: "React JS", icon: "/react.png" },
        { name: "CodeIgniter 4", icon: "/ci.svg" },
      ],
      database: [{ name: "Oracle PL/SQL", icon: "/oracle.svg" }],
    },
    images: [
      {
        url: "/snaps/Pharmacy/hm3-pharmacy.png",
        alt: "Pharmacy Billing UI",
      },
    ],
    link: {
      url: "#",
      text: "internal",
    },
    startYear: 2025,
    client: "GNRC Hospitals",
    engagement:
      "As a Full-Stack Developer, I was responsible for the end-to-end development of the Pharmacy Billing Module — a key component of a large-scale Hospital Management System built for GNRC Hospitals, deployed across 4 hospital units. I designed and developed the React frontend and the CodeIgniter 4 API backend. The module is actively used across GNRC units to manage and record medicine issuance for outpatient, inpatient, external etc patients",
    responsibilities: [
      "Built a dynamic React/Next.js frontend that adapts billing flows based on patient type (OP, IP, External, Employee), with real-time auto-population of medicines from integrated prescription and indoor indenting modules",
      "Developed a RESTful API layer in CodeIgniter 4 that validates frontend requests and orchestrates stored procedure calls to the hospital database, maintaining a clean separation between the API and data layers",
      "Integrated the module with the Doctor Prescription and Indoor Indenting modules to automatically pre-fill prescribed and indented medicines, reducing manual entry and minimising billing errors",
      "Implemented multi-payment-type recording within the billing workflow and ensured consistent module behaviour across all 4 GNRC hospital units",
    ],
  },
  {
    projectId: "atwsss",
    name: "Motor Shramik",
    description:
      "A platform for Assam Goverment's initiative 'Assam Transport Workers' Social Security Scheme,2022'. The portal aims to streamline registration and social security services for 250,000 workers in the unorganized transport sector of Assam state.",
    logo: {
      url: "/logos/atwsss.png",
      alt: "Project Logo",
    },
    technologies: {
      language: [
        { name: "PHP", icon: "/php.svg" },
        { name: "Javascript", icon: "/js.svg" },
      ],
      framework: [{ name: "Laravel", icon: "/laravel.svg" }],
      database: [{ name: "PostgreSQL", icon: "/pgsql.png" }],
    },
    integrations: [
      {
        type: "Payment",
        value: "eGras",
        link: "https://assamegras.gov.in/",
      },
      { type: "SMS Gateway", value: "AMTRON", link: "http://amtron.in/" },
      { type: "Identity", value: "UIDAI", link: "https://uidai.gov.in/en/" },
      { type: "Other", value: "eShram", link: "https://eshram.gov.in/" },
    ],
    images: [
      {
        url: "/snaps/ATWSSS/Homepage.png",
        alt: "Home page",
      },
      {
        url: "/snaps/ATWSSS/Registration.png",
        alt: "Registration page",
      },
      {
        url: "/snaps/ATWSSS/Basic-details.png",
        alt: "Worker details",
      },
      {
        url: "/snaps/ATWSSS/Documents.png",
        alt: "Documents Upload page",
      },
    ],
    link: {
      url: "#",
      text: "Yet to be launched",
    },
    startYear: 2024,
    client: "Labour Welfare Department, Assam",
    engagement:
      "As a Software Developer at NIC Assam, I am actively involved in the end-to-end development of the web portal for the Assam Transport Workers' Social Security Scheme. My responsibilities span both frontend and backend development, with a focus on seamless integration of government services and APIs, including UIDAI Aadhaar, eShram, eGras, and others.",
    responsibilities: [
      "Converted Figma design mockups into responsive Laravel Blade views using semantic HTML, CSS, and JavaScript.",
      "Developed robust RESTful API controllers to manage complex data workflows for the registration and approval processes.",
      "Integrated secure and standards-compliant protocols with multiple government platforms, enabling data exchange with systems such as Aadhaar (UIDAI) and eShram.",
    ],
  },
  {
    projectId: "perfect",
    name: "Perfect CMS",
    description:
      "A modern, responsive website redesign along with a custom Content Management System (CMS) for Perfect Generator Technologies Pvt. Ltd. The project focused on enhancing user experience, improving content control, and streamlining marketing workflows through third-party integrations like Pabbly.",
    logo: {
      url: "/logos/perfect.png",
      alt: "Project Logo",
    },
    technologies: {
      language: [{ name: "Javascript", icon: "/js.svg" }],
      framework: [{ name: "NextJS", icon: "/nextjs.svg" }],
      database: [{ name: "PostgreSQL", icon: "/pgsql.png" }],
    },
    integrations: [
      {
        type: "Marketing",
        value: "Pabbly",
        link: "https://www.pabbly.com/",
      },
    ],
    images: [
      {
        url: "/snaps/Perfect/Hero.png",
        alt: "Home page",
      },
      {
        url: "/snaps/Perfect/Product.png",
        alt: "Product Page",
      },
      {
        url: "/snaps/Perfect/Dashboard.png",
        alt: "Admin Dashboard",
      },
      {
        url: "/snaps/Perfect/Blog.png",
        alt: "Blog Writer",
      },
    ],
    link: {
      url: "https://www.perfectgenerators.org/",
      text: "Visit Site",
    },
    startYear: 2025,
    client: "Perfect Generator Technologies Pvt. Ltd.",
    engagement:
      "Led the full-stack development effort for the client's digital revamp initiative. Worked closely with the client to understand business needs, plan technical architecture, and deliver a scalable CMS solution that supports dynamic content updates and marketing automation.",
    responsibilities: [
      "Designed and developed a custom CMS using Next.js and PostgreSQL to enable dynamic content management by non-technical staff.",
      "Built a responsive, SEO-friendly frontend with reusable components, optimizing load performance and accessibility.",
      "Developed a custom Blog writer to support clients content marketing efforts.",
      "Worked closely with the client to understand their product offerings and delivered a tailored method of showcasing, adding and updating their products",
      "Collaborated with the client to refine UI/UX and ensure alignment with brand identity and user goals.",
    ],
  },
];
