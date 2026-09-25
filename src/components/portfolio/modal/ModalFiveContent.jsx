import React from "react";

const ModalFiveContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Automated Alerts</h3>
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
                  href="https://themeforest.net/item/deski-saas-software-react-template/33799794"
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
              Automated Alerts for AI Conversations. Developed a system to monitor AI-assisted chat conversations with 
              n8n and SendGrid. Evaluates engagement scores and auto-sends email alerts with full conversation data.
              Skills and deliverables: Python, n8n, SendGrid, AI Development
            </p>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-501.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFiveContent;
