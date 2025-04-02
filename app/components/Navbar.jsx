import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full  justify-between flex p-6 sticky top-0 z-50 bg-[#EFF1FF]">
      <div className="flex gap-3 items-center">
        <Image
          className="w-9 h-10 rounded-full object-cover "
          height={25}
          width={25}
          src="/images/userImage.jpg"
          alt="userImage"
        />
        <span className="text-2xl font-bold">Krishnendu.K</span>
      </div>
      <Image
        onClick={() => {
          setMenuOpen(!isMenuOpen)
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="w-9 h-10 rounded-full object-cover md:hidden block"
        height={25}
        width={25}
        src="/images/menubar.png"
        alt="userImage"
      />
      {isMenuOpen && (
        <div className="bg-white px-6 py-4 absolute right-0 top-20 border rounded-md border-cyan-500 shadow-xl">
          <Links />
        </div>
      )}
      <div className="hidden md:block">
        <Links />
      </div>
    </div>
  )
}
export default Navbar

const Links = () => {
  const [pathname, setPathname] = useState(window.location?.hash?.substring(1))
  const links = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Experience", key: "experience" },
    { label: "Education", key: "education" },
    { label: "Contact", key: "contact" }
  ]
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center pr-11">
      {links.map((each, index) => (
        <Link
          onClick={() => setPathname(each.key)}
          href={`#${each.key}`}
          key={index}
          className={`text-lg hover:text-sky-500 ${
            pathname === each.key ? `text-sky-500` : ``
          }`}
        >
          {each.label}
        </Link>
      ))}
    </div>
  )
}
