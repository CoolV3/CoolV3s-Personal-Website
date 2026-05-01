import HeroSection from "@/components/hero";
import ProjektSection from "@/components/myProjekts";
import AboutMeSection from "@/components/aboutme";

export default function Home() {
  return (
      <div className="grid grid-cols-1">
        <div id="start" className="p-10 bg-amber-600 h-120 flex items-center justify-center">
            <HeroSection/>
        </div>

        <div id="about" className="flex items-center justify-center w-full h-auto bg-amber-300">
            <AboutMeSection/>
        </div>

        <div className="flex items-center justify-center h-auto ">
            <ProjektSection howMany={2}/>
        </div>
      </div>
  );
}