"use client"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
export default function Page() {
  return (
    <div className="w-full flex flex-col grow px-3 bg-[#EFF1FF]">
      <div className="grow w-full container mx-auto my-8">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  )
}
