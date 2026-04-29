import Image from "next/image";


export default function ProjektSection() {

    return(
        <div className="bg-amber-500 w-full h-full flex items-start justify-center pt-10 pb-10">
            <div>
                <h1 className="text-5xl pb-10 text-center">My Projects</h1>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col bg-white rounded-2xl w-100 h-130  items-center gap-4">
                        <Image alt="BlaBlaBla" src="/test-pic1.png" width="300" height="300" className="rounded-2xl pt-3"></Image>
                        <h1 className=" text-5xl text-black ">Title</h1>
                        <p className="text-black text-center ">Description Lorem Ipsum Lorem Ipsum Lorem IpsumDescription</p>
                        <button className="text-white bg-black px-15 py-5 rounded-2xl">See more!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}