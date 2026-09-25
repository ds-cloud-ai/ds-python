import React from "react";

const Address = () => {
  return (
    <>
      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>123 Stree New York City ,
        United States Of America 750065.
      </p> */}
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:dolynster@gmail.com">dolynster@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-whatsapp position-absolute"></i>
        <span className="d-block">whatsapp</span>{" "}
        <span className="d-block">+</span>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-telegram position-absolute"></i>
        <span className="d-block">telegram</span>{" "}
        <a href="https://t.me/dolynster">@dolynster</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
