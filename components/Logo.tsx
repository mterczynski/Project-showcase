import Image from "next/image";
import React from "react";
import "../css/logo.css";
function Logo() {
  return (
    <div>
      {" "}
      <div className="main_logo">
        <Image
          className="navbar-website-logo object-cover"
          src="/assets/social-media/website-logo-only-initials.png"
          alt="Website logo"
          width={100}
          height={100}
        />
        <div className="nav-logo-text-container lato  span">
          <span className="nav-logo-text-black">M</span>
          <span className="nav-logo-text-blue">TER</span>
          <span className="nav-logo-text-black">.PL</span>
        </div>
      </div>
    </div>
  );
}

export default Logo;
