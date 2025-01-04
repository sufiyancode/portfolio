const AboutContent = ({ skills }) => (
  <div className="space-y-4">
    <p className="text-gray-300">
      I'm a Bachelor of Engineering student in Electronics and Telecommunication
      at Bharati Vidyapeeth's College of Engineering, Pune, pursuing my degree
      from 2021 to 2025.
    </p>
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="space-y-2">
          <p>
            <span className="text-purple-400">Languages:</span>{" "}
            {skills.technical.languages}
          </p>
          <p>
            <span className="text-purple-400">Web Technologies:</span>{" "}
            {skills.technical.webTechnologies}
          </p>
          <p>
            <span className="text-purple-400">Databases:</span>{" "}
            {skills.technical.databases}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
        <div className="space-y-2">
          <p>
            <span className="text-purple-400">Developer Tools:</span>{" "}
            {skills.core.developerTools}
          </p>
          <p>
            <span className="text-purple-400">Other Skills:</span>{" "}
            {skills.core.otherSkills}
          </p>
          <p>
            <span className="text-purple-400">Core Concepts:</span>{" "}
            {skills.core.coreConcepts}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const skills = {
    technical: {
      languages: "Python, Java, JavaScript",
      webTechnologies: "React.js, Node.js, Express.js, Next.js, Flask, Django",
      databases: "MongoDB, PostgreSQL, MySQL, Redis",
    },
    core: {
      developerTools: "Git, VS Code, PyCharm, IntelliJ IDEA",
      otherSkills: "DSA, OOPs, REST APIs, Socket.io, OAuth2, JWT",
      coreConcepts: "Networking, Operating Systems, DBMS",
    },
  };

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <AboutContent skills={skills} />
      </div>
    </section>
  );
};

export default About;
