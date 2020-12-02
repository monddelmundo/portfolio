import React from "react";
import { IWorkExperience } from "../workInterface";
import WorkDescription from "./WorkDescription";

const WorkExperience = ({ experience }: IWorkExperience) => {
  return (
    <div className="work-experience">
      <h4 className="text-work-highlight">{experience.title}</h4>
      <h4 className="text-work-details">{experience.details}</h4>
      <ul>
        {experience?.descriptions &&
          experience.descriptions.map((description, index) => (
            <WorkDescription key={index} description={description} />
          ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
