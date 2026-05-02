"use client";

import Image from "next/image";
import projectsData from "../app/data/myProjects.json"
import Link from "next/link";
import {useState} from "react";


export default function ProjektSection({ howMany }: { howMany?: number}) {
    const [projectCount, setProjectCount] = useState(howMany)


    const Projects = projectCount != null ? projectsData.Projects.slice(0, projectCount) : projectsData.Projects


    return(
        <div className="bg-amber-500 w-full flex items-center justify-center pt-10 pb-10 grow flex-col ">
            <div>
                <h1 className="text-5xl pb-10 text-center">My Projects</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {Projects.map((project, index ) => (
                    <div key={index} className="flex flex-col bg-white rounded-2xl w-90 h-130  items-center gap-4 ">
                        <Image alt="BlaBlaBla" src={project.Images[0]} width="300" height="300" className="rounded-2xl pt-3"></Image>
                        <h1 className=" text-5xl text-black ">{project.Title}</h1>
                        <p className="text-black text-center ">{project.ShortDescription}</p>

                        <Link href={"/projects/detail?id=" + project.ID} className="text-white bg-black px-15 py-5 rounded-2xl cursor-pointer hover:bg-amber-500 hover:text-black transition-colors duration-400">See More!</Link>
                    </div>
                    ))}
                </div>
            </div>
            { projectCount != null && projectCount < projectsData.Projects.length &&  (
            <div className="pt-10">
                <button className="text-white bg-black px-15 py-5 rounded-2xl cursor-pointer hover:bg-amber-500 hover:text-black transition-colors duration-400" onClick={(e) => setProjectCount(projectCount + 3)}>Load More</button>
            </div>
                )}
        </div>
    )
}