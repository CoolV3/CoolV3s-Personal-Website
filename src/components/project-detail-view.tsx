"use client";

import Image from "next/image";
import {useState} from "react";
import ReactMarkdown from "react-markdown"
import projectData from "../app/data/myProjects.json"
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import { MoveUpRight } from 'lucide-react';

export default function ProjectDetailView() {
    const searchParams= useSearchParams()
    const project_id = searchParams.get("id")

    if (project_id == null){
        return(
            <div className="flex grow bg-amber-950 items-center pt-10 flex-col gap-20">
                <div>
                    <h1 className="text-9xl text-red-600 text-center">Error</h1>
                    <p className="text-3xl">Please select a project first</p>
                </div>
                <Link href="/projects" className="relative flex transition-all items-center justify-center opacity-100 group text-white bg-black px-15 py-5 rounded-2xl cursor-pointer hover: duration-400 min-w-50">
                    <span className="group-hover:opacity-0 opacity-100 transition-all group-hover:scale-75 duration-400">See all Projects</span>
                    <MoveUpRight className="absolute w-8 h-8 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 duration-400"/>
                </Link>
            </div>
        )
    }

    const currentProject = projectData.Projects.find(
        (p) => String(p.ID) === project_id
    )

    if (currentProject == null){
        return(
            <div className="flex grow bg-amber-950 items-center pt-10 flex-col gap-20">
                <div>
                    <h1 className="text-9xl text-red-600 text-center">Error</h1>
                    <p className="text-3xl">Didn´t find a Project with the requestet Id.</p>
                </div>
                <Link href="/projects" className="relative flex transition-all items-center justify-center opacity-100 group text-white bg-black px-15 py-5 rounded-2xl cursor-pointer hover: duration-400 min-w-50">
                    <span className="group-hover:opacity-0 opacity-100 transition-all group-hover:scale-75 duration-400">See all Projects</span>
                    <MoveUpRight className="absolute w-8 h-8 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 duration-400"/>
                </Link>
            </div>
        )
    }

    const [currentImage, setCurrentImage] = useState(currentProject.Images[0])

    return(
        <div className="flex grow bg-amber-950 items-center pt-10 flex-col">
            <div className="flex">
                <div className="flex flex-col h-96 overflow-y-auto [direction:rtl]">
                    {currentProject.Images.map((image, index) => (
                        <div key={index}  className="py-4 px-2 [direction:ltr]">
                            <Image alt={"Project Detailed Picture"} src={image} width="100" height="100" className="rounded-2xl cursor-pointer" onClick={(e) => setCurrentImage(image)}/>
                        </div>
                    ))}
                </div>
                <div className="px-10">
                    <Image alt="Detailed Pic" src={currentImage} width="300" height="300" className="rounded-2xl h-auto w-auto"/>
                </div>
            </div>

            <div className="flex p-10 flex-col">
                <div>
                    <h1 className="text-5xl text-center">{currentProject.Title}</h1>
                </div>
                <div className="prose prose-invert pt-10">
                    <ReactMarkdown>{currentProject.LongDescription}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}