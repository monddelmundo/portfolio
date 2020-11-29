import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-two-column">
        <div className="work-column-left">
          <h2 className="page-title">Work Experiences</h2>
          <div className="work-experience">
            <h4 className="text-work-highlight">Senior Software Engineer</h4>
            <h4 className="text-work-details">
              SPI Global Parañaque, Philippines - 2017 - Current
            </h4>
            <ul>
              <li className="work-description">
                Develops and maintains websites.
              </li>
              <li className="work-description">
                Optimizes codes to reduce slowness of the page.
              </li>
              <li className="work-description">
                Improves security of the clients' website.
              </li>
              <li className="work-description">
                Produces documents or guidelines for different processes that
                could serve as SOP to the members of the team.
              </li>
              <li className="work-description">
                Monitors workload of other team members to ensure client’s
                satisfaction.
              </li>
            </ul>
          </div>
          <div className="work-experience">
            <h4 className="text-work-highlight">Software Engineer</h4>
            <h4 className="text-work-details">
              SPI Global Parañaque, Philippines - 2015 - 2017
            </h4>
            <ul>
              <li className="work-description">
                Developed and maintained websites.
              </li>
              <li className="work-description">
                Provided code reviews in our team.
              </li>
            </ul>
          </div>
        </div>
        <div className="work-column-right">
          <div className="work-column-right-img">
            <img
              className="work-prof-pic"
              src="./assets/images/profPic-min.webp"
              alt=""
            />
          </div>
          <div className="work-column-right-icons">
            <a href="https://github.com/monddelmundo">
              <span className="span-links-logo">
                <img alt="" src="./assets/logos/logo-github.svg" />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/monddelmundo/">
              <span className="span-links-logo">
                <img alt="" src="./assets/logos/logo-linkedin.svg" />
              </span>
            </a>
            <a href="https://www.facebook.com/0.mond.8/">
              <span className="span-links-logo">
                <img alt="" src="./assets/logos/logo-facebook.svg" />
              </span>
            </a>
            <a href="mailto:edmond.delmundo@gmail.com">
              <span className="span-links-logo">
                <img alt="" src="./assets/logos/mail-open-outline.svg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Work);
