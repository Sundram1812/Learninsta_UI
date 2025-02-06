import React from "react";
// import {instagram, gmail,telegram,youtube} from "../../icons"

function IconLogo({icon}) {
  return (
    <div className="flex shrink-0 items-center">
      <img alt="Your Company" src={icon} className="h-8 w-auto" />
    </div>
  );
}

export default IconLogo;
