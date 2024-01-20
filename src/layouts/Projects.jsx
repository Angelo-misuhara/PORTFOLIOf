import React, { useState } from 'react';

const projectsData = [
  { src: '/images/be.png', name: 'Todo(BackEnd)', description: 'Backend for todolist', link: 'https://github.com/Angelo-misuhara/mytodo-BE' },
 { src: '/images/todof.png', name: 'todo(FrontEnd)', description: 'FrontEnd for todolist(not finish)', link: 'https://mytodo-fe.vercel.app/' },
 { src: '/images/veri.png', name: 'Veri-sure', description: 'A activity for AIS', link: 'https://veri-sure.vercel.app/' },
 { src: '/images/lese.png', name: 'Lesserafim', description: ' A site for my idols', link: 'https://lesserafim.vercel.app/' },
 { src: '/images/dict.png', name: 'D-app', description: 'Dictionary site', link: 'https://dictioanry.vercel.app/' },
 { src: '/images/new.png', name: 'N-app', description: 'site that gives world news', link: 'https://n-app-xnkp.vercel.app/' },
 { src: '/images/pokeap.png', name: 'PokeApp', description: 'see the abilities of your pokemon!', link: 'https://pkmon.netlify.app/' },
 { src: '/images/img.png', name: 'Imgsrch-app', description: 'find your fav photos!', link: 'https://srchimg.netlify.app/' },
 { src: '/images/calcu.png', name: 'Calculator', description: 'my very 1st Project', link: 'https://angelo-misuhara.github.io/Calculator/' },
          
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
    <div className='ProjectPage py-11'id='ProjectPage'>
       <div className='flex flex-row justify-between lg:mt-[15rem] mt-[9rem] pb-9'id='ProjectPage'>
     <h1 className='lg:text-9xl text-[3.2rem] font-bold italic text-[#D24545]'>
      PROJECTS
        </h1>
         <h1 className='lg:text-9xl text-[3.2rem] font-bold italic text-[#D24545]'>
      03
     </h1>
    </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7  gap-8  lg:px-11">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative transition-transform duration-300 transform hover:scale-105"
              onClick={() => handleProjectClick(index)}
            >
              <img className="min-h-full max-w-full rounded" src={project.src} alt={`Project ${index + 1}`} />
              {(expandedProject === index || (window.innerWidth <= 768 && expandedProject !== null)) && (
                <div className="absolute inset-0 flex rounded items-center justify-center transition-colors duration-1500 bg-black bg-opacity-40 text-[#FFF4F4] p-4 opacity-100">
                  <div className=' flex flex-col gap-4'>
                    <h3 className="text-lg font-bold">{project.name}</h3>
               <p className="text-sm">{project.description}</p>
                <a href={project.link} className="font-bold text-[#3AB0FF]" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
  >
    View Demo
  </button>
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
