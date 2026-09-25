import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "PYTHON" },
  { skillClass: "p95", skillPercent: "95", skillName: "TYPESCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "BACKEND" },
  { skillClass: "p85", skillPercent: "85", skillName: "DEVOPS" },
  { skillClass: "p80", skillPercent: "80", skillName: "AWS" },
  { skillClass: "p80", skillPercent: "80", skillName: "AZURE" },
  { skillClass: "p80", skillPercent: "80", skillName: "GCP" },
  { skillClass: "p75", skillPercent: "75", skillName: "LLM" },
  { skillClass: "p75", skillPercent: "75", skillName: "RAG" },
  { skillClass: "p80", skillPercent: "80", skillName: "GENERATIVE AI" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
