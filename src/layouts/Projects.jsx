import React, { useState } from 'react';

const projectsData = [
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', name: 'Project 1', description: 'Short description for Project 1', link: 'https://example.com/project1' },
  // Add data for other projects...
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <>
    <div className='ProjectPage'id='ProjectPage'>
       <div className='flex flex-row justify-between lg:mt-[15rem] mt-[9rem] pb-9'id='ProjectPage'>
     <h1 className='lg:text-9xl text-[3.2rem] font-bold italic text-[#D24545]'>
      PROJECTS
        </h1>
         <h1 className='lg:text-9xl text-[3.2rem] font-bold italic text-[#D24545]'>
      03
     </h1>
    </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative transition-transform duration-300 transform hover:scale-105"
              onClick={() => handleProjectClick(index)}
            >
              <img className="h-auto max-w-full rounded" src={project.src} alt={`Project ${index + 1}`} />
              {(expandedProject === index || (window.innerWidth <= 768 && expandedProject !== null)) && (
                <div className="absolute inset-0 flex rounded items-center justify-center transition-colors duration-1500 bg-black bg-opacity-40 text-white p-4 opacity-100">
                  <div>
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <p className="text-sm">{project.description}</p>
                    <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                      Learn more
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
