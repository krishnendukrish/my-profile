"use client"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
export default function Page() {
  return (
    <div className="w-full container mx-auto flex flex-col grow my-8">
      <div className="grow w-full">
        <Navbar />
        <Home />
      </div>
    </div>
  )
}
