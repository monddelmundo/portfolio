import React from "react";
import { ILinkLogo } from "../workInterface";

const LinkLogo = ({ href, src }: ILinkLogo) => {
  return (
    <a className="span-link" href={href}>
      <span className="span-links-logo">
        <img alt="" src={src} />
      </span>
    </a>
  );
};

export default LinkLogo;
