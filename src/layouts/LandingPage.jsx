import Sidebar from "../components/Sidebar"
import { useEffect } from "react";
import {useState} from "react";
import Typewriter from "typewriter-effect";

const LandingPage = () => {

 
  return (
    <>
      <div>
        <Sidebar />
        <div className=" flex flex-col w-auto gap-7 h-auto">
          <div className=" h-[9rem] pb-11 " >
            <h1 className="lg:text-9xl text-[3.2rem] font-bold">
              <Typewriter
                options={{

                  loop: true,
                  deleteSpeed: 100,
                  delay: 300,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("FULL STACK")
                    .typeString(" DEVELOPER")
                    .pauseFor(1500)
                    .start();
                }}
              /></h1>
          </div>
          <div className="grid  grid-rows-5 grid-flow-col gap-9 italic">
            <div className=" flex flex-row justify-between">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                →MAIN
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                01
              </div>
            </div>
            <div className=" flex flex-row justify-between">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                →ABOUT
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                02
              </div>
            </div>
             <div className=" flex flex-row justify-between">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                 →SKILLS
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                03
              </div>
            </div>
             <div className=" flex flex-row justify-between">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                 →PROJECTS
              </div>
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                04
              </div>
            </div>
            <div className=" flex flex-row justify-between">
              <div className="text-4xl lg:text-7xl font-bold cursor-pointer">
                 →CONTACT ME
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