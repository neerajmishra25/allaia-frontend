import React from "react";
import LogoImg from "../../img/logo.svg";
import LogoBlackImg from "../../img/logo_black.svg";
import "./Logo.scss";
const Logo = ({ color, width, height }) => {
  const logoImg = color === "black" ? LogoBlackImg : LogoImg;
  return (
    <img
      src={logoImg}
      width={width}
      height={height}
      className="brand-img"
      alt="Allaia"
    />
  );
};

export default Logo;
