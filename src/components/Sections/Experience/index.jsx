import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </section>
  );
};

export default Experience;
