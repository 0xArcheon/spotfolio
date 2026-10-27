import { Github, Linkedin, Mail } from "lucide-react";

export const resumeUrl =
  "https://drive.google.com/file/d/12m95GrVJA50KAvqwDIBf3nScnR249svv/view?usp=sharing";

export const email = "mailto:imamlan04@gmail.com";

// Letterboxd's three dots, drawn in lucide's outline style so it inherits
// the same colour and hover states as the other icons
function Letterboxd({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="5.5" cy="12" r="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18.5" cy="12" r="4" />
    </svg>
  );
}

export const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/amlan-js/",
  },
  { name: "Github", icon: Github, link: "https://github.com/0xArcheon" },
  { name: "Email", icon: Mail, link: email },
  {
    name: "Letterboxd",
    icon: Letterboxd,
    link: "https://letterboxd.com/imamlan03",
  },
];

export function SocialIcon({ social, size = 18 }) {
  const Icon = social.icon;
  return <Icon size={size} />;
}

export function linkTarget(link) {
  return link.startsWith("mailto")
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" };
}
