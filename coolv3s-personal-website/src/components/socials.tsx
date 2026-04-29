import Link from "next/link";
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function Socials() {


    return(
        <div className="flex items-center justify-start gap-3 px-10">
            <Link href="https://github.com/CoolV3">
                <SiGithub color="currentColor" size={40} className="cursor-pointer transition duration-500 hover:scale-130"/>
            </Link>
        </div>
    )
}