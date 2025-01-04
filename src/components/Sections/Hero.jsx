import React from "react";
import Button from "../Shared/Button";

const CallToAction = () => {
  return (
    <div className="flex space-x-4">
      <Button href="#projects" variant="primary">
        View Projects
      </Button>
      <Button href="mailto:sksufiyan9860@gmail.com" variant="secondary">
        Contact Me
      </Button>
    </div>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
    <div className="max-w-3xl">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Hi, I'm Sufiyan
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        A Software Engineer specializing in full-stack development with
        expertise in React.js, Django, and Node.js
      </p>
      <CallToAction />
    </div>
  </section>
);

export default Hero;
