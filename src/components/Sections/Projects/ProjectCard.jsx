// import { ExternalLink } from "lucide-react";

// export const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-4">
//           <h3 className="text-xl font-bold">{project.title}</h3>
//           <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">
//             {project.type}
//           </span>
//         </div>
//         <p className="text-gray-400 mb-4">{project.description}</p>
//         <ul className="space-y-2 mb-4">
//           {project.details.map((detail, i) => (
//             <li key={i} className="flex items-start text-sm text-gray-300">
//               <span className="text-purple-400 mr-2">•</span>
//               <span>{detail}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map((tech, i) => (
//             <span
//               key={i}
//               className="px-3 py-1 bg-purple-600/20 rounded-full text-sm"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300"
//           >
//             View Project <ExternalLink className="ml-2" size={16} />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// const ProjectGrid = ({ projects }) => (
//   <div className="grid md:grid-cols-2 gap-8">
//     {projects.map((project, index) => (
//       <ProjectCard key={index} project={project} />
//     ))}
//   </div>
// );

// export default ProjectGrid;
import { ExternalLink } from "lucide-react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">
            {project.type}
          </span>
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <ul className="space-y-2 mb-4">
          {project.details.map((detail, i) => (
            <li key={i} className="flex items-start text-sm text-gray-300">
              <span className="text-purple-400 mr-2">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-600/20 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300"
          >
            View Project <ExternalLink className="ml-2" size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
