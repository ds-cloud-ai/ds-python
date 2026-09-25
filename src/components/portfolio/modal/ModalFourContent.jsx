import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Article Generator</h3>
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
                Built an AI-driven article title and outline generation system using Flowise, 
                integrating multiple LLM nodes and prompt chains to generate engaging content structures.
                Skills and deliverables: OpenAI API, Prompt Engineering, AI Content Creation, Automation
              </p>
            </div>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        {/* <div className="videocontainer">
          <video
            id="video"
            className="responsive-video"
            controls
            poster="img/projects/project-1.jpg"
          >
            <source src="img/projects/video.mp4" type="video/mp4" />
          </video>
        </div> */}
        <img src="img/projects/project-401.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
