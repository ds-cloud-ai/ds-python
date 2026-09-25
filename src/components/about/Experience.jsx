import React from "react";

const experienceContent = [
  {
    year: "2018 - Present",
    position: "Python AI Engineer",
    compnayName: "SoftwareQ",
    details: `Delivered AI-powered data extraction, classification, and enrichment pipelines at scale and 
      automation engines connecting CRMs, APIs, and business tools`,
  },
  {
    year: "2021 - 2023",
    position: "Senior Back-end Engineer",
    compnayName: "Kinaxis",
    details: `Built internal tools, admin systems, and APIs for performance and reliability and delivered full-stack web applications end-to-end`,
  },
  {
    year: "2018 - 2021",
    position: "Lead Back-end Developer",
    compnayName: "Nintex Software Malaysia Sdn Bhd",
    details: `Shipped production systems across healthcare, real estate, music, cybersecurity, and more.`,
  },
  {
    year: "2017 - 2018",
    position: "Junior Python Developer",
    compnayName: "RootQuotient",
    details: `Built various SaaS platforms with Python and Django.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
