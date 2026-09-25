import React from "react";

const ModalNineContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Business Automation</h3>
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
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase"></span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://www.behance.net/ib-themes"
                  target="_blank"
                  rel="noreferrer"
                >
                  
                </a>
              </span>
            </div> */}
            {/* End .col */}
          </div>
          <div className="col-12">
            <p className="open-sans-font mb-4">
              AI Agents Platform Business Automation. Created an AI platform that empowers companies to build and deploy AI agents for automating diverse workflows.
              Focused on usability and scalability for seamless adoption. 
              Specialized in building intuitive enterprise AI platforms and automation tools.
              Skills and deliverables: Python, FastAPI, AI App Development, Next.js
            </p>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-901.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalNineContent;
