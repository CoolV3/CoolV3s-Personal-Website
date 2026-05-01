import ProjectDetailView from "@/components/project-detail-view";
import {Suspense} from "react";

export default function ProjectDetailPage() {


    return(
        <Suspense fallback={<h1>Loading</h1>}>
            <div className="flex grow">
                <ProjectDetailView/>
            </div>
        </Suspense>
    )


}