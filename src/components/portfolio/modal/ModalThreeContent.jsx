import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalThreeContent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>AI Document Parser</h3>
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
                  href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
                  target="_blank"
                  rel="noreferrer"
                >

                </a>
              </span>
            </div> */}
            {/* End .col */}
            <div className="col-12">
              <p className="open-sans-font mb-4">
                Developed PulseExtract, an AI/NLP-based platform for intelligent document processing. 
                Extracts, parses, and analyzes data from contracts and invoices. Supports batch processing and API integration. 
                Exports structured outputs (CSV, Excel, JSON). 
                Built with React and Python (Replit). 
                Skills and deliverables: Next.js, React, AI Development, Replit
              </p>
            </div>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="slide_item">
            <img src="img/projects/project-301.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-302.jpg" alt="slide 2" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-303.jpg" alt="slide 3" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-304.jpg" alt="slide 4" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
