"use client";
import React, { useState, useEffect } from "react";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";
import { Play } from "lucide-react";
import TechStack from "@/app/components/TechStack";
import CnGallery from "@/app/components/gallery/CnGallery";
import Integration from "@/app/components/Integration";
import BlurText from "@/app/components/text/BlurText";
import MetaCard from "@/app/components/MetaCard";
import PageHeader, { Dot } from "@/app/components/PageHeader";

export default function Page({ params }) {
  const [project, setProjects] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = React.use(params);

  useEffect(() => {
    if (!projectId) {
      setError("No project ID provided");
      setIsLoading(false);
      return;
    }
    const fetchProjectDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects/${projectId}`);
        if (!response.ok) throw new Error("Failed to fetch project details");
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
        setIsLoading(false);
      }
    };
    fetchProjectDetails();
  }, [projectId]);

  const hasLiveLink = project?.link?.url && project.link.url !== "#";

  return (
    <>
      <main className="panel panel-scroll">
        {isLoading ? (
          <div className="h-80 animate-pulse bg-gradient-to-b from-spotify-elevated to-spotify-black" />
        ) : error ? (
          <p className="p-6 text-spotify-negative">{error}</p>
        ) : (
          <PageHeader
            image={project.logo.url}
            imageAlt={project.logo.alt}
            label="Project"
            title={project.name}
            meta={
              <>
                <span className="font-bold text-white">{project.client}</span>
                <Dot />
                <span>{project.startYear}</span>
                {project.images.length > 0 && (
                  <>
                    <Dot />
                    <span>
                      {project.images.length} screenshot
                      {project.images.length === 1 ? "" : "s"}
                    </span>
                  </>
                )}
              </>
            }
          >
            <div className="mb-8 flex flex-wrap items-center gap-4">
              {hasLiveLink ? (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.link.text}: ${project.name}`}
                  className="play-fab h-14 w-14"
                >
                  <Play size={24} fill="currentColor" />
                </a>
              ) : (
                <span
                  aria-hidden="true"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-spotify-elevated text-spotify-border"
                >
                  <Play size={24} fill="currentColor" />
                </span>
              )}
              <span className="text-sm text-spotify-silver">
                {project.link.text}
              </span>
            </div>

            <div className="space-y-10">
              <BlurText
                text={project.description}
                delay={30}
                animateBy="words"
                direction="top"
                className="max-w-3xl text-base text-spotify-near-white"
              />

              <CnGallery images={project.images} />

              {project.engagement && (
                <section>
                  <h2 className="section-title mb-4">My Role</h2>
                  <div className="rounded-lg bg-spotify-surface p-6 transition-colors hover:bg-spotify-elevated">
                    <p className="max-w-3xl text-base text-spotify-near-white">
                      {project.engagement}
                    </p>
                  </div>
                </section>
              )}

              {project.responsibilities?.length > 0 && (
                <section>
                  <h2 className="section-title mb-4">Contributions</h2>
                  <ol>
                    {project.responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.06,
                          ease: easeOut,
                        }}
                        className="group grid grid-cols-[16px_minmax(0,1fr)] gap-4 rounded-md px-4 py-3 transition-colors hover:bg-white/10"
                      >
                        <span className="text-right text-base tabular-nums text-spotify-silver group-hover:text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm text-spotify-near-white group-hover:text-white">
                          {responsibility}
                        </p>
                      </motion.li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </PageHeader>
        )}
      </main>

      <aside className="panel panel-scroll space-y-8 p-4">
        {project && (
          <>
            <MetaCard
              client={project.client}
              startYear={project.startYear}
              link={project.link}
              name={project.name}
            />
            {project.technologies && (
              <TechStack
                framework={project.technologies.framework}
                language={project.technologies.language}
                database={project.technologies.database}
              />
            )}
            {project.integrations && <Integration data={project.integrations} />}
          </>
        )}
      </aside>
    </>
  );
}
