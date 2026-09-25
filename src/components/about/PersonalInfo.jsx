import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Dolynster" },
  { meta: "last name", metaInfo: "Sidorov" },
  { meta: "Age", metaInfo: "31 Years" },
  // { meta: "Nationality", metaInfo: "Kazakhstan" },
  { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "" },
  { meta: "phone", metaInfo: "" },
  { meta: "Email", metaInfo: "dolynster@mail.com" },
  // { meta: "Skype", metaInfo: "" },
  // { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
