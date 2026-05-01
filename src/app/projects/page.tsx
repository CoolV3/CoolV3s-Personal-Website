import ProjektSection from "@/components/myProjekts";


export default function ProjectsPage() {


    return(
        <div className="flex flex-col grow">
            <ProjektSection howMany={10}/>
        </div>
    )
}