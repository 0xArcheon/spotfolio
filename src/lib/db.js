import { url } from "inspector";

export const projects = [
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
      "Collaborated with Deloitte software consultants to design an efficient workflow for processing transport worker applications.",
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
  {
    projectId: "zenmanage",
    name: "ZenManage",
    description:
      "A web application for effectively managing contractual employees and ongoing projects under NIC Assam division, improving operational efficiency and streamlining workflows.",
    logo: {
      url: "/logos/zenmanage.png",
      alt: "Project Logo",
    },
    technologies: {
      language: [{ name: "Javascript", icon: "/js.svg" }],
      framework: [
        { name: "React JS", icon: "/react.png" },
        { name: "Node JS", icon: "/developer.png" },
        { name: "Express", icon: "/express.svg" },
      ],
      database: [{ name: "MongoDB", icon: "/mongodb.svg" }],
    },
    images: [
      {
        url: "/snaps/Zenmanage/Dash-Man.png",
        alt: "Main Dashboard",
      },
      {
        url: "/snaps/Zenmanage/Regform.png",
        alt: "Admin Dashboard Image",
      },
      {
        url: "/snaps/Zenmanage/Profile.png",
        alt: "Employee Profile Page",
      },
      {
        url: "/snaps/Zenmanage/Regform.png",
        alt: "Employee Registration Form",
      },
    ],
    link: {
      url: "#",
      text: "Demo available soon",
    },
    startYear: 2023,
    client: "NIC, Assam State Centre",
    engagement:
      'I joined NIC Assam as a Project Trainee in January 2023. During my six month tenure as an intern, I was assigned the project titled "Management of Outsourced Manpower" to build a web application for managing contractual employees and ongoing projects under NIC Assam division. I was a solo developer working on this project and was responsible for the entire design and development process. This application is still being used as an internal tool by my previous division at NIC, Assam',
    responsibilities: [
      "Designed and developed a comprehensive MERN stack application with role-based access control for administrators and project managers / HODs ",
      "Implemented RESTful API architecture using Node.js and Express, including secure JWT authentication and proper error handling for API endpoints",
      "Designed and implemented a microservices architecture pattern, separating concerns into discrete services (user management, project tracking, reporting, and notifications) with independent deployment pipelines and API gateways for enhanced system resilience",
    ],
  },
  {
    projectId: "vyse",
    name: "Vyse Marketplace",
    description:
      "Vyse is a peer-to-peer online marketplace for buying and selling any kind of products or services. Vyse makes it so easy to connect people to buy, sell or exchange used goods and services.",
    logo: {
      url: "/logos/vyse.png",
      alt: "Project Logo",
    },
    technologies: {
      language: [{ name: "Javascript", icon: "/js.svg" }],
      framework: [{ name: "React JS", icon: "/react.png" }],
      database: [{ name: "Firebase", icon: "/firebase.svg" }],
    },
    images: [
      {
        url: "/snaps/Vyse/home.png",
        alt: "Project Homepage",
      },
      {
        url: "/snaps/Vyse/home-featured.png",
        alt: "Featured section",
      },
      {
        url: "/snaps/Vyse/Listings.png",
        alt: "Product Listings",
      },
      {
        url: "/snaps/Vyse/product.png",
        alt: "Product page",
      },
    ],
    link: {
      url: "#",
      text: "Demo Deployemnt soon",
    },
    startYear: 2023,
    client: "Graded Personal Project",
    engagement:
      "Vyse is a personal project I built for my graded semester mini project. The project was built using React JS and Firebase. The project was built in a span of 3 weeks and was graded an A.",
    responsibilities: [
      "Designed and developed a full-featured online marketplace application using React.js and Firebase, implementing real-time updates for product listings and user interactions",
      "Implemented Firebase Authentication for secure user management with email verification and role-based access control",
      "Integrated Firebase Firestore for storing product photos",
    ],
  },
];
