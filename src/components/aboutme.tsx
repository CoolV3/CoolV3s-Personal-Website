import ReactMarkdown from "react-markdown";


export default function AboutMeSection() {

    const AboutMeDescription = `Hi, I'm a student from Germany with a huge passion for **Web Development**.

Building intuitive and fast websites is what I love doing most. I specialize in modern web technologies and enjoy bringing creative ideas to the browser. 

### My Tech Stack
- **Web Development**: TypeScript, React, Next.js, HTML, and CSS (Tailwind)
- **General Programming**: Basic Python programming for scripting and automation

I'm always eager to learn new tools and frameworks to expand my skill set. Feel free to check out my latest projects below!
    `
    return(
        <div className="bg-amber-700 w-auto p-10 grow flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center pb-5 text-white">About Me</h1>
            <div className="prose prose-invert pt-10 prose-p:text-white prose-li:text-white marker:text-white">
                <ReactMarkdown>{AboutMeDescription}</ReactMarkdown>
            </div>
        </div>
    )
}