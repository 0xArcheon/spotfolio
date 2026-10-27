"use client";
import PageHeader, { Dot } from "./PageHeader";
import ExpCard from "./ExpCard";
import ProjectSection from "./ProjectSection";
import IntroSection from "./IntroSection";
import { email, resumeUrl, socials, SocialIcon, linkTarget } from "@/lib/socials";

function MainCard() {
  return (
    <main className="panel panel-scroll">
      <PageHeader
        image="/this-new.JPEG"
        imageAlt="Amlan Saikia"
        round
        label="Profile"
        title="Amlan Saikia"
        meta={
          <>
            <span className="font-bold text-white">Software Developer</span>
            <Dot />
            <span>Guwahati, India</span>
          </>
        }
      >
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <a href={email} className="pill-green">
            Get in touch
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-outline h-12 px-8"
          >
            Resume
          </a>
          <div className="flex items-center gap-1">
            {socials
              .filter((social) => social.name !== "Email")
              .map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  aria-label={social.name}
                  title={social.name}
                  className="circle-btn group"
                  {...linkTarget(social.link)}
                >
                  <SocialIcon social={social} size={20} />
                </a>
              ))}
          </div>
        </div>

        <div className="space-y-10">
          <ExpCard />
          <ProjectSection />
          <IntroSection />
        </div>
      </PageHeader>
    </main>
  );
}

export default MainCard;
