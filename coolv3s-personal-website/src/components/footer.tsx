import Link from "next/link";
import { MoveUpRight } from 'lucide-react';
import Socials from "@/components/socials";

export default function FooterSection() {

    const links = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About Me",
            href: "/about",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "Github",
            href: "/socials?github",
        },
    ]

    return(
        <div className="bg-red-700 w-full h-full flex items-center justify-between">
            <div>
                <Socials/>
            </div>
            <div className="p-10 grid grid-cols-2">
                {links.map((link, index) => (
                    <Link href={link.href} key={index} className="flex items-center text-3xl group">{link.title} <MoveUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-500 w-8 h-8"/></Link>
                ))}

            </div>
        </div>
    )
}