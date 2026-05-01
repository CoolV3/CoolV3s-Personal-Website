import Link from "next/link";
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function Socials() {

    const gitHubLink = "https://github.com/CoolV3"
    return(
        <div className="flex items-center justify-start gap-3 px-10">
            <Link href={gitHubLink}>
                <SiGithub color="currentColor" size={40} className="cursor-pointer transition duration-500 hover:scale-130"/>
            </Link>
        </div>
    )
}