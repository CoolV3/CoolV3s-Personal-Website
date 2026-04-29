import { ArrowDown } from 'lucide-react';
import Link from "next/link";

export default function HeroSection() {


    return(
        <div className="flex items-center flex-col justify-between gap-10 ">
            <div>
                <h1 className="text-7xl ">Hello, Im Constantin</h1>
                <p>Im a freetime Developer</p>
            </div>

            {/*<button className="p-3 bg-white rounded-2xl text-black cursor-pointer animate-pulse">Learn More</button>*/}
            <div className="bg-white p-2 rounded-3xl text-black animate-bounce w-15 h-15 flex items-center justify-center ">
                <Link href="">
                    <ArrowDown className="w-10 h-10"/>
                </Link>
            </div>

        </div>
    )
}