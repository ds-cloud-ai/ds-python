import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
// import Blog from "../../components/blog/Blog";
// import Contact from "../../components/Contact";
// import Social from "../../components/Social";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  // { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  document.body.classList.add("dark");

  return (
    <div className="yellow">
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            {/* End title */}
            <div
              className="container grid-gallery main-content"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Portfolio />
            </div>
            {/* End grid gallery */}
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <Address />
                  {/* End Address */}

                  {/* <Social /> */}
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  {/* <Contact /> */}
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Always Available !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Sound like a fit for what you're working on?
                  </p>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I'd love to hear what you're building.
                  </p>
                  <p className="open-sans-font mb-4">
                    I am always open to discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <p className="open-sans-font mb-4">
                    Let’s build something powerful.
                  </p>
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    What Sets Me Apart:
                  </h3>
                  <p className="open-sans-font mb-4">
                    I am senior, and I still write the code. On every engagement you get one engineer doing 
                    the actual work: architecting, coding, testing, deploying, documenting. Because I have built 
                    AI in regulated healthcare and fintech environments, compliance, evals, and monitoring are 
                    baked in from day one rather than bolted on. My neuroscience background shapes how I build 
                    AI systems that genuinely understand human behavior and needs.
                  </p>
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          {/* <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              
              <div className="row pb-50">
                <Blog />
              </div>
              
            </div>
          </TabPanel> */}
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
