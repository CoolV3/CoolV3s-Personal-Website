import Link from "next/link";
import { MoveUpRight } from 'lucide-react';

export default function NavBar() {

    const links = [
        {
            title: "About Me",
            href: "/about"
        },
        {
            title: "My Projects",
            href: "/projects"
        },
        {
            title: "My Github",
            href: "/blog"
        },
    ]
    const Name = "Constantin Meier"

    return(
        <div className="h-full w-full bg-linear-to-r from-indigo-700 via-purple-900 to accent-pink-800 animate-nav-gradient justify-between flex ">

            <div className="flex items-center p-10">
                <Link className="text-2xl cursor-pointer" href="/">{Name}</Link>
            </div>
            <div className="flex items-center pr-10 gap-5">
                {links.map((link, index) =>(
                    <Link key={index} href={link.href} className="flex py-3 px-5 rounded-2xl transition bg-white text-black group">{link.title} <MoveUpRight className="w-0 overflow-hidden group-hover:w-5 group-hover:ml-1 transition-all duration-500 text-black "/> </Link>
                ))}
            </div>

        </div>
    )

}