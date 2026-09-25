import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Real Estate Intelligence</h3>
          <div className="row open-sans-font">
            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase"></span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase"></span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Software </span>:{" "}
              <span className="ft-wt-600 uppercase"></span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://videohive.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  
                </a>
              </span>
            </div> */}
            {/* End .col */}
            <div className="col-12">
              <p className="open-sans-font mb-4">
                OpenClaw AI Agent Infrastructure on Real Estate Intelligence System. A comprehensive automation solution 
                designed to monitor, aggregate, and analyze real estate market listings and neighborhood data across major platforms. 
                Skills and deliverables: Python, FastAPI, AI Development, PostgreSQL, Next.js
              </p>
            </div>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        {/* <div className="videocontainer">
          <iframe
            className="youtube-video"
            title="youtube video"
            src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"
            allowFullScreen
          ></iframe>
        </div> */}
        <img src="img/projects/project-201.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}

      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
