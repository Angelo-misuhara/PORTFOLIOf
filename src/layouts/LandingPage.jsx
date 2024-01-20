import { useState } from "react";
import Sidebar from "../components/Sidebar"
import Typewriter from "typewriter-effect";

const LandingPage = () => {

 
  return (
    <>
      <div className=""id="MainPage">
        <div className=" flex flex-col w-auto gap-7 h-auto mb-[4rem] py-[4.5rem] lg:py-[0rem]">
          <div className=" h-[9rem] pb-11 md:h-[15rem] " >
            <h1 className="lg:text-9xl text-[3.2rem] font-bold">
              <Typewriter
                options={{

                  loop: true,
                  deleteSpeed: 100,
                  delay: 300,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("FULLSTACK")
                    .typeString(" DEVELOPER")
                    .pauseFor(1500)
                    .start();
                }}
              /></h1>
          </div>
          <div className="grid  grid-rows-5 grid-flow-col gap-9 italic">
            <a href="#MainPage">
                <div className=" flex flex-row justify-between hover:text-[#D24545]">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                →MAIN
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                01
              </div>
            </div>
          </a>
            <a href="#AboutPage">
                <div className=" flex flex-row justify-between hover:text-[#D24545]">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                →ABOUT
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                02
              </div>
            </div>
          </a>
            <a href="#SkillPage">
                <div className=" flex flex-row justify-between hover:text-[#D24545]">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                 →SKILLS
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                03
              </div>
            </div>
           </a>
            <a href="#ProjectPage">
                <div className=" flex flex-row justify-between hover:text-[#D24545]">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                 →PROJECTS
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                04
              </div>
            </div>
           </a>
            <div className=" flex flex-row justify-between hover:text-[#D24545]">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                 →CONTACTS
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                05
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </>
  )
}

export default LandingPage