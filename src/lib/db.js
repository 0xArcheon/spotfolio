import { url } from "inspector";

export const projects = [
  {
    projectId: "atwsss",
    name: "ATWSSS",
    description:
      "A web portal for Assam Goverments initiative 'Assam Transport Workers' Social Security Scheme,2022'. The portal aims to streamline registration and social security services for 250,000 workers in the unorganized transport sector of Assam state.",
    logo: {
      url: "logos/atwsss.png",
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
        type: "Payment Gateway",
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
      url: "",
      text: "Yet to be launched",
    },
    startYear: 2024,
    client: "Labour Welfare Department, Assam",
    engagement:
      "I am part of the development team at NIC Assam, working on building the web portal for the Assam Transport Workers' Social Security Scheme. My role involves working on both the frontend and backend of the portal, integrating with various APIs and government services like UIDAI Aadhar, eShram, eGras etc.",
    responsibilities: [
      "Collaborated with software consultants from Deloitte in designing a suitable workflow in processing worker applications.",
      "Transformed design mockups from Figma into laravel blade views using semantic HTML, CSS, and JavaScript.",
      "Implemented robust REST API controllers to handle complex data processing workflows involved in registration and approval of transport workers",
      "Implemented compliant integration protocols with multiple government digital platforms, facilitating secure data exchange with Aadhaar identity verification and eShram worker registration systems.",
    ],
  },
  {
    projectId: "zenmanage",
    name: "ZenManage",
    description:
      "A web application for effectively managing contractual employees and ongoing projects under NIC Assam division, improving operational efficiency and streamlining workflows.",
    logo: {
      url: "logos/zenmanage.png",
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
      url: "",
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
      url: "logos/vyse.png",
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
      url: "",
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
