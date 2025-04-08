import Link from "next/link"
import { skills, whatsAppNumber } from "../constants"

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-r px-20 py-28 shadow-lg from-blue-400   flex gap-20 flex-col lg:flex-row to-white w-full min-h-screen"
    >
      <div className="flex flex-col gap-3 lg:max-w-[50%]">
        <span className="text-[35px] font-bold text-left">About Me</span>
        <span className="text-[18px]  text-justify">
          I&apos; m a{" "}
          <span className="font-bold text-justify">
            Frontend Focused Web Developer
          </span>{" "}
          building and managing the Front-end of Websites and Web Applications
          that leads to the success of the overall product. Check out some of my
          work in the Projects section. Feel free to Connect or Follow me on my{" "}
          <Link
            href="https://www.linkedin.com/in/krishnendu-k-a4a374223"
            className="font-bold text-blue-700 hover:underline"
          >
            Linkedin.
          </Link>{" "}
          I&apos; m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos; t hesitate to{" "}
          <Link
            target="_blank"
            href={`https://wa.me/${whatsAppNumber}`}
            className="font-bold text-blue-700 hover:underline whitespace-nowrap"
          >
            contact me.
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <span className="text-[35px] font-bold text-left">My Skills</span>
        <div className="flex flex-wrap gap-5">
          {skills?.map((each, index) => (
            <div
              key={index}
              className="hover:shadow-xl p-3 border rounded-lg border-cyan-950 flex items-center justify-center transition-all duration-300 hover:translate-x-2 hover:translate-y-2"
            >
              {each}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default About
