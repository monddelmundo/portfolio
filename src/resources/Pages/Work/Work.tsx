import React, { useMemo } from "react";
import LinkLogo from "./components/LinkLogo";
import WorkExperience from "./components/WorkExperience";

const Work = () => {
  const workExperiences = () => [
    {
      title: "Senior Software Engineer",
      details: "SPI Global Parañaque, Philippines - 2017 - Current",
      descriptions: [
        "Develops and maintains websites.",
        "Optimizes codes to reduce slowness of the page.",
        "Improves security of the clients' website.",
        "Produces documents or guidelines for different processes that could serve as SOP to the members of the team.",
        "Monitors workload of other team members to ensure client’s satisfaction.",
      ],
    },
    {
      title: "Software Engineer",
      details: "SPI Global Parañaque, Philippines - 2015 - 2017",
      descriptions: [
        "Developed and maintained websites.",
        "Provided code reviews in our team.",
      ],
    },
  ];

  const linkLogos = () => [
    {
      href: "https://github.com/monddelmundo",
      src: "/assets/logos/logo-github.svg",
    },
    {
      href: "https://www.linkedin.com/in/monddelmundo/",
      src: "/assets/logos/logo-linkedin.svg",
    },
    {
      href: "https://www.facebook.com/0.mond.8/",
      src: "/assets/logos/logo-facebook.svg",
    },
    {
      href: "mailto:edmond.delmundo@gmail.com",
      src: "/assets/logos/mail-open-outline.svg",
    },
  ];

  const memoizedWorkExperiences = useMemo(() => workExperiences(), []);
  const memoizedLinkLogos = useMemo(() => linkLogos(), []);

  return (
    <div className="work-container">
      <div className="work-two-column">
        <div className="work-column-left">
          <h2 className="page-title">Work Experiences</h2>
          {memoizedWorkExperiences &&
            memoizedWorkExperiences.map((workExperience, index) => (
              <WorkExperience key={index} experience={workExperience} />
            ))}
        </div>
        <div className="work-column-right">
          <div className="work-column-right-img">
            <img
              className="work-prof-pic"
              src="/assets/images/profPic-min.webp"
              alt=""
            />
          </div>
          <div className="work-column-right-icons">
            {memoizedLinkLogos &&
              memoizedLinkLogos.map((linkLogo, index) => (
                <LinkLogo key={index} href={linkLogo.href} src={linkLogo.src} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Work);
