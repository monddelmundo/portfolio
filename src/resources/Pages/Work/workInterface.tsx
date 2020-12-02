import React from "react";

export interface ILinkLogo {
  href: string;
  src: string;
}

export interface IWorkExperience {
  experience: IExperience;
}

export interface IWorkExperiences {
  experiences: IExperience[];
}

interface IExperience {
  title: string;
  details: string;
  descriptions: string[];
}
