import React from "react";

const ModalSixContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Invoice Generator</h3>
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
                  href="https://www.pexels.com/search/agency/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.pexels.com
                </a>
              </span>
            </div> */}
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="col-12">
            <p className="open-sans-font mb-4">
              Online Invoice Generator. Built an AI-powered invoicing web app for OpretFaktura.dk using Next.js, Node.js, React, and MySQL. 
              Features AI-generated invoice layouts with LaTeX engine. Supports previewing, downloading, and managing invoices.
              Skills and deliverables: Python, FastAPI, AI Development, MySQL, Next.js
            </p>
          </div>
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-601.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSixContent;
