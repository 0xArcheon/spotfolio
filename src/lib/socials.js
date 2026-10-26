import { Github, Linkedin, Mail } from "lucide-react";

export const resumeUrl =
  "https://drive.google.com/file/d/12m95GrVJA50KAvqwDIBf3nScnR249svv/view?usp=sharing";

export const email = "mailto:imamlan04@gmail.com";

// `icon` is a lucide component; `img` is a monochrome asset in /public
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
    img: "/letterboxd.svg",
    link: "https://letterboxd.com/imamlan03",
  },
];

export function SocialIcon({ social, size = 18 }) {
  const Icon = social.icon;
  if (Icon) return <Icon size={size} />;
  return (
    <img
      src={social.img}
      alt=""
      width={size}
      height={size}
      className="opacity-70 invert transition-opacity group-hover:opacity-100"
    />
  );
}

export function linkTarget(link) {
  return link.startsWith("mailto")
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" };
}
