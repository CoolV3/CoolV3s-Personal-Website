import Link from "next/link";


export default function NavBar() {

    const links = [
        {
            title: "About Me",
            hoverClassNames: "hover:bg-black hover:text-white",
            href: ""
        },
        {
            title: "My Projects",
            hoverClassNames: "",
            href: ""
        },
        {
            title: "Hallo",
            hoverClassNames: "",
            href: ""
        },
    ]
    return(
        <div className="h-full w-full bg-linear-to-r from-indigo-700 via-purple-900 to accent-pink-800 animate-nav-gradient justify-between flex ">

            <div className="flex items-center p-10">
                <h1 className="text-2xl">Constantin Meier</h1>
            </div>
            <div className="flex items-center pr-10 gap-5">
                {links.map((link, index) =>(
                    <Link key={index} href={link.href} className={"pt-3 pb-3 pr-5 pl-5 rounded-2xl transition bg-white text-black " + link.hoverClassNames}>{link.title}</Link>
                ))}
            </div>

        </div>
    )

}